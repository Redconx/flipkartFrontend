import { Box, Grid, Typography,CircularProgress,Backdrop} from "@mui/material";
import ViewContent from "./viewContent";
import LeftPanel from "./leftPanel";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { getMobiles } from "../../redux/actions/mobileAction";

const ViewAll = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { mobiles,loading1 } = useSelector((state) => state.getMobiles);
  const [searchParams] = useSearchParams();
  const params = Object.fromEntries([...searchParams]);
  

  useEffect(() => {
    dispatch(getMobiles());
    window.scrollTo(0, 0)
  }, [dispatch]);
  
  const callURL = (url, options) => {
    let searchStr = makeSearchString(options);
    dispatch(getMobiles(searchStr));
    navigate({ pathname: url, search: searchStr });
  };
  const makeSearchString = (options) => {
    let { brand, ram, rating, price } = options;
    let searchString = "";
    searchString = addToQueryString(searchString, "brand", brand);
    searchString = addToQueryString(searchString, "ram", ram);
    searchString = addToQueryString(searchString, "rating", rating);
    searchString = addToQueryString(searchString, "price", price);
    return searchString;
  };
  const addToQueryString = (str, paramName, paramValue) =>
    paramValue
      ? str
        ? `${str}&${paramName}=${paramValue}`
        : `${paramName}=${paramValue}`
      : str;

  const handleOptionChange = (options) => {
    callURL("/allmobiles", options);
  };

  return (
    <Box>
      <Grid container style={{ justifyContent: "center" }}>
        <Grid item lg={3} style={{ backgroundColor: "white", margin: "5px" }}>
          <LeftPanel onOptionChange={handleOptionChange} options={params} />
        </Grid>
        <Grid item lg={8} style={{ backgroundColor: "white", margin: "5px" }}>
          {loading1 ? (
            <Backdrop
              sx={{
                color: "white",
                // zIndex: (theme) => theme.zIndex.drawer + 1,
              }}
              open={true}
            >
              <CircularProgress color="inherit" />
            </Backdrop>
          ) : mobiles.length === 0 ? (
            <Typography>OOPS..!! No Result Found</Typography>
          ) : (
            <ViewContent mobiles={mobiles} />
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default ViewAll;
