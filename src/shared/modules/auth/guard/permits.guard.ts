import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { GqlExecutionContext } from '@nestjs/graphql';
import { PermitsType } from '../../../resources/permits.type';
import { AuthPermit, AuthUser } from '../types/auth-user.type';

@Injectable()
export class PermitsGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {
  }

  canActivate(context: ExecutionContext): boolean {

    const ctx = GqlExecutionContext.create(context);
    const request = ctx.getContext().req;
    const user: AuthUser | undefined = request.user;

    if(!user){
      return false;
    }

    if(!user.isActive){
      return false;
    }


    if(user.isAdmin){
      return true
    }

    const permits = this.reflector.get<PermitsType>('permits', context.getHandler());
    if (!permits) {
      return false;
    }

    let userPermits: Array<AuthPermit> = new Array<AuthPermit>();
    user.roles.map(x=>x.permits).forEach((x)=>{
       userPermits = userPermits.concat(x)
    });

    return userPermits.some(x=> x.module === permits.module && x.action === permits.action)
  }
}
