import { Field, Form } from 'formik';
import styled from 'styled-components';

export const AddForm = styled(Form)`
border-radius: 8px;
border: ${props => props.theme.addTaskModal.border};
background: ${props => props.theme.addTaskModal.background};
box-shadow: 0px 4px 16px 0px rgba(17, 17, 17, 0.10);
min-width: 303px;
min-height: 336px;
display: flex;
flex-direction: column;
padding-top: 48px;
padding-left: 16px;
padding-right: 16px;
`

export const Wrapper = styled.div`
display: flex;
gap: 15px;
`

export const FormLabel = styled.label`
width: 100%;
margin-bottom: 16px;
font-family: Inter;
font-size: 12px;
font-style: normal;
font-weight: 500;
line-height: 1.16;
color: ${props => props.theme.colors.userPanelLabel};
`
export const Input = styled(Field)`
display:block;
width: 100%;
margin-top: 8px;
padding: 12px 14px;
border-radius: 8px;
background: ${props => props.theme.addTaskModal.inputBackground};
border: ${props => props.theme.addTaskModal.inputBorder};
color:  ${props => props.theme.colors.mainText};
appearance: none;
font-size: 14px;
font-weight: 600;
line-height: 1.28;

&.invalid {
   border: 1px solid #EA3D65;
}
`

export const RadioContainer = styled.div`
display: flex;
gap: 16px;
margin-bottom: 32px;`

export const RadioLabel = styled.label`
margin-left: 4px;
font-size: 12px;
font-weight: 600;
line-height: 1.16;
color: ${props => props.theme.colors.mainText};
`
export const RadioInput = styled(Field)`
position: relative;
appearance: none;
width: 10px;
height: 10px;
margin-right: 4px;
border-radius: 50%;

&:checked::after{
    position: absolute;
    left: -2px;
    top: -2px;
    display: block;
    width: 12px;
    height: 12px;
    background: transparent;
    content: '';
    
    box-sizing: content-box;
    border-radius:100%;
}
`

export const Low = styled(RadioInput)`
background: #72C2F8;
 &:checked::after {
    border: 1px solid rgba(114, 194, 248, 0.50); 
 }`

export const Medium = styled(RadioInput)`
 background: #F3B249;
  &:checked::after {
     border: 1px solid rgba(243, 178, 73, 0.50); 
  }`

export const High = styled(RadioInput)`
  background: #EA3D65;
   &:checked::after {
      border: 1px solid rgba(234, 61, 101, 0.50); 
   }`

const Button = styled.button`
width: 100%;
padding: 10px 20px;
border-radius: 8px;
border: 0px;
font-size: 14px;
font-weight: 600;
line-height: 1.28;
`
export const ActionButton = styled(Button)`
display: flex;
justify-content: center;
gap: 8px;
background: ${props => props.theme.colors.primary};
color: #fff;

`

export const CancelButton = styled(Button)`
background: #EFEFEF;
color: #111;
 &:hover {
    background: ${props => props.theme.colors.primary};
    color: #fff;
 }
`

export const Error = styled.span`
color: #EA3D65`