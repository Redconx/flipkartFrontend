import Carousel from "react-multi-carousel";
import { Box, styled } from "@mui/material";
import "react-multi-carousel/lib/styles.css";
import { bannerData } from "../../constants/data";

const Image = styled("img")(({ theme }) => ({
  width: "100%",
  height: 280,

  [theme.breakpoints.down("md")]: {
    objectFit: "cover",
    height: 180,
  },
}));

const Banner = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <Carousel
        responsive={responsive}
        swipeable={false}
        draggable={false}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={4000}
      >
        {bannerData.map((data, index) => (
          <Image src={data.url} alt="banner" key={index} />
        ))}
      </Carousel>
    </>
  );
};
export default Banner;
