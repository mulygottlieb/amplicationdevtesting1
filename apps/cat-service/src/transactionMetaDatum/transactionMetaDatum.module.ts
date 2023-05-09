import { Module } from "@nestjs/common";
import { TransactionMetaDatumModuleBase } from "./base/transactionMetaDatum.module.base";
import { TransactionMetaDatumService } from "./transactionMetaDatum.service";
import { TransactionMetaDatumController } from "./transactionMetaDatum.controller";
import { TransactionMetaDatumResolver } from "./transactionMetaDatum.resolver";

@Module({
  imports: [TransactionMetaDatumModuleBase],
  controllers: [TransactionMetaDatumController],
  providers: [TransactionMetaDatumService, TransactionMetaDatumResolver],
  exports: [TransactionMetaDatumService],
})
export class TransactionMetaDatumModule {}
