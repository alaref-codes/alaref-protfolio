import {
  Divider,
  Stack,
  Text,
  Container,
  Box,
  HStack,
  Heading,
  Center,
} from "@chakra-ui/react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact({ color }) {
  return (
    <>
      <Container maxW={"3xl"} id="contact">
        <Stack
          as={Box}
          spacing={{ base: 8, md: 14 }}
          pb={{ base: 20, md: 36 }}
        >
          <Stack align="center" direction="row" p={4}>
            <HStack mx={4}>
              <Text color={`${color}.400`} fontWeight={800}>
                06
              </Text>
              <Text fontWeight={800}>Contact</Text>
            </HStack>
            <Divider orientation="horizontal" />
          </Stack>
          <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
          <Heading fontSize={"3xl"}>تواصل معي</Heading>
            <Heading fontSize={"3xl"}>Let's stay in touch!</Heading>
            <Text color={"gray.600"} fontSize={"xl"} px={4}>
            alarefabushaala@gmail.com
            </Text>
            <Center>
              <HStack pt={4} spacing={4}>
                <a href="https://linkedin.com/in/alaref-abushaala" target="_blank" rel="noreferrer"><FaLinkedin size={28}/></a>
                <a href="https://github.com/alaref-codes" target="_blank" rel="noreferrer"><FaGithub size={28} /></a>
              </HStack>
            </Center>
          </Stack>
        </Stack>
      </Container>
    </>
  );
}

