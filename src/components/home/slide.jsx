import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css"; //imp file for multi carousel
import { Box, Typography, Button, Divider, styled,CircularProgress } from "@mui/material";
import {ChevronRightSharp,ChevronLeftSharp} from '@mui/icons-material';
import Countdown from "react-countdown";
import { Link } from "react-router-dom";
import { color } from "@mui/system";

const Slide = ({ products, title, timer ,loading}) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const Component = styled(Box)`
    margin-top: 10px;
    background: #ffffff;
  `;
  const Deal = styled(Box)`
    padding: 15px 20px;
    display: flex;
  `;
  const Timer = styled(Box)`
    display: flex;
    margin-left: 10px;
    align-items: center;
    color: #7f7f7f;
  `;
  const DealText = styled(Typography)`
    font-size: 19px;
    font-weight: 700px;
    margin-right: 25px;
    line-height: 32px;
  `;
  const ViewAllButton = styled(Button)`
    margin-left: auto;
    background-color: #2874f0;
    border-radius: 2px;
    font-size: 13px;
    font-weight: 600;
  `;
  const Image = styled("img")({
    width: "auto",
    height: 150,
  });
  const Text = styled(Typography)`
    font-size: 14px;
    margin-top: 5px;
  `;
  const timerURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg";

  const renderer = ({ hours, minutes, seconds }) => {
    return (
      <Box variant="span">
      {hours}:{minutes}:{seconds} left
      </Box>
    );
   
  };
   
  const CustomLeftArrow = ({ onClick }) => (
    <ChevronLeftSharp onClick={() => onClick()} className="custom-left-arrow" color="dark" fontSize="large" style={{position:'absolute'}}/>
  );
  const CustomRightArrow = ({ onClick }) => {
    return <ChevronRightSharp className="custom-right-arrow" onClick={() => onClick()}  color="dark" fontSize="large" style={{position:'absolute',right:10}} />;
  };


  return (
    <Component>
      
      <Deal>
        <DealText>{title}</DealText>
        {timer && (
          <Timer>
            <img src={timerURL} style={{ width: 24 }} />
            <Countdown date={Date.now() + 5.04e7} renderer={renderer} />
          </Timer>
        )}
        <ViewAllButton variant="contained">View All</ViewAllButton>
      </Deal>
      <Divider />
      {loading ?
      <Box style={{display:'flex',justifyContent:'center',alignItems:'center',height:280}}>
      <CircularProgress color="inherit"/>
      </Box>
      :
      <Carousel
        // arrows
        responsive={responsive}
        swipeable={true}
        draggable={false}
        infinite={true}
        autoPlay={true}
        // showDots={true}
        autoPlaySpeed={4000}
        // centerMode={true}
        keyBoardControl={true}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        containerClass="carousel-container"
        focusOnSelect={true}
        customLeftArrow={<CustomLeftArrow/>}
        customRightArrow={<CustomRightArrow/>}
      >
        { products.map((prod) => (
          <Link to={`/product/${prod.id}`} style={{textDecoration:'none'}} key={prod.id}>
          <Box textAlign="center" style={{ padding: "25px 15px" }}>
            <Image src={prod.url} alt="product" />
            <Text style={{ fontWeight: 600, color: "#212121" }}>
              {prod.title.shortTitle}
            </Text>
            <Text style={{ color: "green" }}>{prod.discount}</Text>
            <Text style={{ opacity: 0.6, color: "#212121" }}>
              {prod.tagline}
            </Text>
          </Box>
          </Link>
        ))}
      </Carousel> }
    </Component>
  );
};
export default Slide;
