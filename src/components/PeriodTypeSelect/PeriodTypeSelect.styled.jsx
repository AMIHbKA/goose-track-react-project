import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const PeriodSelector = styled(NavLink)`
border-right: 1px solid rgba(62, 133, 243, 0.20);
background: ${props => props.theme.calendarToolBar.buttonBackground};
padding: 8px 16px;
cursor:pointer;

&.active {
    background: ${props => props.theme.calendarToolBar.ActiveButtonBackground};;
}
`;

export const SelectorMonth = styled(PeriodSelector)`
border-radius: 8px 0px 0px 8px;`;

export const SelectorDay = styled(PeriodSelector)`
border-radius: 0px 8px 8px 0px;`;

export const Navigation =styled.div`
display:flex;
flex-direction:row;
`;

export const Text = styled.span`
color:${props => props.theme.colors.primary};
`