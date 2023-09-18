import {
    Divider,
    Stack,
    Text,
    Container,
    Box,
    HStack,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Flex,
    Badge,
    Image,
    List,
    ListItem,
    ListIcon,
    Button,
    ButtonGroup,
    Center,
  } from "@chakra-ui/react";
  import { ChevronRightIcon } from "@chakra-ui/icons";
  import { Fade } from "react-reveal";
  import { useState, useEffect } from "react";
  import SkillsArray from "./SkillsArray";
  import TagsArray from "./TagsArray";
  
  export default function Skills({ color }) {
    const skills = SkillsArray();
    const options = TagsArray("ExperienceTags");
    const [selected, setSelected] = useState("");
  
    useEffect(() => {
      if (options.length > 0) {
        setSelected(options[0].value);
      }
    }, [options]);
    
    const handleSelected = (value) => {
      setSelected(value);
    };
  
    return (
      <>
        <Container maxW={"3xl"} id="skills">
          <Stack
            as={Box}
            spacing={{ base: 8, md: 14 }}
            pb={{ base: 20, md: 36 }}
          >
            <Stack align="center" direction="row" px={4}>
              <HStack mx={4}>
                <Text color={`${color}.400`} fontWeight={800}>
                  02
                </Text>
                <Text fontWeight={800}>skills</Text>
              </HStack>
              <Divider orientation="horizontal" />
            </Stack>  
            <Stack px={4} spacing={4}>
              {skills
                .filter((exp) => exp.tags.includes(selected))
                .map((exp) => (
                  <Fade bottom>
                    <Card key={exp.company} size="sm">
                      <CardHeader>
                        <Flex justifyContent="space-between">
                          <HStack>
                            <Image src={exp.image} h={50} />
                            <Box px={2} align="left">
                              <Text fontWeight={600}>{exp.company}</Text>
                              <Text>{exp.position}</Text>
                            </Box>
                          </HStack>
                          <Text px={2} fontWeight={300}>
                            {exp.duration}
                          </Text>
                        </Flex>
                      </CardHeader>
                      <CardBody>
                        <Flex>
                          <List align="left" spacing={3}>
                            {exp.listItems.map((item, index) => (
                              <ListItem key={index}>
                                <ListIcon
                                  boxSize={6}
                                  as={ChevronRightIcon}
                                  color={`${color}.500`}
                                />
                                {item}
                              </ListItem>
                            ))}
                          </List>
                        </Flex>
                      </CardBody>
                      <CardFooter>
                        <HStack spacing={2}>
                          {exp.badges.map((badge) => (
                            <Badge
                              key={badge.name}
                              colorScheme={badge.colorScheme}
                            >
                              {badge.name}
                            </Badge>
                          ))}
                        </HStack>
                      </CardFooter>
                    </Card>
                  </Fade>
                ))}
            </Stack>
          </Stack>
        </Container>
      </>
    );
  }
  