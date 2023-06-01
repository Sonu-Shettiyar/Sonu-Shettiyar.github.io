import { Box, Center, Grid, Heading } from "@chakra-ui/react";
import React from "react";
import SkillItem from "../components/Skills/SkillItem";
import javascript_logo from "../images/javascript_logo.png";
import html_logo from "../images/html_logo.png";
import git_logo from "../images/git_logo.png";
import react_logo from "../images/react_logo.png";
import node_logo from "../images/node_logo.png";
import next_logo from "../images/next_logo.png";
import typescript_logo from "../images/typescript_logo.png";
import redux_logo from "../images/redux_logo.png";
import mongobd_logo from "../images/mongobd_logo.png";

const Skills = () => {
  let arr = [
    { src: javascript_logo, name: "Javascript" },
    { src: html_logo, name: "HTML" },
    { src: git_logo, name: "Git" },
    { src: react_logo, name: "React JS" },
    { src: node_logo, name: "Node" },
    { src: next_logo, name: "Next JS" },
    { src: redux_logo, name: "Redux" },
    { src: typescript_logo, name: "TypeScript" },
    { src: mongobd_logo, name: "Mongo DB" },
  ];
  return (
    <Box id="skills">
      <Center mb={{ base: "20px", md: "40px" }}>
        <Heading textDecor={"underline"} 
          fontFamily="'Poppins', sans-serif"
        
        >Skills</Heading>
      </Center>
      <Box minHeight={{ base: "70vh", md: "100vh" }}>
        <Center>
          <Grid
            templateColumns={{
              base: "repeat(2, 1fr)",
              sm: "repeat(3, 1fr)",
              md: "repeat(3, 1fr)",
              lg: "repeat(3, 1fr)",
              xl: "repeat(3, 1fr)",
            }}
            gap={{ base: 4, md: 6 }}
          >
            {arr.map((item, i) => {
              return <SkillItem key={i} logo={item} />;
            })}
          </Grid>
        </Center>
      </Box>
    </Box>
  );
};

export default Skills;
