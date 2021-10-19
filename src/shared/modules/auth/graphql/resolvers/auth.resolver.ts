import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { JwtAuthenticatedResponse } from '../dto/responses/jwt-authenticated.response';
import { SignInInput } from '../dto/inputs/sign-in.input';

import { GraphQLVoid } from 'graphql-scalars';
import { SignUpInput } from '../dto/inputs/sign-up.input';
import { AuthUserResponse } from '../dto/responses/auth-user.response';
import { Inject, UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from '../../guard/graphql.guard';
import { CurrentUser } from '../../decorators/current-user.decorator';
import { AuthUser } from '../../types/auth-user.type';
import { SignInCommand } from '../../cqrs/commands/impl/sign-in.command';
import { SignUpCommand } from '../../cqrs/commands/impl/sign-up.command';
import { ConfirmUserCommand } from '../../cqrs/commands/impl/confirm-user.command';

import { JwtAuthenticated } from '../../types/jwt-authenticated.type';
import { ForgotPasswordInput } from '../dto/inputs/forgot-password.input';
import { ForgotPasswordCommand } from '../../cqrs/commands/impl/forgot-password.command';
import { BaseResolver } from '../../../graphql/resolvers/BaseResolver';
import { IAppCQRSBus } from '../../../app-cqrs/interfaces/IAppCQRSBus';
import { CurrentLanguage } from '../../../../decorators/current-language.decorator';
import { Result } from '../../../../core/class/result';
import { APP_LANG } from '../../../../resources/lang.type';


@Resolver(() => AuthUserResponse)
export class AuthResolver extends BaseResolver {
  constructor(@Inject(IAppCQRSBus.$) private readonly _cqrsBus: IAppCQRSBus) {
    super();
  }

  @Mutation(() => JwtAuthenticatedResponse)
  async signIn(
    @Args('input') input: SignInInput,
    @CurrentLanguage() lang?: string,
  ): Promise<JwtAuthenticatedResponse> {
    const resp = await this._cqrsBus.execCommand<Result<JwtAuthenticated>>(new SignInCommand(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    // @ts-ignore
    return resp.unwrap();
  }

  @Mutation(() => GraphQLVoid, { nullable: true })
  async signUp(
    @Args('input') input: SignUpInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new SignUpCommand(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }


  @Query(() => AuthUserResponse, { nullable: true })
  @UseGuards(GqlAuthGuard)
  myInfo(
    @CurrentUser() user: AuthUser,
  ): AuthUser {
    return user;
  }


  @Query(() => Boolean)
  @UseGuards(GqlAuthGuard)
  verifyToken(): boolean {
    return true;
  }

  @Mutation(() => GraphQLVoid, { nullable: true })
  @UseGuards(GqlAuthGuard)
  async confirmUser(
    @CurrentUser() { email }: AuthUser,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new ConfirmUserCommand({ email }));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @Mutation(() => GraphQLVoid, {nullable: true})
  async forgotPassword(
    @Args('input') input: ForgotPasswordInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new ForgotPasswordCommand({
      ...input,
      lang: lang as APP_LANG ?? 'en',
    }));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);

  }

}
