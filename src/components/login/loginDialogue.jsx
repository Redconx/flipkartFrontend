import {Dialog,styled,Box,TextField,Typography,Button, CircularProgress} from "@mui/material";
import React,{useState,useContext, useMemo, useEffect} from "react";
import { DataContext } from "../../context/dataProvider";
import { authenticateSignup,authenticateLogin } from "../../services/api";
import auth from "../../services/auth";

const accountInitialValues = {
  login: {
    view: "login",
    heading: "Login",
    subHeading: "Get access to your Orders,Wishlist and Recommendations",
  },
  signup: {
    view: "signup",
    heading: "Looks like you're new here!",
    subHeading: "Sign up with your mobile number to get started",
  },
};

let signupInitialValues = {
  firstname: "",
  lastname: "",
  username: "",
  email: "",
  password: "",
  phone: "",
};

let initLoginValues={
    username:"",
    password:""
}
function LoginDialogue ({ open, setOpen,setUser }) {
  const [account1, toggleAccount] = useState(accountInitialValues.login);
  const [err,setErr]=useState(false)
  const [err1,setErr1]=useState(false)
  const [loading,setLoading]=useState(false);
  const [loginValues, setLoginValues] = useState(initLoginValues);
  const [signup, setSignup] = useState(signupInitialValues);
  const [signup1, setSignup1] = useState({
    firstname: "a",
    lastname: "a",
    username: "a",
    email: "a",
    password: "a",
    phone: "a",
  });
//   const [account, setAccount] = useContext(DataContext);
  const {account,setAccount} = useContext(DataContext);
  const [focusEle,setFocusEle] = useState("");

  const handleClose = () => {
    setOpen(false);
    setErr(false)
    setErr1(false)
    toggleAccount(accountInitialValues.login);
    setLoginValues(initLoginValues)
    setSignup(signupInitialValues)
    setSignup1({  firstname: "a",
    lastname: "a",
    username: "a",
    email: "a",
    password: "a",
    phone: "a",})

 signupInitialValues = {
      firstname: "",
      lastname: "",
      username: "",
      email: "",
      password: "",
      phone: "",
    };
   
  };



  const Component = styled(Box)`
    height: 70vh;
    width: 90vh;
    display: flex;
  `;
  const Image = styled(Box)`
    background: #2874f0
      url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png)
      center 85% no-repeat;
    height: 81%;
    width: 29%;
    padding: 44px 35px;
    & > p,
    & > h5 {
      color: #fff;
      font-weight: 550;
    }
  `;
  const Wrapper = styled(Box)`
    display: flex;
    flex-direction: column;
    padding: 0px 35px;
    flex: 1;
    & > div,
    & > p,
    & > button {
      margin-top: 10px;
    }
  `;
  const LoginButton = styled(Button)`
    text-transform: none;
    background: #fb641b;
    color: #fff;
    height: 48px;
    border-radius: 2px;
  `;
  const RequestOPT = styled(Button)`
    text-transform: none;
    background: #fff;
    color: #2874f0;
    height: 48px;
    border-radius: 2px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0/20%);
  `;
  const Text = styled(Typography)`
    font-size: 12px;
    color: #878787;
  `;
  const CreateAccount = styled(Typography)`
    font-size: 14px;
    text-align: center;
    color: #2874f0;
    font-weight: 600;
    cursor: pointer;
  `;
  const Error = styled(Typography)`
    font-size: 10px;
    color: red;
    line-height: 0px;
    margin-top: 10px;
    font-weight: 600;
  `;

  const loginImg =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png";

  const toggleSignUp = () => {
    toggleAccount(accountInitialValues.signup);
  };

  const onInputChange = (e) => {
    let obj={...signup}
    obj[e.currentTarget.name]=e.currentTarget.value
    setSignup(obj)   
    setFocusEle(e.currentTarget.name); 
  };
  const loginUser = async () => {
    setLoading(true)
  let response = await authenticateLogin(loginValues);
  setLoading(false)
  console.log('response',response)
  if (response.status === 200) {
    // setAccount(response.data.firstname);
    auth.login(response.data.firstname)
    setUser(response.data.firstname)
    handleClose();
  }
  else{
    setErr(true)
  }
};
const onValueChange=(e)=>{
  // loginValues[e.currentTarget.name] = e.currentTarget.value;
  let loginValuesCopy = {...loginValues};
   loginValuesCopy[e.currentTarget.name] = e.currentTarget.value;
  setLoginValues(loginValuesCopy);
  setFocusEle(e.currentTarget.name);

}

useEffect(()=> {
  document.getElementById(`${focusEle}`)?.focus();
},[loginValues,signup])



  const singupUser = async () => {

    setSignup1(signup)
    // Object.
    if(!signup.firstname||!signup.lastname||!signup.password||!signup.email||!signup.phone||!signup.username){
      return
    }

    let response = await authenticateSignup(signupInitialValues);
    
    // if (!response.data) return;
    
    if(response.status===200) {
      // setAccount(signupInitialValues.firstname);
      setUser(signupInitialValues.firstname)
      auth.login(signupInitialValues.firstname)
      handleClose();
    }else{
      setErr1(true)
    }
  };


  return (
    <Dialog
      open={open}
      onClose={() => handleClose()}
      PaperProps={{ sx: { maxWidth: "unset" } }}
    >
      <Component>
        <Image>
          <Typography variant="h5">{account1.heading}</Typography>
          <Typography style={{ marginTop: 20 }}>
            {account1.subHeading}
          </Typography>
        </Image>
        {account1.view === "login" ? (
          <Wrapper>
            <TextField variant="standard" label="Enter Username"  id="username" onChange={onValueChange} name='username' value={loginValues.username} type="text" />
            {err && <Error color="red">Invalid Username or password</Error>}

            <TextField variant="standard" label="Enter Password"   id="password" onChange={onValueChange} name='password' value={loginValues.password} type="text" />
            <Text>
              By continuing, you agree to flipkart's Terms of Use and Privacy
              Policy
            </Text>


            <LoginButton onClick={()=>loginUser()}>Login<Box style={{margin:10,display:'flex'}}>{loading? <CircularProgress size={20} color={'inherit'}/>:""}</Box></LoginButton>
            
        


            <Typography style={{ textAlign: "center" }}>OR</Typography>
            <RequestOPT>Request OTP</RequestOPT>
            <CreateAccount onClick={() => toggleSignUp()}>
              New to Flipkart? Create an account
            </CreateAccount>
          </Wrapper>
        ) : (
          <Wrapper>
            {err1 && <Error color="red">Username already exist</Error>}
            <TextField
              variant="standard"
              onChange={onInputChange}
              label="Enter Firstname"
              name="firstname"
              id="firstname"
              value={signup.firstname}
              error={!signup1.firstname}
              required
              helperText={!signup1.firstname?"please enter first name":""}
            />
            <TextField
              variant="standard"
              onChange={onInputChange}
              label="Enter Lastname"
              name="lastname"
              id="lastname"
              value={signup.lastname}
              error={!signup1.lastname}
              required
              helperText={!signup1.lastname?"please enter last name":""}
            />
            <TextField
              variant="standard"
              onChange={onInputChange}
              label="Enter Username"
              name="username"
              id="username"
              value={signup.username}
              error={!signup1.username}
              required
              helperText={!signup1.username?"please enter username":""}
            />
            <TextField
              variant="standard"
              onChange={onInputChange}
              label="Enter Email"
              name="email"
              id="email"
              value={signup.email}
              error={!signup1.email}
              required
              helperText={!signup1.email?"please enter email":""}
            />
            <TextField
              variant="standard"
              onChange={onInputChange}
              label="Enter Password"
              name="password"
              id="password"
              value={signup.password}
              error={!signup1.password}
              required
              helperText={!signup1.password?"please enter password":""}
            />
            <TextField
              variant="standard"
              onChange={onInputChange}
              label="Enter Phone"
              name="phone"
              id="phone"
              value={signup.phone}
              required
              helperText={!signup1.phone?"please enter phone number":""}
              error={!signup1.phone}
            />

            <LoginButton onClick={() => singupUser()}>Continue</LoginButton>
          </Wrapper>
        )}
      </Component>
    </Dialog>
  );
};
export default LoginDialogue;
