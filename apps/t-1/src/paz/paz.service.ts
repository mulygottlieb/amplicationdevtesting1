import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PazServiceBase } from "./base/paz.service.base";

@Injectable()
export class PazService extends PazServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
