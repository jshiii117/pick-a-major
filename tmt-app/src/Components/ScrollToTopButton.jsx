import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';
import { Container } from '@mui/material';
import Fade from '@mui/material/Fade';
import IconButton from '@mui/material/IconButton';
import React, { useEffect, useState } from 'react';

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 10) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <Container>
      <Fade in={isVisible}>
        <IconButton
          aria-label="Scroll to top"
          onClick={scrollToTop}
          sx={(theme) => ({
            backgroundColor: theme.palette.BobaHighlight.main,
            borderRadius: '50%',
            bottom: 20,
            color: 'white',
            height: 40,
            position: 'fixed',
            right: 20,
            width: 40,
            zIndex: 1600,
            '&:hover': {
              backgroundColor: theme.palette.ThaiTea.main,
            },
          })}
        >
          <ArrowUpwardRoundedIcon />
        </IconButton>
      </Fade>
    </Container>
  );
}

export default ScrollToTopButton;
