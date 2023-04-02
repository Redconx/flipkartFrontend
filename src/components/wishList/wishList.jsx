import { Box,Typography,styled, Grid } from "@mui/material"
import { DataContext } from "../../context/dataProvider"
import React,{useState,useContext} from "react";
import { Link } from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';

const MidWrapper=styled(Grid)`
    align-items:center;
`
const Component=styled(Box)(({theme})=>({
    margin:'80px 150px',
    background:'white',
    padding:10,
    [theme.breakpoints.down('md')]:{
        margin:'80px 40px',
    },
    [theme.breakpoints.down('sm')]:{
        margin:'80px 0px',
    }
}))
const ImageWrapper=styled('img')({
    width:'30%',
    margin:10,
})
const LogoAssured=styled('img')({
    width:'6%',
    marginLeft:6,
})
const RatingIcon = styled(Typography)`
  background-color: #388e3c;
  font-size: 14px;
  color: white;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  padding: 1px;
`;
const startImg="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMyIgaGVpZ2h0PSIxMiI+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTYuNSA5LjQzOWwtMy42NzQgMi4yMy45NC00LjI2LTMuMjEtMi44ODMgNC4yNTQtLjQwNEw2LjUuMTEybDEuNjkgNC4wMSA0LjI1NC40MDQtMy4yMSAyLjg4Mi45NCA0LjI2eiIvPjwvc3ZnPg=="
const fassured ="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";


const WishList=()=>{
    const {wishList,setWishList} = useContext(DataContext);
    const handleDelete=(id)=>{
     let arr=[...wishList]   
     let index=arr.findIndex(ele=>ele.id===id)
     arr.splice(index,1)
     setWishList(arr)
    }

    return(
        <Component>
            <Typography variant="h5">My Wishlist({wishList.length})</Typography>
            <Box>{wishList.map((wl)=>(
                <Box style={{display:'flex',borderBottom:'1px solid grayText'}}>
                <Box>  
                    <ImageWrapper src={wl.img}/>
                </Box>
                <MidWrapper container>
                    <Grid item lg={10}>
                        <Link to={`/mobile/${wl.id}`} style={{textDecorationLine:'none'}}>
                        <Typography fontWeight={600}>{wl.name}</Typography>
                        </Link>
                        <Box style={{display:''}}>
                        <RatingIcon component={'span'} >{wl.rating}<img src={startImg}/></RatingIcon>   
                        <Typography variant="span"> ({wl.ratingDesc})</Typography>
                        <Typography variant="span">{wl.assured ? <LogoAssured src={fassured}/>:""} </Typography>
                        </Box>
                        <Typography component='span' style={{color:'grey'}}><strike>₹{wl.prevPrice}</strike> &nbsp;</Typography>
                        <Typography component='span' style={{color:'red'}}> {wl.discount}% off</Typography>
                        <Typography style={{color:'green',fontSize:12,fontWeight:600}}>{wl.exchange}</Typography>
                        <Typography variant="h5" style={{fontWeight:500}}>₹{wl.price}</Typography>
                    </Grid>

                    
                    <Grid item lg={2}><DeleteIcon color="error" style={{cursor:'pointer'}} onClick={()=>handleDelete(wl.id)}/></Grid>
                </MidWrapper>
                </Box>
            ))}</Box>
        </Component>
    )
}
export default WishList