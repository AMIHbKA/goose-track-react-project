import styled from 'styled-components';

export const Container = styled.div`
  padding: 24px;

  margin-inline: auto;

  max-width: ${props => props.theme.breakpoints.laptopL};

  ${props => props.flex && `display: flex;`}
  ${props => props.block && `display: block;`}
  ${props => props.inline && `display: inline;`}
  ${props => props.inBlock && `display: inline-block;`}
  
  ${props =>
    props.jc &&
    `
    justify-content: ${props.jc};
  `}
  ${props =>
    props.ai &&
    `
    align-items: ${props.ai};
  `}

   ${props =>
    props.gap &&
    `
    gap: ${props.gap};
  `}

  ${props => props.outline && `outline: 1px red solid;`}
`;
