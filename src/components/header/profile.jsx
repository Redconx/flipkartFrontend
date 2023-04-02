import { Typography, Box, Menu, MenuItem, styled } from "@mui/material";
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
  const handleClose = () => {
    setOpen(false);
  };
  const logoutUser = () => {
    // setAccount("");
    auth.logout();
    setUser("")
    handleClose();
    navigate("/")
  };
  return (
    <>
      <Box onClick={handleClick}>
        <Typography style={{ marginTop: 2, cursor: "pointer" }}>
          {account}
        </Typography>
        <Component
          anchorEl={open}
          open={Boolean(open)}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem
            onClick={() => {
              logoutUser();
            }}
            onBlur={()=>handleClose()}
          >
            <PowerSettingsNewIcon color="primary" fontSize="small" />
            <Logout>Logout</Logout>
          </MenuItem>
        </Component>
      </Box>
    </>
  );
};
export default Profile;
