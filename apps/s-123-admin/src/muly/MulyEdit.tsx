import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const MulyEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <div />
        <TextInput label="dsfs" source="dsfs" />
        <TextInput label="cvxcv" source="cvxcv" />
      </SimpleForm>
    </Edit>
  );
};
