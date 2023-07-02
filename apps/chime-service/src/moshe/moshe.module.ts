import { Module } from "@nestjs/common";
import { MosheModuleBase } from "./base/moshe.module.base";
import { MosheService } from "./moshe.service";
import { MosheController } from "./moshe.controller";
import { MosheResolver } from "./moshe.resolver";

@Module({
  imports: [MosheModuleBase],
  controllers: [MosheController],
  providers: [MosheService, MosheResolver],
  exports: [MosheService],
})
export class MosheModule {}
