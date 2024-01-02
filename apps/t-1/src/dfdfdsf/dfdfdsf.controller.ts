import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { DfdfdsfService } from "./dfdfdsf.service";
import { DfdfdsfControllerBase } from "./base/dfdfdsf.controller.base";

@swagger.ApiTags("dfdfdsfs")
@common.Controller("dfdfdsfs")
export class DfdfdsfController extends DfdfdsfControllerBase {
  constructor(
    protected readonly service: DfdfdsfService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
