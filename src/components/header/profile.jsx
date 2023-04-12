import { Typography, Box, Menu, MenuItem, styled ,useTheme, Button} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import auth from "../../services/auth";
const Component = styled(Menu)`
  margin-top: 5px;
`;
const Logout = styled(Typography)`
  font-size: 14px;
  margin-left: 20px;
`;

const Profile = ({ account ,setUser}) => {
  const [open, setOpen] = useState(false);
  const navigate=useNavigate()


  const handleClick = (event) => {
    setOpen(event.currentTarget);
  };
  const handleClose = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setOpen(false);
  };
  const logoutUser = () => {
    // setAccount("");
    auth.logout();
    setUser("")
    handleClose();
    navigate("/")
  };
  const theme = useTheme();
  return (
    <>
      <div onMouseLeave={handleClose}>
        <Typography  onMouseOver={handleClick}
            style={{ marginTop: 2, cursor: "pointer" }} >
          {account}
        </Typography>
        <Component
          anchorEl={open}
          open={Boolean(open)}
          onClose={handleClose}
          onMouseLeave={handleClose}
          // anchorOrigin={{
          //   vertical: "bottom",
          //   horizontal: "center"
          // }}
          // transformOrigin={{
          //   vertical: "top",
          //   horizontal: "center"
          // }}
          MenuListProps={{
            "aria-labelledby": "basic-button",
            onMouseLeave:(e)=>{
              handleClose(e)
            }
          }}
          >
          <MenuItem
            onClick={() => {
              logoutUser();
            }}
            
           
          >
            <PowerSettingsNewIcon color="primary" fontSize="small" />
            <Logout>Logout</Logout>
          </MenuItem>
        </Component>
      </div>
    </>
  );
};
export default Profile;
