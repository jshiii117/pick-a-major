import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import {
  AppBar,
  Box,
  Container,
  Drawer,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemButton,
  Toolbar,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import BTLogo from '../Images/icons/BT_Logo_1.svg';

function NavBar() {
  let [navMenu, setNavMenu] = useState(false);

  const handleOpenNavMenu = () => {
    setNavMenu(true);
  };
  const handleCloseNavMenu = () => {
    setNavMenu(false);
  };
  const tabs = [
    {
      name: 'Majors & Careers',
      path: '/',
    },
    {
      name: 'Team',
      path: '/team',
    },
    {
      name: 'Take the Quiz',
      path: '/quiz/classes',
    },
  ];
  return (
    <AppBar
      sx={{
        position: 'sticky',
        backgroundColor: 'BTMilkTea.main',
        marginBottom: '3.5rem',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Link key="Homepage" to="/" component={RouterLink}>
            <img src={BTLogo} alt="logo" />
          </Link>
          <Box
            sx={{
              display: {
                xs: 'flex',
                md: 'none',
              },
            }}
          >
            <IconButton
              aria-label="options"
              color="black"
              onClick={handleOpenNavMenu}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={navMenu}
              onClose={handleCloseNavMenu}
              ModalProps={{ disableScrollLock: 'true' }}
              sx={{
                display: {
                  xs: 'flex',
                  md: 'none',
                },
              }}
            >
              <Box>
                <ListItem sx={{ justifyContent: 'flex-end' }}>
                  <IconButton
                    aria-label="options"
                    color="black"
                    onClick={handleCloseNavMenu}
                  >
                    <CloseIcon />
                  </IconButton>
                </ListItem>
                {tabs.map((tab, id) => {
                  return (
                    <List key={`${tab}-{id}`}>
                      <ListItem disablePadding onClick={handleCloseNavMenu}>
                        <ListItemButton>
                          <Link
                            key={id}
                            to={tab.path}
                            component={RouterLink}
                            underline="none"
                            sx={{
                              margin: '0 1rem',
                              color: 'Boba.main',
                            }}
                          >
                            <Typography variant="h5">{tab.name}</Typography>
                          </Link>
                        </ListItemButton>
                      </ListItem>
                    </List>
                  );
                })}
              </Box>
            </Drawer>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'flex-end',
              alignItems: 'center',
            }}
          >
            {tabs.map((tab, id) => {
              return id === tabs.length - 1 ? (
                <Link
                  key={id}
                  to={tab.path}
                  component={RouterLink}
                  underline="none"
                  sx={{
                    color: 'white',
                    margin: '0 1rem',
                    padding: '0.5rem 3rem',
                    backgroundColor: 'black',
                    borderRadius: '30px',
                    ':hover': {
                      backgroundColor: '#484848',
                    },
                  }}
                >
                  <Typography variant="h4" sx={{ fontFamily: 'Chewy' }}>
                    {tab.name}
                  </Typography>
                </Link>
              ) : (
                <Link
                  key={id}
                  to={tab.path}
                  component={RouterLink}
                  underline="none"
                  sx={{
                    margin: '0 1rem',
                    color: 'Boba.main',
                  }}
                >
                  <Typography variant="h5">{tab.name}</Typography>
                </Link>
              );
            })}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavBar;
