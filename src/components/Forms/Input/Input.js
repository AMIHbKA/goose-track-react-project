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
  error,
  touched,
  ...props
}) => {
  const valid = !error && touched;

  console.log(name, 'touched:', touched, 'error:', error);
  return (
    <>
      <Label htmlFor={name}>
        {label}
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
        {valid && <div>It's Ok</div>}
      </Label>
    </>
  );
};

const Label = styled.label`
  display: ${props => props.display || 'block'};
  color: #111;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const FieldStyled = styled(Field)`
  display: ${props => props.display || 'block'};
  width: ${props => props.w || '100%'};
  height: ${props => props.h || '46px'};
  margin-top: 8px;
  padding-inline: 14px;
  font-size: 14px;
  border-radius: 8px;
  border: 1px solid #dce3e5;
  outline: none;

  ${props => props.maxw && `max-width: ${props.maxw};`}
  ${props => props.minw && `min-width: ${props.minw};`}
  ${props => props.maxh && `max-height: ${props.maxh};`}
  ${props => props.minh && `min-height: ${props.minh};`}

  &:hover, &:focus, &:active {
    border: 1px solid #111;
  }

  &::placeholder {
    color: rgb(17 17 17 / 0.15);
  }
`;
