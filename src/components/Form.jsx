import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  Button,
  VStack,
  Input,
  Text,
  Heading,
} from "@chakra-ui/react";
import axios from "axios";

const UploadFileComp = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [profile, setPRofile] = useState("");
  const [username, setUserName] = useState("");
  const handleFileChange = (event) => {
    console.log("event", event.target.files[0]);
    setSelectedFile(event.target.files[0]);
  };
  const handleUpload = async () => {
    if (selectedFile) {
      console.log("Before");
      console.log("selectedFile", selectedFile);
      const formData = new FormData();
      formData.append("file", selectedFile);
      formData.append("username", );

      try {
        const response = await axios.post(
          "http://localhost:5000/upload",
          formData
        );
        console.log(response.data);
      } catch (error) {
        console.error("Error uploading file:", error);
      }
    } else {
      console.log("Please select a file to upload");
    }
  };
  return (
    <VStack spacing={"5px"} margin={"auto"} w={"500px"}>
      <Heading>Form</Heading>
      <FormControl isRequired>
        <FormLabel>Upload File</FormLabel>
        <Input type="file" onChange={handleFileChange} />
      </FormControl>
      <Button
        h="1.75rem"
        size="sm"
        onClick={handleUpload}
        colorScheme={"green"}
        w={"100%"}
        m={"10px"}
      >
        Submit
      </Button>
    </VStack>
  );
};
export default UploadFileComp;
