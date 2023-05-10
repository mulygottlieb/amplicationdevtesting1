import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { PLURALNAMETEST_TITLE_FIELD } from "./PluralNameTestTitle";

export const PluralNameTestShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="MyEventData" source="myEventData" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="TestDatum"
          target="PluralNameTestId"
          label="TestData"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="PluralNameTest"
              source="pluralnametest.id"
              reference="PluralNameTest"
            >
              <TextField source={PLURALNAMETEST_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="TransactionMetaDatum"
          target="PluralNameTestId"
          label="transactionMetaData"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="PluralNameTest"
              source="pluralnametest.id"
              reference="PluralNameTest"
            >
              <TextField source={PLURALNAMETEST_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
