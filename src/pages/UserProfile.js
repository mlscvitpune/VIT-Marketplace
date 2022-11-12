import React, {useState} from 'react'
import Form from '../components/Form/Form'
import img from '../components/Images/Profile.jpeg'
import { Image, GridItem, Grid, Button, Box, Text, Center } from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons'


const UserProfile = () => {
    const property = {    
        reviewCount: 34,
        rating: 4,
    }

  return (
    <div >
        <div>
        <Text as='b' fontSize='3xl'>Profile Settings</Text>
            <p>
              Another productive way to use this tool to begin a daily writing routine. One way is to generate a random paragraph with the intention to try to rewrite it while still keeping the original meaning. The purpose here is to just get the writing started so that when the writer goes onto their day's writing projects, words are already flowing from their fingers.  
            </p>
        </div>

        <div>
        <Grid
            h="auto"
            gridTemplateColumns='repeat(2, 1fr)'
            gap={4}
            p={5}
        >
            <GridItem rowSpan="auto" colSpan="auto">
            <div>
            <Image
                border='4px' borderColor='Black.500'
                borderRadius='full'
                boxSize='130px'
                src={img}
                alt='User'
            />
            </div>
            <Box display='flex' mt='2' alignItems='center'>
            {Array(5)
                .fill('')
                .map((_, i) => (
                <StarIcon
                    key={i}
                    color={i < property.rating ? 'teal.500' : 'gray.300'}
                />
                ))}
                <Box as='span' ml='2' color='blue.600' fontSize='sm'>
                {property.reviewCount} reviews
                </Box>
            
            </Box>
            <input type="file" hidden/>
            <Button colorScheme='teal' variant='solid'>
                Upload Photo
            </Button>
            <Text>Name</Text>
            <Text>Email ID</Text>
            </GridItem>

            <GridItem rowSpan="auto" colSpan="auto">
            <div>
                <Form />
            </div>
            </GridItem>
        </Grid>
        </div>
    </div>
  )
}

export default UserProfile