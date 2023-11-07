import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PazService } from "./paz.service";
import { PazControllerBase } from "./base/paz.controller.base";

@swagger.ApiTags("pazs")
@common.Controller("pazs")
export class PazController extends PazControllerBase {
  constructor(
    protected readonly service: PazService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
