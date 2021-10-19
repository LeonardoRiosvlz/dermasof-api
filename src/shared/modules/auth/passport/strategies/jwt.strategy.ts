import { Strategy, ExtractJwt } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import {
  UnauthorizedException,
  ExecutionContext, Injectable,
} from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';

import { AppConfigService } from 'src/shared/modules/config/service/app-config-service';
import { JwtPayload } from '../../types/jwt-payload.type';
import { AuthUser } from '../../types/auth-user.type';

import { ContextIdFactory, ModuleRef } from '@nestjs/core';
import { ITenantRequest } from '../../../../core/interfaces/ITenantRequest';
import { Result } from '../../../../core/class/result';
import { JwtAuthService } from '../../services/JwtAuthService';

const customExtractor = function(req: any) {
  if (req) {
    if (req.connectionParams)
      return req.connectionParams.authorization
        ? req.connectionParams.authorization.split(' ')[1]
        : undefined;
  }
};

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {

  constructor(private readonly _moduleRef: ModuleRef,
              private readonly _configService: AppConfigService) {
    super({
      passReqToCallback: true,
      jwtFromRequest: ExtractJwt.fromExtractors([
        customExtractor,
        ExtractJwt.fromAuthHeaderAsBearerToken(),
      ]), ignoreExpiration: false,
      secretOrKey: _configService.app.jwtSecret,
    });
  }


  async validate(request: ITenantRequest, payload: JwtPayload) {

      const tenant = request.tenant;
      const context = ContextIdFactory.getByRequest(request);
      const service = await this._moduleRef.resolve(JwtAuthService, context);
      const userOrErr: Result<AuthUser> = await service.validateUserByJwtPayload({ payload, tenant });
      if (userOrErr.isFailure) {
        throw new UnauthorizedException(userOrErr.unwrapError(), userOrErr.unwrapError().message);
      }
      return userOrErr.unwrap();
  }

  getRequest(context: ExecutionContext) {
    const ctx = GqlExecutionContext.create(context);
    return ctx.getContext().req;
  }
}
