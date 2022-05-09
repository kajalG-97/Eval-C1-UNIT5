import Paper from "@mui/material/Paper";

import Radio from '@mui/material/Radio';

import FormControlLabel from '@mui/material/FormControlLabel';

import RadioGroup from '@mui/material/RadioGroup';

import Box from "@mui/material/Box";

import { Checkbox, IconButton, Typography } from "@mui/material";

import TextField from "@mui/material/TextField";

import Button from "@mui/material/Button";

import GoogleIcon from "@mui/icons-material/Google";

import FacebookIcon from "@mui/icons-material/Facebook";

import { useState } from "react";

import { ToastContainer, toast } from "react-toastify";

import FormLabel from '@mui/material/FormLabel';

import "react-toastify/dist/ReactToastify.css";

import { Link, useNavigate } from "react-router-dom";

import { HomeNav } from "./HomeNav";

import { useDispatch, useSelector } from "react-redux";

import { nanoid } from "nanoid";

import InputLabel from "@mui/material/InputLabel";

import MenuItem from "@mui/material/MenuItem";

import FormControl from "@mui/material/FormControl";

import Select from "@mui/material/Select";

import { registerSuccessData } from "../redux/register/registerAction";

// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

// import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export const SignUp = () => {

  const navigate = useNavigate();

  const dispatch = useDispatch();


  // const { loding, error } = useSelector((store) => store.register);


  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    date_of_birth: "",
    gender: "",
    mobile: 0,
    city: ""
  });


  const getformData = (e) => {

    let { id, value } = e.target;

    setData({ ...data, [id]: value });

  };



  const [filter, setFilter] = useState("");

  const [value, setValue] = useState(null);


  const handleRadio = (e) => {

    setData({ ...data, gender: e.target.value });

  }


  const handleChangeCityOption = (e) =>{
    setData({ ...data, city: e.target.value });
  }

  const registerHandler = (e) => {

    // validation for email ,name and password
    // const namepattern = /[a-zA-Z]/;

    // const emailpattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    // const passwordPattern =
    //   /^(?=[^A-Z\n]*[A-Z])(?=[^a-z\n]*[a-z])(?=[^0-9\n]*[0-9])(?=[^#?!@$%^&*\n-]*[#?!@$%^&*-]).{8,}$/;


    // if (!namepattern.test(data.firstName)) {
    //   toast.warn("First Name must contain  only alphabates", {
    //     position: "top-center",
    //   });

    // } else if (!namepattern.test(data.lastName)) {
    //   toast.warn("Last Name must contain  only alphabates", {
    //     position: "top-center",
    //   });

    // } else if (!emailpattern.test(data.email)) {
    //   toast.warn("There must be a valid email address", {
    //     position: "top-center",
    //   });

    // } else if (!passwordPattern.test(data.password)) {
    //   toast.warn(
    //     "Password must be in Alphanumeric format and min length of 8",
    //     {
    //       position: "top-center",
    //     }
    //   );

    // } else {
    e.preventDefault();
      dispatch(registerSuccessData(data, toast, navigate));

      console.log('data', data);

    // }
  };



  const cityOption = ["Pune", "Mumbai", "Delhi", "Bangalore", "Hyderabad", "Amritser", "Chennai", "Kolkata"];

  const options = [
    {
      value: "Pune",
      label: "Pune",
      id: nanoid(),
    },
    {
      value: "Mumbai",
      label: "Mumbai",
      id: nanoid(),
    },
    {
      value: "Delhi",
      label: "Delhi",
      id: nanoid(),
    },
    {
      value: "Bangalore",
      label: "Bangalore",
      id: nanoid(),
    },
    {
      value: "Hyderabad",
      label: "Hyderabad",
      id: nanoid(),
    },
    {
      value: "Amritser",
      label: "Amritser",
      id: nanoid(),
    },
    {
      value: "Chennai",
      label: "Chennai",
      id: nanoid(),
    },
    {
      value: "Kolkata",
      label: "Kolkata",
      id: nanoid(),
    },
  ];



  // return loding ? <img src="https://miro.medium.com/max/1400/1*CsJ05WEGfunYMLGfsT2sXA.gif" /> : error ? <img src="https://cdn.dribbble.com/users/2469324/screenshots/6538803/comp_3.gif" alt="Oops something went wrong" /> : (
  return (
    <>

      <Box style={{ backgroundColor: "#ebe7ff", height: "760px", marginTop: 0 }}
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            width: 450,
            height: 650,
          },
          justifyContent: "center",
          marginTop: "20px",
          paddingTop: "65px"
        }}
        component="form"
        noValidate
        autoComplete="off"
      >
        <Paper
          elevation={3}
          sx={{ padding: "30px", display: "flex", flexDirection: "column" }}
        >
          <Typography
            variant="h3"
            sx={{ fontSize: "25px", fontWeight: "bold", marginBottom: "20px" }}
          >
            Create your account
          </Typography>
          <Box sx={{ display: "flex", gap: "10px" }}>
            <TextField
              id="firstName"
              label="First Name"
              variant="outlined"
              sx={{ marginBottom: "25px" }}
              onChange={getformData}
            />
            <TextField
              id="lastName"
              label="Last Name"
              variant="outlined"
              sx={{ marginBottom: "25px" }}
              onChange={getformData}
            />

          </Box>
          <TextField
            id="email"
            label="Email"
            variant="outlined"
            sx={{ marginBottom: "25px" }}
            onChange={getformData}
          />
          <Box sx={{ display: "flex", justifyContent: "space-between", m: "auto",mb:2, width: "100%" }}>
            <Box sx={{ border: 0,ml:1 }} >
              <FormLabel id="demo-row-radio-buttons-group-label" sx={{border:0,ml:-15}}>Gender</FormLabel>
              <RadioGroup row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group">
                <FormControlLabel onChange={handleRadio} id="male" value="male" control={<Radio color="secondary" />} label="male" />
                <FormControlLabel onChange={handleRadio} id="female" value="female" control={<Radio color="secondary" />} label="female" />
                 </RadioGroup>
            </Box>
            <Box>
              <FormControl variant="standard" sx={{ m: 1, minWidth: 170 }}>
                <InputLabel
                  sx={[
                    {
                      color: "#202020",
                    },
                    () => ({ "&:hover": { color: "#202020", bgcolor: "#474747" } }),
                  ]}
                  id="demo-simple-select-standard-label"
                >
                  Select City
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={filter}
                  onChange={handleChangeCityOption}
                  label="City"
                  sx={{
                    width: "100%",            
                   
                    border: "1px solid #b1b1b1",
                    borderRadius: "5px",
                    marginBottom: "-6px",
                    fontSize: "15px",
                    color: "#888888",
                  }}
                >
                  
                  {cityOption &&
                    cityOption.map((e) => {
                      return (
                        <MenuItem
                          key={e}
                         
                          id={e}
                          value={e}
                        >
                          {e}
                        </MenuItem>
                      );

                    })}
                </Select>
              </FormControl>
            </Box>
          </Box>

          <Box sx={{ display: "flex",gap:1, justifyContent: "space-between", m: "auto", width: "100%" }}>

            <TextField
              id="mobile"
              label="Mobile Number"
              variant="outlined"
              sx={{ marginBottom: "25px" }}
              onChange={getformData}
            />
            {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label="Basic example"
                value={value}
                onChange={(newValue) => {
                  setValue(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider> */}
             <TextField
              id="date_of_birth" type="Date"
              label="Date"
              variant="outlined"
              sx={{ marginBottom: "25px" }}
              onChange={getformData}
            />
          </Box>

          <TextField
            id="password"
            label="Password (8 character minimum)"
            type="password"
            variant="outlined"
            sx={{ marginBottom: "10px" }}
            onChange={getformData}
          />

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "15px",
            }}
          >
            <div>
              <Checkbox /> <span>Keep me signed in</span>{" "}
            </div>
          </Box>
          <Button
            variant="contained"
            sx={{ backgroundColor: "#572afb", color: "white " }}
            onClick={registerHandler}
          >
            Create your account
          </Button>
          <Typography
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: "10px",
              marginBottom: "10px",
            }}
          >
            or
          </Typography>
          

          <Button
            variant="contained"
            sx={{ backgroundColor: "#4285f4", color: "white " }}
            startIcon={<GoogleIcon />}
            onClick={() => {
              window.location.href = "https://user-information-project.herokuapp.com/auth/google"
            }}
          >
            Continue With Google
          </Button>
          <Typography
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: "15px",
              marginBottom: "10px",
            }}
          >
            Have an account? <Link to={"/SignIn"}>Sign in</Link>
          </Typography>
        </Paper>
      </Box>

      <ToastContainer />
    </>
  );

};

