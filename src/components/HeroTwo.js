import * as React from 'react';
import {
  chakra,
  Container,
  Stack,
  HStack,
  Text,
  useColorModeValue,
  Button,
  Image,
  Skeleton,
  Box,
  Link,
  Icon
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { GoChevronRight } from 'react-icons/go';
import { MdBolt } from 'react-icons/md';

const HeroSection = () => {
  const linkedin = () => {
    window.open(
                "https://linkedin.com/in/alaref-abushaala",
                "_blank",
                "noreferrer,noopener"
              );
  };

  const resume = () => {
    window.open(
                "https://docs.google.com/presentation/d/e/2PACX-1vSiIjsZphIHiyTKdidLtjVBlKlvGQzem-2DKz3ejfBO5D-avYbqcOfBP-WsmAwZoYNJ2JI5Jy-8Jm-O/pub?start=false&loop=false&delayms=3000",
                "_blank",
                "noreferrer,noopener"
              );
  };
  return (
    <Container maxW="6xl" px={{ base: 6, md: 3 }} py={24}>
      <Stack direction={{ base: 'column', md: 'row' }} justifyContent="center">
        <Stack direction="column" spacing={6} justifyContent="center" maxW="480px">
          <HStack
            as={Link}
            p={1}
            rounded="full"
            fontSize="sm"
            w="max-content"
            bg={useColorModeValue('gray.300', 'gray.700')}
          >
          <chakra.h1 fontSize="5xl" lineHeight={1} fontWeight="bold" textAlign="left">
            العارف أبو شعالة<br />
          </chakra.h1>           
          </HStack>
          <chakra.h1 fontSize="5xl" lineHeight={1} fontWeight="bold" textAlign="left">
            Alaref Abushaala<br />
          </chakra.h1>
          <Text
            fontSize="1.2rem"
            textAlign="left"
            lineHeight="1.375"
            fontWeight="400"
            color="gray.500"
          >
            Passionate Software Engineer
          </Text>
          <HStack
            spacing={{ base: 0, sm: 2 }}
            mb={{ base: '3rem !important', sm: 0 }}
            flexWrap="wrap"
          >
            <chakra.button
              w={{ base: '100%', sm: 'auto' }}
              h={12}
              px={6}
              color="white"
              size="lg"
              rounded="md"
              mb={{ base: 2, sm: 0 }}
              onClick={linkedin}
              zIndex={5}
              lineHeight={1}
              bgGradient="linear(to-l, #0ea5e9,#2563eb)"
              _hover={{ bgGradient: 'linear(to-l, #0ea5e9,#2563eb)', opacity: 0.9 }}
            >
              <chakra.span> Let's Connect </chakra.span>
              <Icon as={MdBolt} h={4} w={4} ml={1} />
            </chakra.button>
            <Button
              colorScheme='teal' variant='outline'
              size={"md"}
              onClick={resume}
            >
              View Resume
            </Button>
          </HStack>
        </Stack>
        <Box ml={{ base: 0, md: 5 }} pos="relative">
          <DottedBox />
          <Image
            w="90%"
            h="90%"
            minW={{ base: 'auto', md: '30rem' }}
            objectFit="cover"
            src={`https://i.imgur.com/HwFWvwd.jpeg`}
            rounded="xl"
            fallback={<Skeleton />}
          />
        </Box>
      </Stack>
    </Container>
  );
};

function DottedBox() {
  return (
    <Box position="absolute" left="-45px" top="-30px" height="full" maxW="700px" zIndex={-1}>
      <svg
        color={useColorModeValue('rgba(55,65,81, 0.1)', 'rgba(55,65,81, 0.7)')}
        width="350"
        height="420"
        fill="none"
      >
        <defs>
          <pattern
            id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <rect x="0" y="0" width="4" height="4" fill="currentColor"></rect>
          </pattern>
        </defs>
        <rect width="404" height="404" fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)"></rect>
      </svg>
    </Box>
  );
}

export default HeroSection;
