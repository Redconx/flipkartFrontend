import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css"; //imp file for multi carousel
import { Box, Typography, Button, Divider, styled ,CircularProgress} from "@mui/material";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {ChevronRightSharp,ChevronLeftSharp} from '@mui/icons-material';


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

const MobileSlide=({mobiles,title,loading})=>{

    const mobiles1=mobiles.filter(ele=>ele.exchange)

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5,
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

      const navigate=useNavigate()
      const showAllMobiles=()=>{
        navigate('/allmobiles')
      }

      const CustomLeftArrow = ({ onClick }) => (
        <ChevronLeftSharp onClick={() => onClick()} className="custom-left-arrow"  fontSize="large" style={{position:'absolute',color:'gray'}}/>
      );
      const CustomRightArrow = ({ onClick }) => {
        return <ChevronRightSharp className="custom-right-arrow" onClick={() => onClick()}  fontSize="large" style={{position:'absolute',right:10,color:'gray'}} />;
      };
    

return(

    <> <Component>
    <Deal>
      <DealText>{title}</DealText>
      <ViewAllButton variant="contained" onClick={()=>showAllMobiles()}>View All</ViewAllButton>
    </Deal>
    <Divider />
    {loading ? <Box style={{display:'flex',justifyContent:'center',alignItems:'center',height:280}}><CircularProgress  color="inherit" /></Box>:
    <Carousel
    responsive={responsive}
    swipeable={false}
    draggable={false}
    infinite={true}
    autoPlay={true}
    autoPlaySpeed={4000}
    // centerMode={true}
    keyBoardControl={true}
    dotListClass="custom-dot-list-style"
    itemClass="carousel-item-padding-40-px"
    containerClass="carousel-container"
    customLeftArrow={<CustomLeftArrow/>}
    customRightArrow={<CustomRightArrow/>}
    >
      {mobiles1.map((mob) => (
        
        <Link to={`/mobile/${mob.id}`} style={{textDecoration:'none'}} key={mob.id}>
        <Box textAlign="center" style={{ padding: "25px 15px" }}>
          <Image src={mob.img} alt="mobile" />
          <Text style={{ fontWeight: 600, color: "#212121" }}>
            {mob.name}
          </Text>
          <Text style={{ color: "green" }}>{mob.exchange}</Text>
          <Text style={{ opacity: 0.6, color: "#212121" }}>
            {mob.EMI}
          </Text>
        </Box>
        </Link>
        
        ))}
    </Carousel>
}
  </Component></>
  )
}

export default MobileSlide