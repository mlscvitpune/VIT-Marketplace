import React,{useState,useEffect, useRef} from 'react';
import {BiChevronLeft,BiChevronRight} from 'react-icons/bi';
import {
  Box,
  Heading,
  Image
} from "@chakra-ui/react";
import './slider.css';
const featuredImages=['/prop2.webp','/prop.jpg','/prop3.png'];
let temp=0;
const Slider=()=>{
    const [currentIndex,setIndex]=useState(0);
    const slideRef=useRef();
    const removeFade=()=>{
        slideRef.current.classList.remove("fade");
    }
    useEffect(()=>{
        slideRef.current.addEventListener("animationend",removeFade);
        // startSlider();
    },[]);
    const startSlider=()=>{
        setInterval(()=>{
            handleNext();
        },6000);
    }
    const handleNext=()=>{
        slideRef.current.classList.add('fade');
        temp=(temp+1)%featuredImages.length;
        setIndex(temp);

    }
    const handlePrev=()=>{
        slideRef.current.classList.add('fade');
        temp=(currentIndex+featuredImages.length -1)% featuredImages.length;
        setIndex(temp);
      
    }
    return(
        <>
        <Box centerContent w={['70vw', '30em', '48em', '62em', '80em']} h={['20vh', '15em','15em','30em']}>
           
            <Box w={['70vw', '30em', '48em', '62em', '80em']} p='0' m='0' display='flex' justifyContent='center' ref={slideRef}>
                <Image src={featuredImages[currentIndex]} w={['70vw', '30em', '48em', '62em', '80em']} h={['20vh', '15em','15em','30em']} p='0' m='0' >
                </Image>
            </Box>
            <Box w={['70vw', '30em', '48em', '62em', '80em']}  display='flex' justifyContent='space-between' position='relative' top={['-6em','-9.5em','-9.5em','-17em']}>
                <Box onClick={handleNext}><BiChevronLeft size={['50px']} color='grey'/></Box>
                <Box onClick={handlePrev}><BiChevronRight size={['50px']} color='grey'/></Box>
            </Box>
         
        </Box>
    
   
        </>
    );
}
export default Slider;



