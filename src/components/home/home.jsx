import { useEffect } from "react";
//components
import Navbar from "./navbar";
import Banner from "./banner";
import Slide from "./slide";
import MidSlide from "./midSlide";
import MobileSlide from "./mobileSlide";
import MidSection from "./midSection";
import { Box, styled,CircularProgress } from "@mui/material";
import { getProducts } from "../../redux/actions/productAction";
import {getMobiles} from '../../redux/actions/mobileAction'
import { useDispatch, useSelector } from "react-redux";
const Component = styled(Box)`
  padding: 10px;
  background: #f2f2f2;
`;
const Home = () => {
  //  -------getting data from redux store-------

  const { products,loading } = useSelector((state) => state.getProducts); //this get products in state,getprdcts in in store.js..this is not a function
  const { mobiles ,loading1} = useSelector((state) => state.getMobiles); //this get products in state,getprdcts in in store.js..this is not a function
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  useEffect(() => {
    dispatch(getMobiles());
  }, [dispatch]);
  
  
  //  -------getting data from redux store-------

  return (
    <> 
      <Navbar />
      <Component>
        <Banner />
        <MidSlide products={products} title="Deal of the day" loading={loading} timer={true} />
        <MidSection/>
        <MobileSlide mobiles={mobiles} title="All Mobiles" timer={false}  loading={loading1}/>
        <Slide products={products} title="Suggesting Items" loading={loading} timer={false} />
        <Slide products={products} title="Top Selection" loading={loading} timer={false} />
        <Slide products={products} title="Recommended Items" loading={loading} timer={false} />
        <Slide products={products} title="Trending Items" loading={loading} timer={false} />
      </Component>
    </>
  );
};
export default Home;
