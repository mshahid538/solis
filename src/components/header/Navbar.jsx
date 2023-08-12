import * as React from "react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Menu from "@mui/material/Menu";
// import NotificationsIcon from '@mui/icons-material/Notifications';
import DropDown from "../../menu/DropDown";
import Logo from "../../images/Logo.svg";
import Search from "./Search";
import ByeWind from "../../images/ByeWind.svg";
import Grid from "@mui/material/Grid";
import Divider from '@mui/material/Divider';


// const Search = styled('div')(({ theme }) => ({
//   position: 'relative',
//   borderRadius: theme.shape.borderRadius,
//   backgroundColor: alpha(theme.palette.common.white, 0.15),
//   '&:hover': {
//     backgroundColor: alpha(theme.palette.common.white, 0.25),
//   },
//   marginRight: theme.spacing(2),
//   marginLeft: 0,
//   width: '100%',
//   [theme.breakpoints.up('sm')]: {
//     marginLeft: theme.spacing(3),
//     width: 'auto',
//   },
// }));

// const SearchIconWrapper = styled('div')(({ theme }) => ({
//   padding: theme.spacing(0, 2),
//   height: '100%',
//   position: 'absolute',
//   pointerEvents: 'none',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//   color: 'inherit',
//   '& .MuiInputBase-input': {
//     padding: theme.spacing(1, 1, 1, 0),
//     // vertical padding + font size from searchIcon
//     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//     transition: theme.transitions.create('width'),
//     width: '100%',
//     [theme.breakpoints.up('md')]: {
//       width: '20ch',
//     },
//   },
// }));

const Navbar = () => {
  // const [anchorEl, setAnchorEl] = React.useState(null);
  // const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  // const isMenuOpen = Boolean(anchorEl);
  // const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  // const handleProfileMenuOpen = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };

  // const handleMobileMenuClose = () => {
  //   setMobileMoreAnchorEl(null);
  // };

  // const handleMenuClose = () => {
  //   setAnchorEl(null);
  //   handleMobileMenuClose();
  // };

  // const handleMobileMenuOpen = (event) => {
  //   setMobileMoreAnchorEl(event.currentTarget);
  // };

  // const menuId = "primary-search-account-menu";
  // const renderMenu = (
  //   <Menu
  //     anchorEl={anchorEl}
  //     anchorOrigin={{
  //       vertical: "top",
  //       horizontal: "right",
  //     }}
  //     id={menuId}
  //     keepMounted
  //     transformOrigin={{
  //       vertical: "top",
  //       horizontal: "right",
  //     }}
  //     open={isMenuOpen}
  //     onClose={handleMenuClose}
  //   ></Menu>
  // );

  //   const mobileMenuId = 'primary-search-account-menu-mobile';
  //   const renderMobileMenu = (
  //     // <Menu
  //     //   anchorEl={mobileMoreAnchorEl}
  //     //   anchorOrigin={{
  //     //     vertical: 'top',
  //     //     horizontal: 'right',
  //     //   }}
  //     //   id={mobileMenuId}
  //     //   keepMounted
  //     //   transformOrigin={{
  //     //     vertical: 'top',
  //     //     horizontal: 'right',
  //     //   }}
  //     //   open={isMobileMenuOpen}
  //     //   onClose={handleMobileMenuClose}
  //     // >

  //     //     {/* <IconButton size="large" aria-label="show 4 new mails" color="inherit">
  //     //       <Badge badgeContent={4} color="error">
  //     //         <MailIcon />
  //     //       </Badge>
  //     //     </IconButton>
  //     //     <p>Messages</p> */}

  //     //     {/* <IconButton
  //     //       size="large"
  //     //       aria-label="show 17 new notifications"
  //     //       color="inherit"
  //     //     >
  //     //       <Badge badgeContent={17} color="error">
  //     //         <NotificationsIcon />
  //     //       </Badge>
  //     //     </IconButton>
  //     //     <p>Notifications</p> */}

  //     //   {/* <MenuItem onClick={handleProfileMenuOpen}> */}
  //     //     {/* <IconButton
  //     //       size="large"
  //     //       aria-label="account of current user"
  //     //       aria-controls="primary-search-account-menu"
  //     //       aria-haspopup="true"
  //     //       color="inherit"
  //     //     >
  //     //       <AccountCircle />
  //     //     </IconButton>
  //     //     <p>Profile</p> */}
  //     //   {/* </MenuItem> */}
  //     // </Menu>
  //   );
  {
    /* <Grid container spacing={3}></Grid> */
  }
  return (
    <>
    <Grid display={"flex"} flexDirection={"row"} marginTop={'10px'}>
      {/* <AppBar position="static" > */}
      <Grid container spacing={3}>
        {/* <Toolbar> */}
        {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          > */}
        <Grid item xs>
          {/* <Item>xs</Item> */}
          <img src={Logo} alt="logo" />
        </Grid>
        {/* </IconButton> */}
          <Grid item xs={6} style={{paddingLeft:" 343px" , height:"34px"}}>
          <Search style={{height:"40px"}}/>
          {/* <Item>xs=6</Item> */}
        </Grid>
        {/* <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
          </Typography> */}
        {/* <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search> */}
        <Box sx={{ flexGrow: 1 }} />
        {/* <Box sx={{ display: { xs: 'none', md: 'flex' } }}> */}
        {/* <IconButton size="large" aria-label="show 4 new mails" color="inherit"> */}
        {/* <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge> */}
        {/* </IconButton> */}
        {/* <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            > */}
        {/* <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge> */}
        {/* </IconButton> */}
        {/* <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton> */}
        {/* </Box> */}
        {/* <Box sx={{ display: { xs: 'flex', md: 'none' } }}> */}
        {/* <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton> */}
        {/* </Box> */}
        <Grid item xs display={"flex"} flexDirection={"row"}>
          {/* <Item>xs</Item> */}
        <img src={ByeWind} alt="Bywind" height={'24px'} />
          <Typography>Super Admin</Typography>
        <DropDown />
        </Grid>
        {/* </Toolbar> */}
      </Grid>
      {/* </AppBar> */}
      {/* {renderMobileMenu} */}
      {/* {renderMenu} */}
    </Grid>
     <Divider />
     </>
  );
};
export default Navbar;
