import { Box, Grid, styled } from "@mui/material";
import { imageURL } from "../../constants/data";

const Image=styled('img')(({theme})=>({
    marginTop:10,
    width:'100%',
    justifyContent:'space-between',
    [theme.breakpoints.down('md')]:{
        objectFit:'cover',
        height:'120px'
    }
}))

const MidSection = () => {
  const url =
    "https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50";
  return (
    <>
      <Grid item lg={12} sm={12} md={12} xs={12} container>
        {imageURL.map((img,index) => (
          <Grid item lg={4} md={4} sm={12} xs={12} key={index}>
            <img src={img} style={{ width: "100%" }} />
          </Grid>
        ))}
      </Grid>
      <Image src={url} />
    </>
  );
};
export default MidSection;
