import { Box ,Typography,styled, Button} from "@mui/material"
import { Link } from "react-router-dom";




const RatingIcon = styled(Typography)`
  font-size: 14px;
  color: white;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  font-weight: 500;
  padding: 1px;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  font-weight: 500;
  font-size: 18px;
  color: grey;
`;

const Reviews=({reviewsData,id,onChange})=>{

   

    const startImg="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMyIgaGVpZ2h0PSIxMiI+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTYuNSA5LjQzOWwtMy42NzQgMi4yMy45NC00LjI2LTMuMjEtMi44ODMgNC4yNTQtLjQwNEw2LjUuMTEybDEuNjkgNC4wMSA0LjI1NC40MDQtMy4yMSAyLjg4Mi45NCA0LjI2eiIvPjwvc3ZnPg=="
    return (
        <Box style={{borderTop:'1px solid #f2f2f2',marginBottom:10}}>
            <Typography variant="button" fontSize={20}>Rating & Reviews</Typography> <br />
            <Typography variant='span' style={{color:'gray'}} >( Total {reviewsData.total} reviews )</Typography>

            {reviewsData && reviewsData?.items?.map(rw=>(
                <Box style={{margin:20,borderTop:'1px solid #f2f2f2'}}>
                <RatingIcon style={{backgroundColor:(rw.star>2?'#388E3C':'#FF6161')  }} component={'span'} >{rw.star}<img src={startImg}/></RatingIcon> 
                <Typography style={{fontWeight:500 ,fontSize:14 ,padding:15,marginBottom:30}}  variant='span'>{rw.title}</Typography>
                <Typography style={{fontSize:14,margin:'15px 38px'}}>{rw.description?rw.description:<Box>&nbsp;</Box>}</Typography>
                </Box>
            ))}


            <Box style={{display:'flex',justifyContent:'space-evenly',marginBottom:50}}>
            {reviewsData.previousPage ? <Button onClick={()=>onChange({reviewPage:reviewsData.previousPage})}>Prev</Button> : <Box></Box>}

            <Typography style={{color:'gray'}}>Page {reviewsData.previousPage+1||reviewsData.nextPage-1} of {reviewsData.totalPages}</Typography>

            {reviewsData.nextPage ? <Button onClick={()=>onChange({reviewPage:reviewsData.nextPage})}>Next</Button> : <Box></Box>}
            </Box>
        </Box>
    )
}
export default Reviews