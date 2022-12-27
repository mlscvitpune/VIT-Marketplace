import React from "react";
import {
    Box,
    Button,
    Container,
    Text,
    InputGroup,
    Input,
    InputRightAddon,
    Flex,
    SimpleGrid,
} from "@chakra-ui/react";
import { useEffect } from "react";
import Dash from "../DashStart/Dash";
import { display } from "../../apiCalls";

const Items = (userprofile, username = "") => {
    const [items, setItems] = React.useState();
    useEffect(() => {
        const displayItems = async () => {
            const response = await display("http://localhost:5000/item/read");
            setItems(response.items);
        };
        displayItems();
    }, [userprofile]);

    return (
        <div>
            <Flex mt="20px" flexDirection="column">
                <Flex
                    display="flex"
                    justifyContent="flex-start"
                    w={["70vw", "30em", "48em", "62em", "80em"]}
                    mb="20px"
                >
                    <Text fontSize={["md", "md", "lg", "3xl"]} color="black">
                        Trending
                    </Text>
                </Flex>
                <SimpleGrid columns={["2", "3", "3", "5"]} spacing={10} gap="10px">
                    {items &&
                        items.map((item) => {
                            return (
                                <Box
                                    bg="blue.100"
                                    height={["10rem", "15rem", "19rem"]}
                                    borderRadius="5px"
                                    className="flex flex-col justify-center p-4"
                                >
                                    <a href={`/item/${item._id}`}>
                                        <Text
                                            className="p-2 flex justify-center text-black underline"
                                            fontSize="xl"
                                        >
                                            Title: {item.title}
                                        </Text>
                                    </a>
                                    <hr />
                                    <Text className="p-2 " fontSize="md">
                                        Category: {item.category}
                                    </Text>
                                    <Text className="p-2 " fontSize="md">
                                        Description: {item.description}
                                    </Text>
                                    <Text className="p-2 " fontSize="md">
                                        Price: {item.price}
                                    </Text>
                                    <Text className="p-2 " fontSize="md">
                                        Quantity: {item.quantity}
                                    </Text>
                                    <hr />
                                    <Text
                                        className="text-black flex justify-center my-3"
                                        fontSize="xl"
                                    >
                                        Seller: {item.username}
                                    </Text>
                                </Box>
                            );
                        }).reverse()}
                </SimpleGrid>
            </Flex>
        </div>
    );
};

export default Items;
