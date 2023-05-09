import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const PluralNameTestEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="MyEventData" source="myEventData" />
      </SimpleForm>
    </Edit>
  );
};
