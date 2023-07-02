/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsString, IsOptional, ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { TestDatum } from "../../testDatum/base/TestDatum";
import { TransactionMetaDatum } from "../../transactionMetaDatum/base/TransactionMetaDatum";

@ObjectType()
class PluralNameTest {
  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  myEventData!: string | null;

  @ApiProperty({
    required: false,
    type: () => [TestDatum],
  })
  @ValidateNested()
  @Type(() => TestDatum)
  @IsOptional()
  testData?: Array<TestDatum>;

  @ApiProperty({
    required: false,
    type: () => [TransactionMetaDatum],
  })
  @ValidateNested()
  @Type(() => TransactionMetaDatum)
  @IsOptional()
  transactionMetaData?: Array<TransactionMetaDatum>;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}

export { PluralNameTest as PluralNameTest };
