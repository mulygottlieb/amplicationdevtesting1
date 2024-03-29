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
import { MulyWhereInput } from "./MulyWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class MulyListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => MulyWhereInput,
  })
  @ValidateNested()
  @Type(() => MulyWhereInput)
  @IsOptional()
  @Field(() => MulyWhereInput, {
    nullable: true,
  })
  every?: MulyWhereInput;

  @ApiProperty({
    required: false,
    type: () => MulyWhereInput,
  })
  @ValidateNested()
  @Type(() => MulyWhereInput)
  @IsOptional()
  @Field(() => MulyWhereInput, {
    nullable: true,
  })
  some?: MulyWhereInput;

  @ApiProperty({
    required: false,
    type: () => MulyWhereInput,
  })
  @ValidateNested()
  @Type(() => MulyWhereInput)
  @IsOptional()
  @Field(() => MulyWhereInput, {
    nullable: true,
  })
  none?: MulyWhereInput;
}
export { MulyListRelationFilter as MulyListRelationFilter };
