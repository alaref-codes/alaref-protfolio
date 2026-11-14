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
                "https://docs.google.com/presentation/d/e/2PACX-1vQxxcPCMCcpVJT1z75vzkkLNnuVpyUh7IYKq_cuD2on9aHQ3qQGJVhlVOcAbNhqVAPjs8toIqel9cMp/pub?start=false&loop=false&delayms=3000",
                "_blank",
                "noreferrer,noopener"
              );
  };
  return (
    <Container id="hero" maxW="7xl" px={{ base: 6, md: 8, xl: 4 }} py={{ base: 24, lg: 28 }}>
      <Stack
        align="center"
        direction={{ base: 'column', lg: 'row' }}
        justifyContent="space-between"
        spacing={{ base: 12, lg: 14 }}
      >
        <Stack
          direction="column"
          flex={{ lg: '0 0 46%' }}
          justifyContent="center"
          maxW={{ base: '100%', lg: '580px' }}
          spacing={6}
          w="100%"
        >
          <HStack
            as={Link}
            px={4}
            py={2}
            rounded="full"
            w="max-content"
            maxW="100%"
            bg={useColorModeValue('gray.300', 'gray.700')}
          >
          <chakra.h1
            fontSize={{ base: '3xl', sm: '4xl', xl: '5xl' }}
            lineHeight={1}
            fontWeight="bold"
            textAlign="left"
            whiteSpace={{ lg: 'nowrap' }}
          >
            العارف أبو شعالة
          </chakra.h1>
          </HStack>
          <chakra.h1
            fontSize={{ base: '4xl', sm: '5xl', xl: '6xl' }}
            lineHeight={1.05}
            fontWeight="bold"
            textAlign="left"
            whiteSpace={{ lg: 'nowrap' }}
          >
            Alaref Abushaala
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
        <Box
          flex={{ lg: 1 }}
          maxW={{ base: '100%', lg: '620px' }}
          ml={{ base: 0, lg: 'auto' }}
          mr={{ base: 0, xl: -8 }}
          pos="relative"
          w="100%"
        >
          <DottedBox />
          <Image
            h="auto"
            objectFit="cover"
            src={`https://i.imgur.com/NuM7VcN.png`}
            rounded="xl"
            w="100%"
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
