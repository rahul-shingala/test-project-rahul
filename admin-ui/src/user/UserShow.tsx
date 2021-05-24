import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ListProps,
  BooleanField,
  TextField,
  DateField,
} from "react-admin";

export const UserShow = (props: ListProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <BooleanField label="Created At" source="createdAt" />
        <TextField label="First Name" source="firstName" />
        <TextField label="ID" source="id" />
        <TextField label="Last Name" source="lastName" />
        <TextField label="Roles" source="roles" />
        <DateField source="updatedAtfghfd" label="Updated At" />
        <TextField label="Username" source="username" />
      </SimpleShowLayout>
    </Show>
  );
};
