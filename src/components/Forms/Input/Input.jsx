import { ErrorMessage, Field } from 'formik';
import styled from 'styled-components';
import { ValidMessage } from '../ValidMessage/ValidMessage';
import { CommonInfoStringStyles, DoneIcon, ErrorIcon } from 'UI';
import PropTypes from 'prop-types';

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
  touched = false,
  ...props
}) => {
  const valid = !error && touched;
  const actualClass = `${valid ? 'valid' : ''} ${error ? 'invalid' : ''}`;
  return (
    <>
      <Label htmlFor={name} className={actualClass}>
        {label}
        <div className="input__Wrapper">
          {valid && <DoneIcon className="input__icon" />}
          {error && <ErrorIcon className="input__icon" />}
          <FieldStyled
            className={actualClass}
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
        </div>
        {showErrors && (
          <ErrorMessage
            name={name}
            className="error-message"
            component="span"
          />
        )}
        {valid && <ValidMessage name={name} />}
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

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: 14px;
  }

  .error-message {
    ${CommonInfoStringStyles}
  }

  &.valid {
    color: #3cbc81;
  }

  &.invalid {
    color: #da1414;
  }

  .input__Wrapper {
    position: relative;

    .input__icon {
      position: absolute;
      top: 50%;
      right: 14px;
      z-index: 2;
      width: 24px;
      transform: translateY(-50%);
    }
  }
`;

Input.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  showErrors: PropTypes.bool,
  type: PropTypes.string,
  maxw: PropTypes.string,
  minw: PropTypes.string,
  maxh: PropTypes.string,
  minh: PropTypes.string,
  w: PropTypes.string,
  h: PropTypes.string,
  error: PropTypes.string,
  touched: PropTypes.bool,
};

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

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    padding-inline: 18px;
    font-size: 16px;
    height: ${props => props.h || '54px'};
  }

  &.invalid {
    border-color: #da1414;
  }

  &.valid {
    border-color: #3cbc81;
  }

  ${props => props.maxw && `max-width: ${props.maxw};`}
  ${props => props.minw && `min-width: ${props.minw};`}
  ${props => props.maxh && `max-height: ${props.maxh};`}
  ${props => props.minh && `min-height: ${props.minh};`}

  &:hover,
  &:focus,
  &:active {
    border: 1px solid #111;
  }

  &::placeholder {
    color: rgb(17 17 17 / 0.15);
  }
`;
