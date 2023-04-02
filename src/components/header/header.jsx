import { AppBar, Toolbar, styled, Box, Typography, IconButton ,Drawer,List,ListItem} from "@mui/material";
import { Link } from "react-router-dom";
import Menu from '@mui/icons-material/Menu';
//components
import Search from "./search";
import CustomButtons from "./customButtons";
import { useState } from "react";

const StyledHeader = styled(AppBar)`
  background: #2874f0;
  height: 55px;
`;
const Component = styled(Link)`
  margin-left: 12%;
  line-height: 0;
  text-decoration:none;
  color:inherit;
`;
const SubHeading = styled(Typography)`
  font-size: 10px;
  font-style: italic;
`;
const PlusImage = styled("img")({
  width: 10,
  marginLeft: 4,
});
const CustomButtonWrapper=styled(Box)(({theme})=>({
  margin:'0 10% 0 auto',
  [theme.breakpoints.down('md')]:{
    display:'none'
  }
}))
const MenuButton=styled(IconButton)(({theme})=>({
  display:'none',
  [theme.breakpoints.down('md')]:{
    display:'block'
  }
}))

const Header = () => {

  const [open,setOpen]=useState()
  const subURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png";
  const logoURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png";


    const handleOpen=()=>{
      setOpen(true)
    }
    const handleClose=()=>{
      setOpen(false)
    }

    const list=()=>{
     return ( <Box style={{width:200}} onClick={handleClose}>
        <List>
          <ListItem button>
            <CustomButtons/>
          </ListItem>
        </List>
      </Box>)
    }
  return (
    <StyledHeader>
      <Toolbar style={{ minHeight: 55 }}>
          <MenuButton color="inherit" onClick={handleOpen}>
            <Menu/>
          </MenuButton>
          <Drawer open={open} onClose={handleClose}>{list()}</Drawer>
        <Component to={"/"}>

          <img src={logoURL} alt="Logo" style={{ width: 75 }} />
          <Box>
            <SubHeading>
              Explore&nbsp;
              <Box component="span" style={{ color: "#FFE500" }}>
                Plus
              </Box>
              <PlusImage src={subURL} alt="sublogo" />
            </SubHeading>
          </Box>
        </Component>
          

        <Search />

        <CustomButtonWrapper>
          <CustomButtons />
        </CustomButtonWrapper>
      </Toolbar>
    </StyledHeader>
  );
};
export default Header;
