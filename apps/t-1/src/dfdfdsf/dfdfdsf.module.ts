import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { DfdfdsfModuleBase } from "./base/dfdfdsf.module.base";
import { DfdfdsfService } from "./dfdfdsf.service";
import { DfdfdsfController } from "./dfdfdsf.controller";
import { DfdfdsfResolver } from "./dfdfdsf.resolver";

@Module({
  imports: [DfdfdsfModuleBase, forwardRef(() => AuthModule)],
  controllers: [DfdfdsfController],
  providers: [DfdfdsfService, DfdfdsfResolver],
  exports: [DfdfdsfService],
})
export class DfdfdsfModule {}
