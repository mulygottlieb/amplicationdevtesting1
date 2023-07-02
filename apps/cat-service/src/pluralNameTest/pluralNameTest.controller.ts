import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PluralNameTestService } from "./pluralNameTest.service";
import { PluralNameTestControllerBase } from "./base/pluralNameTest.controller.base";

@swagger.ApiTags("pluralNameTests")
@common.Controller("pluralNameTests")
export class PluralNameTestController extends PluralNameTestControllerBase {
  constructor(
    protected readonly service: PluralNameTestService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
