import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PluralNameTestServiceBase } from "./base/pluralNameTest.service.base";

@Injectable()
export class PluralNameTestService extends PluralNameTestServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
