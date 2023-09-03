import styled from 'styled-components';

export const Container = styled.div`
  padding: 24px;
  margin-inline: auto;
  width: 100%;
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

${props => props.w && `width: ${props.w};`}
${props => props.h && `height: : ${props.h};`}
${props => props.minW && `min-width: ${props.w};`}
${props => props.minH && `min-height: ${props.h};`}
${props => props.maxW && `max-width: ${props.w};`}
${props => props.maxH && `max-height: ${props.h};`}


  ${props => props.outline && `outline: 1px red solid;`}

${props =>
    props.fullscreen &&
    `
  width: 100vw;
  height: 100vh;
`}

${props =>
    props.full_center &&
    `
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`}

${props =>
    props.main_page &&
    `
    padding: 64px 20px 0 20px;

    @media (min-width: ${props.theme.breakpoints.tablet}) {
      padding: 64px 32px 0 32px;
    }

    @media (min-width: ${props.theme.breakpoints.laptopL}) {
      padding: 64px 128px 0 128px;
    }
`}

${props =>
    props.mb24 &&
    `
    margin-inline: 0;
    margin-block: 24px;
  `}


  ${props =>
    props.center &&
    `
  display: flext;
  justify-content: center;
`}
`;
