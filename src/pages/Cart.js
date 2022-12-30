import React from "react";
import { Button, ButtonGroup, Card, HStack, Image, VStack, Text, Flex} from '@chakra-ui/react'
import img1 from "../components/Images/nodeMCU.jpeg"
import img2 from "../components/Images/arduinoUNO.jpeg"

const Imgs = { img1, img2}

const Cart = () => {
  return (
    <>
    <Flex p={10} justify="space-between">
      <Button  bgColor={"grey"}>CONTINUE SHOPPING</Button>
      <Card p={"5"}>
        <Text fontWeight={"bold"} color={"black"}> Product Summary</Text>
        <Button bgColor={"grey"}>CHECK OUT</Button>
      </Card>
      </Flex>
    
    <VStack p={5}>
      <Card p={5}>
        <Image src={Imgs.img1}/>
      </Card>
      <Card p={5}>
        <Image src={Imgs.img2}/>
      </Card>
      <Card p={5}>
        <Image src={Imgs.img1}/>
      </Card>
    </VStack>
    
    </>
  );
};

export default Cart;
