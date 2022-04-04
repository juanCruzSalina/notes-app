import React from 'react'
import styled from 'styled-components';
import { rgba } from 'polished';
import WelcomePart from 'components/organisms/WelcomePart/WelcomePart';
import Image from 'components/atoms/Image/Image';
import { motion } from 'framer-motion';

const PageBackground = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${props => rgba(props.theme.colors.dark, .8)};
  display: grid;
  place-items: center;
`;

const Container = styled(motion.div)`
  background-color: ${props => props.theme.colors.light};
  width: 60%;
  height: 80%;
  display: flex;
`;

const Filler = styled.div`
  width: 35%;
  height: 100%;
  background-color: ${props => props.theme.colors.secondary};
`;

const HomePage: React.FC = () => {

  const transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] };
  const enterAnimation = {
    initial: { opacity: 0 },
    enter: { opacity: 1, transition },
    exit: {
      opacity: 0,
      transition: { transition }
    }
  };

  return (
    <PageBackground>
      <Container
        variants={enterAnimation}
        initial={'initial'}
        exit={'exit'}
        animate={'enter'}
      >
        <WelcomePart/>
        <Filler>
          <Image
            source='https://www.sheknows.com/wp-content/uploads/2020/06/best-post-it-note-sticky-sets-amazon.jpg'
            alt='main-menu-alt'
          />
        </Filler>
      </Container>
    </PageBackground>
  )
}

export default HomePage