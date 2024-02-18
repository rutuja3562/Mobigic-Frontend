import React from "react";
// import Dashboard from "./Dashboard";
// import Subscription from "./Subscription";
import { Routes, Route } from "react-router-dom";
import { Box, Button, Link, Text } from "@chakra-ui/react";
import Home from "./Home";
import { Link as RouterLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [show, setShow] = React.useState(false);

  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("logedinuser");
    navigate("/");
  };
  // const userInfo = JSON.parse(localStorage.getItem("logedinuser"));
  // if (userInfo) {
  //   setShow(true);
  // }
  return (
    <Box bg="white" borderRadius="10px" display="flex" flexFlow={"row-reverse"}>
      <Box
        display="flex"
        flexFlow={"row-reverse"}
        border={"1px solid white"}
        padding={5}
        width="500px"
        justifyContent={"space-between"}
      >
        {/* {show? "k":"l"}*/}
        <Text fontSize={20} fontWeight={500} onClick={handleLogout}>
          Logout
        </Text>
        <Link
          as={RouterLink}
          to="/"
          onClick={handleLogout}
          fontSize={20}
          fontWeight={500}
        >
          Login
        </Link>
        {/* <Link fontSize={20} fontWeight={500} as={RouterLink} to="/subscription">
          Subscrioption
        </Link> */}
        {/* <Link fontSize={20} fontWeight={500} as={RouterLink} to="/dashboard">
          Dashboard
        </Link> */}
      </Box>
    </Box>
  );
};

export default Navbar;
