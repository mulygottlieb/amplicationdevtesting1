import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { PluralNameTestResolverBase } from "./base/pluralNameTest.resolver.base";
import { PluralNameTest } from "./base/PluralNameTest";
import { PluralNameTestService } from "./pluralNameTest.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PluralNameTest)
export class PluralNameTestResolver extends PluralNameTestResolverBase {
  constructor(
    protected readonly service: PluralNameTestService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
