import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { TransactionMetaDatumResolverBase } from "./base/transactionMetaDatum.resolver.base";
import { TransactionMetaDatum } from "./base/TransactionMetaDatum";
import { TransactionMetaDatumService } from "./transactionMetaDatum.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => TransactionMetaDatum)
export class TransactionMetaDatumResolver extends TransactionMetaDatumResolverBase {
  constructor(
    protected readonly service: TransactionMetaDatumService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
