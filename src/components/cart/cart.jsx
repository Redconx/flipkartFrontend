import { Grid,Box, Button,Typography, styled, CircularProgress,Backdrop } from "@mui/material";
import { useSelector } from "react-redux";


//components
import CartItem from "./cartItem";
import Totalview from "./totalView";
import EmptyCart from "./emptyCart";

const Container=styled(Grid)(({theme})=>({

    padding:'30px 135px',
    [theme.breakpoints.down('md')]:{
        padding:'15px 0'
    }

}))

const Header=styled(Box)`
padding:15px 24px;
background:#fff;
`
const ButtonWrapper=styled(Box)`
padding:16px 22px;
background:#fff;
box-shadow:0 -2px 10px 0 rgb(0 0 0/20%);
border-top:1px solid #f0f0f0;
`
const StyledButton=styled(Button)`
display:flex;
margin-left:auto;
background-color:#fb641b;
color:white;
width:250px;
height:51px;
border-radius:2px;
`
const LeftComponent=styled(Grid)(({theme})=>({

    paddingRight:15,
    [theme.breakpoints.down('md')]:{
        marginBottom:15
    }

}))
const Cart = () => {
  const { cartItems ,loading} = useSelector((state) => state.cart);
  


  return (
  <>{loading ?
    <Backdrop
        sx={{ color: '#fff'}}
        open={true}
        // onClick={handleClose}
      >
      <CircularProgress color="inherit" />
      </Backdrop>:
  <>
    {cartItems.length ?
    <Container container>
        <LeftComponent item lg={9} md={9} sm={12} xs={12}>
            <Header>
                <Typography>My Cart ({cartItems.length})</Typography>
            </Header>
            {
                cartItems.map(item=>(
                    <CartItem item={item} key={item.id}/>
                ))
            }
            <ButtonWrapper>
                <StyledButton>Place Order</StyledButton>
            </ButtonWrapper>
        </LeftComponent>
        <Grid item lg={3} md={3} sm={12} xs={12}>
            <Totalview cartItems={cartItems}/>
        </Grid>

    </Container>:<EmptyCart/>}</>
    }
  </>)
};
export default Cart;
