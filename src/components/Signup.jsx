import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  useToast,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
const Signup = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = React.useState(false);
  const [loading, setLoading] = useState(false);
  const handleClick = () => setShow(!show);
  // const navigate=useNavigate()
  const toast = useToast();

  const submitHandler = async () => {
    if (username === "" || password === "") {
      toast({
        title: "Please fill all Field.",
        status: "success",
        duration: 9000,
        isClosable: true,
        position: "top",
      });
      return;
    }

    try {
      const config = {
        headers: { "Content-type": "application/json" },
      };
      await axios.post(
        // "https://greendeckapi.herokuapp.com/register",
        // "https://greendeckapi.herokuapp.com/register",
        "http://localhost:5000/register",
        { username, password },
        config
      );
      console.log("success");
      toast({
        title: "Registration Successful",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
    } catch (e) {
      console.log(e.message);
      toast({
        title: "Username/Password Already Exist",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
    }
  };
  return (
    <VStack spacing={"5px"}>
      <FormControl isRequired>
        <FormLabel>User Name </FormLabel>
        <Input
          value={username}
          placeholder="Enter username"
          onChange={(e) => setUserName(e.target.value)}
        />
      </FormControl>

      <FormControl isRequired>
        <FormLabel>password</FormLabel>
        <InputGroup size="md">
          <Input
            pr="4.5rem"
            value={password}
            type={show ? "text" : "password"}
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputRightElement width="4.5rem">
            <Button
              h="1.75rem"
              size="sm"
              onClick={handleClick}
              colorScheme={"green"}
            >
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>

      <Button
        w="100%"
        style={{ marginTop: "15" }}
        colorScheme={"green"}
        onClick={submitHandler}
        isLoading={loading}
      >
        Sign Up
      </Button>
    </VStack>
  );
};

export default Signup;
