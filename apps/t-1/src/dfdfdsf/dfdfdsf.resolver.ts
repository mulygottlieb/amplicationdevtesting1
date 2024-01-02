import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { DfdfdsfResolverBase } from "./base/dfdfdsf.resolver.base";
import { Dfdfdsf } from "./base/Dfdfdsf";
import { DfdfdsfService } from "./dfdfdsf.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Dfdfdsf)
export class DfdfdsfResolver extends DfdfdsfResolverBase {
  constructor(
    protected readonly service: DfdfdsfService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
