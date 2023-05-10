import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TransactionMetaDatumServiceBase } from "./base/transactionMetaDatum.service.base";

@Injectable()
export class TransactionMetaDatumService extends TransactionMetaDatumServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
