import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { PluralNameTestTitle } from "../pluralNameTest/PluralNameTestTitle";

export const TransactionMetaDatumCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="pluralNameTest.id"
          reference="PluralNameTest"
          label="PluralNameTest"
        >
          <SelectInput optionText={PluralNameTestTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
