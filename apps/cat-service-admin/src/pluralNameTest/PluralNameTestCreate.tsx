import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { TestDatumTitle } from "../testDatum/TestDatumTitle";

export const PluralNameTestCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="MyEventData" source="myEventData" />
        <ReferenceArrayInput
          source="testData"
          reference="TestDatum"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TestDatumTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
