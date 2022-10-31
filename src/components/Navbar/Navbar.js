import React from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  Spacer,
} from "@chakra-ui/react";

const Navbar = () => {
  return (
    <div style={{ padding: "15px", border: "1px solid lightgray" }}>
      <Flex minWidth='max-content' alignItems='center' gap='2'>
        <Box p='2'>
          <Heading size='md'>Marketplace</Heading>
        </Box>
        <Spacer />
        <ButtonGroup gap='2'>
          <Button colorScheme='teal'>Sign In</Button>
          <Button colorScheme='pink'>Sign Up</Button>
        </ButtonGroup>
      </Flex>
    </div>
  );
};

export default Navbar;
