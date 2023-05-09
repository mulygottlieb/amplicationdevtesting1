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
import { CreatePluralNameTestArgs } from "./CreatePluralNameTestArgs";
import { UpdatePluralNameTestArgs } from "./UpdatePluralNameTestArgs";
import { DeletePluralNameTestArgs } from "./DeletePluralNameTestArgs";
import { PluralNameTestFindManyArgs } from "./PluralNameTestFindManyArgs";
import { PluralNameTestFindUniqueArgs } from "./PluralNameTestFindUniqueArgs";
import { PluralNameTest } from "./PluralNameTest";
import { PluralNameTestService } from "../pluralNameTest.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PluralNameTest)
export class PluralNameTestResolverBase {
  constructor(
    protected readonly service: PluralNameTestService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "PluralNameTest",
    action: "read",
    possession: "any",
  })
  async _pluralNameTestsMeta(
    @graphql.Args() args: PluralNameTestFindManyArgs
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
  @graphql.Query(() => [PluralNameTest])
  @nestAccessControl.UseRoles({
    resource: "PluralNameTest",
    action: "read",
    possession: "any",
  })
  async pluralNameTests(
    @graphql.Args() args: PluralNameTestFindManyArgs
  ): Promise<PluralNameTest[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => PluralNameTest, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "PluralNameTest",
    action: "read",
    possession: "own",
  })
  async pluralNameTest(
    @graphql.Args() args: PluralNameTestFindUniqueArgs
  ): Promise<PluralNameTest | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => PluralNameTest)
  @nestAccessControl.UseRoles({
    resource: "PluralNameTest",
    action: "create",
    possession: "any",
  })
  async createPluralNameTest(
    @graphql.Args() args: CreatePluralNameTestArgs
  ): Promise<PluralNameTest> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => PluralNameTest)
  @nestAccessControl.UseRoles({
    resource: "PluralNameTest",
    action: "update",
    possession: "any",
  })
  async updatePluralNameTest(
    @graphql.Args() args: UpdatePluralNameTestArgs
  ): Promise<PluralNameTest | null> {
    try {
      return await this.service.update({
        ...args,
        data: args.data,
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

  @graphql.Mutation(() => PluralNameTest)
  @nestAccessControl.UseRoles({
    resource: "PluralNameTest",
    action: "delete",
    possession: "any",
  })
  async deletePluralNameTest(
    @graphql.Args() args: DeletePluralNameTestArgs
  ): Promise<PluralNameTest | null> {
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
}