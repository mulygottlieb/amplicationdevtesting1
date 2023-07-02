/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { CreateMosheArgs } from "./CreateMosheArgs";
import { UpdateMosheArgs } from "./UpdateMosheArgs";
import { DeleteMosheArgs } from "./DeleteMosheArgs";
import { MosheFindManyArgs } from "./MosheFindManyArgs";
import { MosheFindUniqueArgs } from "./MosheFindUniqueArgs";
import { Moshe } from "./Moshe";
import { User } from "../../user/base/User";
import { MosheService } from "../moshe.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Moshe)
export class MosheResolverBase {
  constructor(
    protected readonly service: MosheService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Moshe",
    action: "read",
    possession: "any",
  })
  async _moshesMeta(
    @graphql.Args() args: MosheFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Moshe])
  @nestAccessControl.UseRoles({
    resource: "Moshe",
    action: "read",
    possession: "any",
  })
  async moshes(@graphql.Args() args: MosheFindManyArgs): Promise<Moshe[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Moshe, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Moshe",
    action: "read",
    possession: "own",
  })
  async moshe(
    @graphql.Args() args: MosheFindUniqueArgs
  ): Promise<Moshe | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Moshe)
  @nestAccessControl.UseRoles({
    resource: "Moshe",
    action: "create",
    possession: "any",
  })
  async createMoshe(@graphql.Args() args: CreateMosheArgs): Promise<Moshe> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        owner: args.data.owner
          ? {
              connect: args.data.owner,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Moshe)
  @nestAccessControl.UseRoles({
    resource: "Moshe",
    action: "update",
    possession: "any",
  })
  async updateMoshe(
    @graphql.Args() args: UpdateMosheArgs
  ): Promise<Moshe | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          owner: args.data.owner
            ? {
                connect: args.data.owner,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Moshe)
  @nestAccessControl.UseRoles({
    resource: "Moshe",
    action: "delete",
    possession: "any",
  })
  async deleteMoshe(
    @graphql.Args() args: DeleteMosheArgs
  ): Promise<Moshe | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => User, {
    nullable: true,
    name: "owner",
  })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  async resolveFieldOwner(
    @graphql.Parent() parent: Moshe
  ): Promise<User | null> {
    const result = await this.service.getOwner(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
