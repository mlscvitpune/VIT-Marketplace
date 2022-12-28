import React from 'react'
import {TiSocialFacebook, TiSocialGithub, TiSocialInstagram} from 'react-icons/ti'
import {
    FormControl,
    FormLabel,
    Input,
    Textarea,
    InputGroup,
    InputLeftAddon
  } from '@chakra-ui/react'


const Form = () => {
  return (
    <div>
        <div>
            <form>
                <div>
                    <FormLabel>Username</FormLabel>
                        <Input htmlSize={40} width='auto' type='text' placeholder={localStorage.getItem('user')} />
                </div>

                <div>
                <FormLabel>Phone Number</FormLabel>
                <InputGroup>
                    <InputLeftAddon children='+91' />
                    <Input htmlSize={40} width='auto' type='tel' placeholder='phone number' />
                </InputGroup>
                </div>

                <div>
                    <FormControl>
                        <FormLabel>Email address</FormLabel>
                        <Input htmlSize={40} width='auto' type='email' placeholder='Email'/>
                    </FormControl>
                </div>

                <div>
                    <FormLabel>Address</FormLabel>
                    <Textarea placeholder='Here is a sample placeholder' size="md"/>  
                </div>

                <div>
                    <FormLabel>Facebook</FormLabel>
                        <TiSocialFacebook />
                        <Input htmlSize={40} width='auto' type='text' placeholder='https://github.com/'/>
                </div>

                <div>
                        <FormLabel >Github </FormLabel>
                        <TiSocialGithub />      
                        <Input htmlSize={40} width='auto' type='text' placeholder='https://github.com/'/>
                </div>

                <div>
                        <FormLabel >Instagram </FormLabel>
                        <TiSocialInstagram />      
                        <Input htmlSize={40} width='auto' type='text' placeholder='https://Instagram.com/'/>
                </div>


                <div>
                <FormLabel >Date of birth</FormLabel>
                <Input
                    htmlSize={40} width='auto'
                    placeholder="Select Date and Time"
                    size="md"
                    type="datetime-local"
                />
                </div>

            </form>
        </div>
    </div>
  )
}

export default Form