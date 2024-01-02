import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DfdfdsfServiceBase } from "./base/dfdfdsf.service.base";

@Injectable()
export class DfdfdsfService extends DfdfdsfServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
