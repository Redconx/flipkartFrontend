import { Box, Button, styled } from "@mui/material";
import {FlashOn as Flash,ShoppingCart as Cart} from '@mui/icons-material';
import {useNavigate} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {addToCart} from '../../redux/actions/cartAction'
import { useEffect, useState } from "react";
import { payUsingPaytm } from "../../services/api";
import { post } from "../../utils/paytm";


const LeftContainer = styled(Box)(({ theme }) => ({
  padding: "40px 0px 0 80px",
  display:'flex',
  width:'30%',
  position:'fixed',

  [theme.breakpoints.down('lg')]:{
    position:'static',
    padding:'20px 40px',
    width:'70%',
    flexDirection:'column-reverse'
  }
}));

// const Image=styled('img')({
//     width:'100%',
// })

const StyledButton=styled(Button)(({theme})=>({
    width:'47%',
    height:'50px',
    borderRadius:'2px',
    fontSize:'12px',
    
    [theme.breakpoints.down('lg')]:{
        width:'40%'
    }
}))

const SuppImg=styled(Box)`
display:flex;
justify-content:center;
padding:3;
height:60px;
border:1px solid #f2f2f2;
:hover{border: 1px solid #2874F0};
`
const SuppWrapper=styled(Box)(({theme})=>({
  [theme.breakpoints.down('lg')]:{
    display:'flex',
    marginTop:'10px',
    justifyContent:'space-around'
  }
}))

const ActionItem = ({ product,mobile }) => {
  const [showImg,setShowImg]=useState("")

  useEffect(()=>{
if(mobile && mobile.id){
  let imgg=mobile.img
  setShowImg(imgg)
}
  },[])
    const navigate=useNavigate()
    const dispatch=useDispatch()

    const [quantity,setQuantity]=useState(1)


    
    const addItemToCart=()=>{
        const {id}=product ? product:mobile
        const type=mobile ? "mobile":"product"
        dispatch(addToCart(id,quantity,type))
        navigate('/cart')
    }
    const buyNow= async ()=>{
        let response=await payUsingPaytm({amount:'500',email:'ajaynaugain907@gmail.com'})
        console.log(response,'imbuynow')
        response.head['requestId']='123'
        let information={
          action:`https://securegw-stage.paytm.in/theia/api/v1/initiateTransaction?mid=${response.body.mid}&orderId=${response.body.orderId}` ,
          params:response,
        }
        post(information)
    } 

  console.log({mobile})
  const loadImg=(index)=>{
    let imgg=mobile.suppImg[index].flimg
    setShowImg(imgg)
  }
  
  return (
    <LeftContainer >


  <Box >
    {mobile ? mobile.id ?
    <SuppWrapper>
      <SuppImg onClick={()=>setShowImg(mobile.img)}><img src={mobile.img}/></SuppImg>
      {mobile.suppImg.map((si,index)=>(
      <SuppImg onClick={()=>loadImg(index)} key={index}><img src={si.smimg}/></SuppImg>
      ))}
    </SuppWrapper>
    :"":""} 
  </Box>

      <Box style={{width:'100%'}}>
        <Box style={{display:'flex',border: '1px solid #f0f0f0',height:400,justifyContent:'center'}}>
            <img src={product? product.detailUrl:showImg} style={mobile? {maxWidth:'100%'}:{width:'100%'}}/>
        </Box>
      <Box style={{display:'flex',justifyContent:'space-around'}}>

      <StyledButton variant="contained" onClick={()=>addItemToCart()} style={{backgroundColor:'orange'}}> <Cart/>Add to Cart</StyledButton>
      <StyledButton variant="contained" onClick={()=>buyNow()} style={{backgroundColor:'red'}}><Flash/> Buy Now</StyledButton>
      </Box>
      </Box>
    </LeftContainer>
  );
};

export default ActionItem;
