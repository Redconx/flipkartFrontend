import { DataContext } from "../../context/dataProvider";
import { useContext, useState } from "react";
import { Box, Grid, styled,Typography,Button } from "@mui/material";
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import {useDispatch} from 'react-redux'
import {addToCart} from '../../redux/actions/cartAction'
import { Link } from "react-router-dom";

const CompareMobiles = () => {
  const { compare, setCompare } = useContext(DataContext);
  const dispatch=useDispatch();

  const ItemWrapper=styled(Grid)`
  display:flex;
  flex-direction:column;
  align-items:center;
  background:white;
  border:1px solid #f2f2f2;
  margin:5px;
  `
  const RatingIcon=styled(Typography)`
  background-color:#388E3C;
  font-size:14px;
  color:white;
  justify-content:center;
  align-items:center;
  border-radius:2px;
  font-weight:550;
  padding:1px;
`
const CompareWrap=styled(Box)`
margin:10px;
& > p{
    margin-bottom:30px;
    border-bottom:1px solid gray;
    width:100%;
}
`
const StyledButton=styled(Button)(({theme})=>({
    width:'47%',
    height:'50px',
    borderRadius:'2px',
    [theme.breakpoints.down('lg')]:{
        width:'45%'
    }
}))

const addItemToCart=(id)=>{
    dispatch(addToCart(id,1,'mobile'))
}
const handleDelete=(id)=>{
    let arr=[...compare]
    let index=arr.findIndex(ele=>ele.id===id)
    arr.splice(index,1)
    setCompare(arr)
}
  const fassured =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";
    const startImg="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMyIgaGVpZ2h0PSIxMiI+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTYuNSA5LjQzOWwtMy42NzQgMi4yMy45NC00LjI2LTMuMjEtMi44ODMgNC4yNTQtLjQwNEw2LjUuMTEybDEuNjkgNC4wMSA0LjI1NC40MDQtMy4yMSAyLjg4Mi45NCA0LjI2eiIvPjwvc3ZnPg=="
  return (
    <Box>
      <Grid container justifyContent="center">
        {compare.length===0 ? <Typography variant="h4" style={{color:'gray'}}>Add Products To Compare..!!</Typography>:""}
        {compare.map((cm) => (
            <ItemWrapper item lg={3} key={cm.id}>
              <RemoveCircleOutlineIcon onClick={()=>handleDelete(cm.id)} style={{color:'gray',width:'8%',marginLeft:'auto',cursor:'pointer'}}/>
            <img src={cm.img} />
            <Link to={`/mobile/${cm.id}`}>
            <Typography fontWeight={600} margin={1}>{cm.name}</Typography></Link>
            <Typography>
              <Typography variant="span" style={{ fontSize: 19 }}>
                ₹{cm.price}{" "}
              </Typography>
              <strike style={{ color: "grey" }}>{cm.prevPrice}</strike>
              <Typography variant="span" color="green">
                {" "}
                <b>{cm.discount}% off</b>
              </Typography>
            </Typography>
            <Box>
              {cm.assured ? (
                <img style={{ width: "30%" }} src={fassured} />
              ) : (
                <Box style={{marginBottom:6}}>&nbsp;</Box>
              )}
            </Box>
            <Box style={{ borderTop: "1px solid gray" ,width:'100%' }}>
            <CompareWrap>
                    <Typography>{cm.exchange ? cm.exchange:"N.A."}</Typography>
                    <RatingIcon component={'span'} >{cm.rating}<img src={startImg}/></RatingIcon>
                    <Typography style={{color:'green'}}>{cm.ratingDesc}</Typography>
                    <Typography>{cm.details.map(d=>(<Box>•{d}</Box>))}</Typography>
                    <Typography>{cm.emi ? cm.emi : "EMI not available"}</Typography>
            </CompareWrap>
            <StyledButton variant="contained" onClick={()=>addItemToCart(cm.id)} style={{marginLeft:10,backgroundColor:'orange'}}>Add to Cart</StyledButton>
            </Box>
               
          </ItemWrapper>
        ))}
      </Grid>
    </Box>
  );
};
export default CompareMobiles;
