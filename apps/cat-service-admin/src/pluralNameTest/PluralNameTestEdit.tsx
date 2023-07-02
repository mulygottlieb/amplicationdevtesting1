import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { TestDatumTitle } from "../testDatum/TestDatumTitle";
import { TransactionMetaDatumTitle } from "../transactionMetaDatum/TransactionMetaDatumTitle";

export const PluralNameTestEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
        <ReferenceArrayInput
          source="transactionMetaData"
          reference="TransactionMetaDatum"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TransactionMetaDatumTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
