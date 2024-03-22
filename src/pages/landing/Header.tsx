import { AppBar, Toolbar, Typography, ButtonBase, IconButton, Container, Stack, Badge } from '@mui/material';
import { styled } from '@mui/material/styles';
import LogoMain from 'components/logo/LogoMain';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: theme.spacing(1),
  position: 'relative',
  zIndex: 1,
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(2),
  },
}));

const loginBtnStyle = (theme) => ({
  width: '105px',
  height: '44px',
  background: `${theme.palette.success.main}ff`,
  borderRadius: '64px',
  color: 'primary.light',
  fontSize: 16,
  fontFamily: 'Urbanist, sans-serif',
  fontWeight: 'bold',
  transition: 'all .3s',
  '&:hover': {
    backgroundColor: `${theme.palette.success.main}cc`, // Lighter with opacity
  },
})

const signupBtnStyle = (theme) => ({
  ...loginBtnStyle(theme),
  backgroundColor: 'common.white',
  '&:hover': {
    backgroundColor: `#ccc`, // Lighter with opacity
  },
})

const Header = () => {
  return (
    <AppBar position="static" elevation={0} sx={{ bgcolor: 'transparent' }}>
      <StyledToolbar>
        <Stack direction="row" spacing={2} alignItems="center">
          <LogoMain />
        </Stack>
        <Stack direction="row" spacing={2}>
          <ButtonBase sx={loginBtnStyle}>Login</ButtonBase>
          <ButtonBase sx={signupBtnStyle}>Signup</ButtonBase>
        </Stack>
      </StyledToolbar>
    </AppBar>
  );
};

export default Header;
