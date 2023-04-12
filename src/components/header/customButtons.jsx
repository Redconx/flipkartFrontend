import { Box, Button, Typography, styled, Badge } from "@mui/material";
import { useState, useContext, useEffect } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { DataContext } from "../../context/dataProvider";
import { Link } from "react-router-dom";
import {useSelector} from 'react-redux'
import auth from "../../services/auth";
//components
import LoginDialogue from "../login/loginDialogue";
import Profile from "./profile";

const Wrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  margin: "0 3% 0 auto",
  "& > button,& > p ,& > div": {
    marginLeft: "40px",
    fontSize: "16px",
    alignItems: "center",
  },
  [theme.breakpoints.down("md")]: {
    display: "block",
  },
}));

const Container = styled(Link)`
  display: flex;
  text-decoration: none;
  color: #fff;
  align-items: center;
`;
const LoginButton = styled(Button)`
  color: #2874f0;
  background: #fff;
  text-transform: none;
  padding: 5px 40px;
  border-radius: 2px;
  font-weight: 600;
`;

const CustomButtons = () => {
  const [open, setOpen] = useState(false);
  const [user,setUser]=useState("");
  
  useEffect(()=>{
    let user1=auth.getUser()
    setUser(user1)
  },[])

  const {cartItems}=useSelector(state=>state.cart)
  return (
    <Box style={{display:'flex',justifyContent:'space-around'}}> 
        {user ? (
          <Profile account={user} setUser={setUser} />
        ) : (
          <LoginButton variant="contained" onClick={() => setOpen(true)}>
            Login
          </LoginButton>
        )}


      <Wrapper>

        <Typography style={{ marginTop: 7, width: 170 }}>
          Become a Seller
        </Typography>
        {user ?
          <Link to={`/wishlist`} style={{textDecoration:'none',color:'white', marginTop: 7, width:120}}>
          <Typography>WishList</Typography>
        </Link>:""
        }
        <Container to={"/cart"}>
          <Badge badgeContent={cartItems?.length} color='secondary'>
            <ShoppingCartIcon />
          </Badge>
          <Typography style={{marginLeft:10}}>Cart</Typography>
        </Container>
        <LoginDialogue open={open} setOpen={setOpen} setUser={setUser} />
      </Wrapper>
    </Box>
  );
};
export default CustomButtons;
