/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { TransactionMetaDatumWhereInput } from "./TransactionMetaDatumWhereInput";
import { Type } from "class-transformer";
import { TransactionMetaDatumOrderByInput } from "./TransactionMetaDatumOrderByInput";

@ArgsType()
class TransactionMetaDatumFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => TransactionMetaDatumWhereInput,
  })
  @Field(() => TransactionMetaDatumWhereInput, { nullable: true })
  @Type(() => TransactionMetaDatumWhereInput)
  where?: TransactionMetaDatumWhereInput;

  @ApiProperty({
    required: false,
    type: [TransactionMetaDatumOrderByInput],
  })
  @Field(() => [TransactionMetaDatumOrderByInput], { nullable: true })
  @Type(() => TransactionMetaDatumOrderByInput)
  orderBy?: Array<TransactionMetaDatumOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { TransactionMetaDatumFindManyArgs as TransactionMetaDatumFindManyArgs };
