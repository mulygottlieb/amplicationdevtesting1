import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const MulyShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="jfield" source="jfield" />
        <TextField label="dsfs" source="dsfs" />
        <TextField label="cvxcv" source="cvxcv" />
      </SimpleShowLayout>
    </Show>
  );
};
