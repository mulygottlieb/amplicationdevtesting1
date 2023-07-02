import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { TransactionMetaDatumService } from "./transactionMetaDatum.service";
import { TransactionMetaDatumControllerBase } from "./base/transactionMetaDatum.controller.base";

@swagger.ApiTags("transactionMetaData")
@common.Controller("transactionMetaData")
export class TransactionMetaDatumController extends TransactionMetaDatumControllerBase {
  constructor(
    protected readonly service: TransactionMetaDatumService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
