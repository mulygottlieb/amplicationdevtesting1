import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { PluralNameTestTitle } from "../pluralNameTest/PluralNameTestTitle";

export const TestDatumEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="pluralNameTest.id"
          reference="PluralNameTest"
          label="PluralNameTest"
        >
          <SelectInput optionText={PluralNameTestTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
