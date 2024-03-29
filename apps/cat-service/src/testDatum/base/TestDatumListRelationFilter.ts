/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { TestDatumWhereInput } from "./TestDatumWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class TestDatumListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => TestDatumWhereInput,
  })
  @ValidateNested()
  @Type(() => TestDatumWhereInput)
  @IsOptional()
  @Field(() => TestDatumWhereInput, {
    nullable: true,
  })
  every?: TestDatumWhereInput;

  @ApiProperty({
    required: false,
    type: () => TestDatumWhereInput,
  })
  @ValidateNested()
  @Type(() => TestDatumWhereInput)
  @IsOptional()
  @Field(() => TestDatumWhereInput, {
    nullable: true,
  })
  some?: TestDatumWhereInput;

  @ApiProperty({
    required: false,
    type: () => TestDatumWhereInput,
  })
  @ValidateNested()
  @Type(() => TestDatumWhereInput)
  @IsOptional()
  @Field(() => TestDatumWhereInput, {
    nullable: true,
  })
  none?: TestDatumWhereInput;
}
export { TestDatumListRelationFilter as TestDatumListRelationFilter };
