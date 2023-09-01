import styled from 'styled-components';

export const Container = styled.div`
display:flex;
flex-direction:row;
flex-wrap:wrap;
@media (min-width: ${props => props.theme.breakpoints.tablet}) {
    flex-wrap: nowrap;
    justify-content: space-between;
    
  }
`;