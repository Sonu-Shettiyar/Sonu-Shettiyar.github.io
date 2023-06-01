import {
  Box,
  Button,
  Center,
  Heading,
  Image,
  Stack,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";
import profile from "../images/new_profile.jpg";
import * as Scroll from "react-scroll";

const About = () => {
  const { colorMode } = useColorMode();

  return (
    <Box id="about" className="about section" py={{ base: "10vh", md: "20vh" }}>
      <Center mb={8}>
        <Heading textDecor={"underline"} fontSize={{ base: "2xl", md: "4xl" }}
          fontFamily="'Poppins', sans-serif"
        
        >About</Heading>
      </Center>
      <Stack
        direction={{ base: "column", md: "row" }}
        spacing={{ base: 8, md: 16 }}
        justify="center"
        align="center"
        mb={{ base: 16, md: 32 }}
      >
        <Image
          src={profile}
          alt="profile"
          h={{ base: "200px", md: "300px" }}
          w={{ base: "200px", md: "300px" }}
          objectFit="cover"
          border={"3px solid #2d452d24"}
          className="home-img"
        />
        <Box
          w={{ base: "80%", md: "50%" }}
          textAlign={{ base: "center", md: "left" }}
        >
          <Text
            fontSize={{ base: "lg", md: "2xl" }}
            mb={8}
            id={"user-detail-intro"}
          fontFamily="'Poppins', sans-serif"

          >
            An enthusiastic Full-stack Developer, skilled in React.js.
            Developing websites using MongoDB, Express.js, React, Node.js, JavaScript.
            An optimistic man, always ready to take a critical decision, ready
            to work under pressure. Always ready to try some new things for
            optimization.
          </Text>
          <Scroll.Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            <Button
              w={{ base: "100%", md: "auto" }}
              size="lg"
              p="8"
              borderRadius="10px"
              fontSize={{ base: "sm", md: "lg" }}
              bgGradient={
                colorMode === "light"
                  ? "linear(to-l,#000000 100%, #40ba79 100%)"
                  : "none"
              }
              color={colorMode === "light" ? "green.400" : "black"}
              bgColor={colorMode === "dark" ? "#48BB78" : "none"}
              _hover={{
                color: colorMode === "light" ? "white" : "black",
                cursor: "pointer",
              }}
          fontFamily="'Poppins', sans-serif"

            >
              Contact
            </Button>
          </Scroll.Link>
        </Box>
      </Stack>
    </Box>
  );
};

export default About;
