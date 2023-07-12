import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Stack,
  Typography,
} from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

import { MOCK_DATA } from '../utils/mockData';
import IconSvg from './IconSvg.jsx';

function ResultCardsContainer() {
  return (
    <Stack spacing={3}>
      {MOCK_DATA.map((item) => {
        return (
          <Link
            to={`/careers/${item.name}`}
            style={{
              textDecoration: 'none',
            }}
            key={item.id}
          >
            <Card
              sx={{
                display: 'flex',
                alignItems: 'center',
                backgroundColor: 'Matcha.main',
                color: 'white',
                '&.MuiCard-root': {
                  padding: '0',
                  borderRadius: '15px',
                  margin: '0',
                },
                ':hover': {
                  color: 'black',
                  backgroundColor: 'BTMilkTea.main',
                },
                cursor: 'pointer',
              }}
            >
              <CardMedia
                alt="icon"
                sx={{
                  padding: {
                    xs: '0.75rem',
                    sm: '1.5rem',
                    lg: '2rem',
                  },
                  margin: '1rem',
                  height: {
                    xs: '50px',
                  },
                  width: {
                    xs: '50px',
                  },
                  borderRadius: '5px',
                  backgroundColor: 'BobaHighlight.main',
                }}
              >
                <IconSvg topic={item.icon} size="48" color="white" />
              </CardMedia>
              <CardContent
                sx={{
                  display: 'inline-block',
                  width: '100%',
                  overflow: 'hidden',
                  whiteSpace: 'nowrap',
                  padding: {
                    xs: '0.25rem 1rem',
                    md: '0.50rem 1.50rem',
                    lg: '1rem 2rem',
                  },
                }}
              >
                <Container
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <Typography
                    variant="h2"
                    sx={{
                      display: 'block',
                      width: '85%',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'normal',
                    }}
                  >
                    {item.name}
                  </Typography>
                  <IconSvg
                    topic="emotional_intelligence"
                    size="48"
                    color="#F6A794"
                  />
                </Container>
                <Typography
                  variant="h6"
                  sx={{
                    display: 'block',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    maxWidth: '70%',
                    margin: '0.25rem 0',
                  }}
                >
                  {item.desc}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 'bold',
                    paddingTop: '1rem',
                  }}
                >
                  Read More
                </Typography>
              </CardContent>
            </Card>
          </Link>
        );
      })}
      <hr />
    </Stack>
  );
}

export default ResultCardsContainer;
