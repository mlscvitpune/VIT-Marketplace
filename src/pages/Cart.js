import React, {useState, useEffect} from "react";
import { DeleteIcon } from '@chakra-ui/icons';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button, ButtonGroup, Card,Divider, HStack,Stack, Image, VStack, Text, Flex, Box,Checkbox, CheckboxGroup, Select, NumberInput} from '@chakra-ui/react'
import img1 from "../components/Images/nodeMCU.jpeg"
import img2 from "../components/Images/arduinoUNO.jpeg"
import axios from "axios";


const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(`http://localhost:5000/cart/read/${localStorage.getItem('user')}`);
      setCartItems(data.items);
    };
    fetchData();
  }, [])

  const navigate = useNavigate();
  const Imgs = { img1, img2}
  const [quantity, setQuantity] = useState(1);
  return (
    <>
    <Flex p={10} justify="space-between">
      <HStack alignItems={"flex-start"} spacing={"12"}>
      <Button colorScheme='teal' onClick={() => { navigate('/shop') }}>CONTINUE SHOPPING</Button>

      <VStack>
      <Card p={5}>
        <Box>
        <Flex justify="space-between">
          <Text color={"black"} > Shopping Cart</Text>
          <Text color={"black"}> Price</Text>
        </Flex>
        </Box>

        <Flex>
          <Checkbox colorScheme='green' defaultChecked/>
          <Image src={Imgs.img1}/>
          <Flex justify={"space-between"}>
          
          <Stack spacing={"5"} pt={4}>
            <Text color={"black"}>Product name : name of item</Text>
            <Text color={"black"} maxWidth={"500px"}>
              Product details  : Lorem ipsum dolor sit amet consectetur adipisicing elit. A, eos
              eveniet ex recusandae in adipisci consequuntur suscipit quisquam
              ad fuga, magni enim voluptatem modi magnam dolorem rem quae
              repellat numquam.
            </Text>
            <Text color={"black"}>Category : Hardware</Text>
            <Flex pb={5} justify={"space-between"}>
            <Select  maxW="100px" placeholder="Qty">
                {[...Array(11).keys()].map((i) => (
                  <option key={i} value={i}>
                    {i}
                  </option>
                ))}
            </Select>
            <DeleteIcon color={"red"}/>
            </Flex>
          </Stack>
            <Text color={"black"} pt={5} pl={5}>₹500</Text>
          </Flex>
        </Flex>
        <Divider borderWidth="1px"/>
        
        <Flex>
          <Checkbox colorScheme='green' defaultChecked/>
          <Image src={Imgs.img2}/>
          <Flex justify={"space-between"}>
          
          <Stack spacing={"5"} pt={4}>
            <Text color={"black"}>Product name : name of item</Text>
            <Text color={"black"} maxWidth={"500px"}>
              Product details  : Lorem ipsum dolor sit amet consectetur adipisicing elit. A, eos
              eveniet ex recusandae in adipisci consequuntur suscipit quisquam
              ad fuga, magni enim voluptatem modi magnam dolorem rem quae
              repellat numquam.
            </Text>
            <Text color={"black"}>Category : Hardware</Text>
            <Flex pb={5} justify={"space-between"}>
            <Select  maxW="100px" placeholder="Qty">
                {[...Array(11).keys()].map((i) => (
                  <option key={i} value={i}>
                    {i}
                  </option>
                ))}
            </Select>
            <DeleteIcon color={"red"}/>
            </Flex>
          </Stack>
            <Text color={"black"} pt={5} pl={5}>₹500</Text>
          </Flex>
        </Flex>
        <Divider borderWidth="1px"/>
      </Card>
      </VStack>

      <Card p={"5"}>
        <Text fontWeight={"bold"} color={"black"}> Product Summary</Text>
        <Box pt={5} pb={5}>
        <Text>SubTotal : ₹1000</Text>
        <Text>Item count : 2</Text>
        <Divider borderWidth="1px"/>
        </Box>
        
        <Button bgColor={"teal"}>CHECK OUT</Button>
      </Card>
    </HStack>
    </Flex>
    
    </>
  );
};

export default Cart;
