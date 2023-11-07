import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PazModuleBase } from "./base/paz.module.base";
import { PazService } from "./paz.service";
import { PazController } from "./paz.controller";
import { PazResolver } from "./paz.resolver";

@Module({
  imports: [PazModuleBase, forwardRef(() => AuthModule)],
  controllers: [PazController],
  providers: [PazService, PazResolver],
  exports: [PazService],
})
export class PazModule {}
