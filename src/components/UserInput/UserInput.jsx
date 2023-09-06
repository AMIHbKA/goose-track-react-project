import { MessageError, Label, Input } from 'components/UserInput/UserInput.styled';

export const UserInput =
    ({ title, type, name, placeholder = null })=> {
  return (
    <Label>
      {title}
      <Input type={type} name={name} placeholder={placeholder} />
      <MessageError name={name} component="p" />
    </Label>
  );
};