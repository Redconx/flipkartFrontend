import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams} from "react-router-dom";
import { getProductDetails } from "../../redux/actions/productAction";
import { getMobileDetails } from '../../redux/actions/mobileAction'
import { getPincodes } from "../../redux/actions/pinCodeAction";
import { Box, Grid, styled,CircularProgress,Backdrop} from "@mui/material";

//components
import ActionItem from "./actionItem";
import ProductDetail from "./productDetail";

const Component = styled(Box)`
  background: #f2f2f2;
  margin-top: 55px;
`;


const Container = styled(Grid)(({ theme }) => ({
  background: "#ffffff",
  display: "flex",
  [theme.breakpoints.down("md")]: {
    margin: 0,
  },
}));
const RightContainer = styled(Grid)`
  margin-top: 50px;
`;

const DetailView = () => {

  const dispatch = useDispatch();
  const { id ,mobile} = useParams();

  const { loading, product } = useSelector((state) => state.getProductDetails); //when product is clicked
  const { loading1, mobile1 } = useSelector((state) => state.getMobileDetails); //when mobile is clicked
  const { pincodes }=useSelector(state=>state.getPincodes) 
  

  
  useEffect(() => {
    
        dispatch(getPincodes());
  }, [dispatch]);


  useEffect(() => {
      if(!mobile){

        if (product && id !== product.id) dispatch(getProductDetails(id));
      }
    
  }, [dispatch, id, loading, product]);


  useEffect(() => {
      
      if(mobile){
        if (mobile1 && id !== mobile1.id) dispatch(getMobileDetails(id));
      }
    
  }, [dispatch, id, loading1, mobile1]);

  
  return (
    <Component>

      {mobile ?  (
        loading1 ? <Backdrop
        sx={{ color: '#fff '}}
        open={true}
        // onClick={handleClose}
      >
      <CircularProgress color="inherit" />
      </Backdrop>:
        <Container container>
          <Grid item lg={4} md={4} sm={8} xs={12}>
            <ActionItem mobile={mobile1} />
          </Grid>
          <RightContainer item lg={8} md={8} sm={8} xs={12}  marginTop={3} paddingLeft={6}>
            
            <ProductDetail mobile={mobile1} pincodes={pincodes}/>
          </RightContainer>
        </Container>
      ): (loading ? <Box style={{display:'flex',justifyContent:'center',height:'90vh',alignItems:'center'}}> <CircularProgress/> </Box> :product && Object.keys(product).length && (  
        <Container container>
          <Grid item lg={5} md={4} sm={8} xs={12}>
            <ActionItem product={product} />
          </Grid>
          <RightContainer item lg={7} md={8} sm={8} xs={12}>
            <ProductDetail product={product} pincodes={pincodes}/>
          </RightContainer>
        </Container>
      ))} 
    </Component>
  );
};
export default DetailView;
