import { Box, styled} from "@mui/material";
import Slide from "./slide";

const Component = styled(Box)`
  display: flex;
`;
const LeftComponent = styled(Box)(({ theme }) => ({
  width: "83%",
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));

const RightComponent = styled(Box)(({ theme }) => ({
  padding: 5,
  background: "white",
  marginTop: 10,
  marginLeft: 10,
  marginBottom:10,
  width: "17%",
  textAlign: "center",
  height:'fit-content',
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const MidSlide = ({ products, title, timer ,loading}) => {
  const adURL =
    "https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70";
  return (
    <Component>
      <LeftComponent>
        <Slide products={products} title={title} timer={timer} loading={loading} />
      </LeftComponent>
      <RightComponent>
        <img src={adURL} style={{ width: 217 }} />
      </RightComponent>
    </Component>
  );
};
export default MidSlide;
