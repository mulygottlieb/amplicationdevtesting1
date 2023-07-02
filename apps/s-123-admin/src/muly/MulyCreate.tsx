import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const MulyCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <div />
        <TextInput label="dsfs" source="dsfs" />
        <TextInput label="cvxcv" source="cvxcv" />
      </SimpleForm>
    </Create>
  );
};
