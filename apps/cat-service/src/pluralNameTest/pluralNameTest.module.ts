import { Module } from "@nestjs/common";
import { PluralNameTestModuleBase } from "./base/pluralNameTest.module.base";
import { PluralNameTestService } from "./pluralNameTest.service";
import { PluralNameTestController } from "./pluralNameTest.controller";
import { PluralNameTestResolver } from "./pluralNameTest.resolver";

@Module({
  imports: [PluralNameTestModuleBase],
  controllers: [PluralNameTestController],
  providers: [PluralNameTestService, PluralNameTestResolver],
  exports: [PluralNameTestService],
})
export class PluralNameTestModule {}
