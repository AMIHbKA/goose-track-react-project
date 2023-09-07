import {
  Container,
  GooseContainer,
  FirstDigit,
  LostGoose,
  LastDigit,
  LostText,
  Button,
} from './NotFoundPage.styled';

import lostGoose from '../../UI/images/NotFound/goose404webx1.png';
import lostGooseMob from '../../UI/images/NotFound/goose404mobx1.png';
import lostGooseMob2x from '../../UI/images/NotFound/goose404mobx2.png';
import lostGooseTab from '../../UI/images/NotFound/goose404tabx1.png';
import lostGooseTab2x from '../../UI/images/NotFound/goose404tabx2.png';
// import RocketGooseTrans from '../../UI/images/NotFound/RocketGooseTrans.gif'

export const NotFoundPage = () => {
  return (
    <Container>
      <GooseContainer>
        <FirstDigit>4</FirstDigit>
        <LostGoose>
          <source
            media="(min-width: 768px)"
            srcSet={`${lostGooseTab}, ${lostGooseTab2x} 2x`}
          />
          <source
            media="(min-width: 375px)"
            srcSet={`${lostGooseMob}, ${lostGooseMob2x} 2x,`}
          />
          <img src={`${lostGoose}`} alt="404 page not found" />
        </LostGoose>
        <LastDigit>4</LastDigit>
      </GooseContainer>
      <LostText>
        We’re sorry, the page you requested could not be found. Please go back
        to the homepage.
      </LostText>
      <Button to="/">Back to home</Button>
    </Container>
  );
};
