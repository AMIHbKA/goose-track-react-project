import { ErrorMessage, Field } from 'formik';
import styled from 'styled-components';

export const Input = ({
  name,
  label,
  showErrors = true,
  type = 'text',
  maxw,
  minw,
  maxh,
  minh,
  w,
  h,
  ...props
}) => {
  console.log(w);
  return (
    <>
      <Label htmlFor={name}>{label}</Label>
      <FieldStyled
        name={name}
        type={type}
        w={w}
        h={h}
        maxw={maxw}
        minw={minw}
        maxh={maxh}
        minh={minh}
        {...props}
      />
      {showErrors && <ErrorMessage name={name} />}
    </>
  );
};

const Label = styled.label`
  color: #111;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const FieldStyled = styled(Field)`
  display: ${props => props.display || 'inline'};
  width: ${props => props.w || '100%'};
  max-width: 400px;
`;
