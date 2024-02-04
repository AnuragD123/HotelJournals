import React, { useState, useEffect } from 'react';
import { Box, Image, Flex } from '@chakra-ui/react';
import './InputLabelAnimation.css';
import banner from '../../assets/img/login-img-1.png';
import banner2 from '../../assets/img/login-img-2.png';
import banner3 from '../../assets/img/login-img-3.png';
import banner4 from '../../assets/img/login-img-4.png';
import banner5 from '../../assets/img/login-img-5.png';
import banner6 from '../../assets/img/login-img-6.png';

const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const images = [banner, banner2, banner3, banner4, banner5, banner6];
    const totalSlides = images.length;

    useEffect(() => {
        const interval = setInterval(() => {
            const newSlide = (currentSlide + 1) % totalSlides;
            setCurrentSlide(newSlide);
        }, 5000); // Adjusted interval to 5 seconds for demonstration

        return () => clearInterval(interval);
    }, [currentSlide, totalSlides]);
    
    return (
        <Box
            className="box-carousel"
            paddingTop="10rem"
            backgroundColor="#ff7f6eff"
            margin="15px"
            borderRadius="0px 30px 0px 30px"
            bgImage={[
                'repeating-linear-gradient(45deg, #ffff -6.25% 6.25%, rgba(255, 255, 255, 0.10) 0 18.75%)',
                'repeating-linear-gradient(-45deg, rgba(255, 255, 255, 0.10) -6.25% 6.25%, #ff7f6eff 0 18.75%)',
                'linear-gradient(135deg, #0000 18.75%, #ff7f6eff 0 31.25%, #ffff 0, #542437 0 150%, # 0)',
            ]}
            bgSize={`calc(2 * var(--s)) calc(2 * var(--s))`}
            style={{
                height: 'auto',
                // '--s': '80px',
                // '--c': '#ffff',
            }}
        >
            <Flex
                direction="column"
                alignItems="center"
                justifyContent="center"
                w="100%"
                maxW="30vw"
                mx="auto"
            >
                <Box
                    position="relative"
                    overflow="hidden"
                    borderRadius="md"
                >
                    <Flex
                        w={`${totalSlides * 100}%`}
                        transition="transform 1s" // Adjusted transition duration to 1 second
                        className="carousel-inner"
                        transform={`translateX(-${currentSlide * (100 / totalSlides)}%)`}
                    >
                        {images.map((src, index) => (
                            <Image
                                key={index}
                                className="d-block w-100"
                                src={src}
                                alt={`Slide ${index + 1}`} width={531} height={419}
                            />
                        ))}
                    </Flex>
                </Box>
            </Flex>
        </Box>
    );
};

export default Carousel;
