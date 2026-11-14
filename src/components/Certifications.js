import {
  Badge,
  Box,
  Button,
  Card,
  CardBody,
  Container,
  Divider,
  Flex,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

const certifications = [
  {
    name: "CompTIA Data+",
    issuer: "CompTIA",
    image: "/assets/Data+-png.png",
    issued: "October 5, 2026",
    expires: "October 5, 2029",
    credentialUrl:
      "https://www.credly.com/badges/2d3caff8-5018-4f6e-85de-053e71431217/public_url",
    description:
      "Demonstrates the ability to drive data-informed decisions through data mining, analysis, visualization, governance, and quality practices.",
  },
];

export default function Certifications({ color }) {
  return (
    <Container maxW={"3xl"} id="certifications">
      <Stack
        as={Box}
        spacing={{ base: 8, md: 14 }}
        pb={{ base: 20, md: 36 }}
      >
        <Stack align="center" direction="row" px={4}>
          <HStack mx={4}>
            <Text color={`${color}.400`} fontWeight={800}>
              03
            </Text>
            <Text fontWeight={800}>Certifications</Text>
          </HStack>
          <Divider orientation="horizontal" />
        </Stack>

        <Stack px={4} spacing={4}>
          {certifications.map((certification) => (
            <Card key={certification.name} size="sm" variant="outline">
              <CardBody>
                <Flex
                  align={{ base: "flex-start", md: "center" }}
                  direction={{ base: "column", md: "row" }}
                  gap={5}
                >
                  <Image
                    alt={`${certification.name} certification badge`}
                    boxSize={{ base: 28, md: 32 }}
                    objectFit="contain"
                    src={certification.image}
                  />

                  <Stack align="flex-start" spacing={2}>
                    <Badge colorScheme={color}>Professional Certification</Badge>
                    <Heading size="md">{certification.name}</Heading>
                    <Text color="gray.500" fontWeight={600}>
                      Issued by {certification.issuer}
                    </Text>
                    <Text>{certification.description}</Text>
                    <HStack
                      align="flex-start"
                      flexWrap="wrap"
                      spacing={{ base: 3, md: 6 }}
                    >
                      <Text fontSize="sm">
                        <Text as="span" fontWeight={700}>
                          Issued:
                        </Text>{" "}
                        {certification.issued}
                      </Text>
                      <Text fontSize="sm">
                        <Text as="span" fontWeight={700}>
                          Expires:
                        </Text>{" "}
                        {certification.expires}
                      </Text>
                    </HStack>
                    <Button
                      as="a"
                      colorScheme={color}
                      href={certification.credentialUrl}
                      rel="noreferrer"
                      rightIcon={<ExternalLinkIcon />}
                      size="sm"
                      target="_blank"
                      variant="outline"
                    >
                      Verify on Credly
                    </Button>
                  </Stack>
                </Flex>
              </CardBody>
            </Card>
          ))}
        </Stack>
      </Stack>
    </Container>
  );
}
