import React from "react";
import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Hide,
  LinkBox,
  Show,
  Text,
  Tooltip,
  Link,
  useColorMode,
} from "@chakra-ui/react";
import * as Scroll from "react-scroll"
import { RxGithubLogo } from "react-icons/rx";
import { BsLinkedin } from "react-icons/bs";
import { TfiDownload, TfiEmail } from "react-icons/tfi";
import { FiPhoneCall } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import Typical from "react-typical";
import { ScrollLink } from "react-scroll";

function Home() {
  const { colorMode } = useColorMode();
  const AnimatedFlex = motion(Flex);

  return (
    <Center
      pl={{
        base: "10",
        sm: "15",
        md: "20",
        lg: "20",
        xl: "20",
        "2xl": "20",
      }}
      pr={{
        base: "10",
        sm: "15",
        md: "20",
        lg: "20",
        xl: "20",
        "2xl": "20",
      }}
      h={{
        base: "100vh",
        sm: "100vh",
        md: "100vh",
        lg: "100vh",
        xl: "100vh",
        "2xl": "100vh",
      }}
      id="home"

    >
      <Flex justifyContent={"space-evenly"} w="100%">
        <Box>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Heading
              id="user-detail-name"
              mb={"20px"}
              fontSize={{
                base: "30px",
                sm: "30px",
                md: "40px",
                lg: "60px",
                xl: "64px",
                "2xl": "72px",
              }}
              // fontFamily={"'Satisfy',popins"}
              fontFamily={"'Poppins', sans-serif"}
            >
              Hello,
              <Typical
                steps={["I am Sonu Shettiyar", 2000]}
                loop={1}
                wrapper="p"
              />
             
              
            </Heading>
          </motion.div>

          <Heading
            mb={"20px"}
            fontFamily="'Poppins', sans-serif"

            fontSize={{
              sm: "20px",
              md: "25px",
              lg: "30px",
            }}
          >
            Full Stack MERN Developer
          </Heading>
          <Text
            id="user-detail-intro"
            w={{
              base: "80%",
              sm: "80%",
              md: "55%",
              lg: "55%",
              xl: "55%",
              "2xl": "55%",
            }}
          fontFamily="'Poppins', sans-serif"

          >
  Having good knowledge of MongoDB, Express, React, Node.js, JavaScript, HTML, CSS etc.
   Passionate about learning new technologies and aiming to create world-class web applications while facilitating organizations in achieving ambitious goals.


          </Text>
          <Hide below="md">
            <AnimatedFlex
              w={"300px"}
              justifyContent={"space-around"}
              mt={"10px"}
              mb={"20px"}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Tooltip hasArrow label="Github" bg="gray.300" color="black">
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                >
                  <NavLink
                    to={"https://github.com/Sonu-Shettiyar"}
                    target={"_blank"}
                  >
                    <Box id="contact-github">
                      <RxGithubLogo size="50px" border-radius="50%" />
                    </Box>
                  </NavLink>
                </motion.div>
              </Tooltip>
              <Tooltip hasArrow label="LinkedIn" bg="gray.300" color="black">
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                >
                  <NavLink
                    to={"https://www.linkedin.com/in/sonu-shettiyar-071965228/"}
                    target={"_blank"}
                  >
                    <Box id="contact-linkedin">
                      <BsLinkedin size="50px" />
                    </Box>
                  </NavLink>
                </motion.div>
              </Tooltip>
              <Tooltip hasArrow label="Contact" bg="gray.300" color="black">
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                >

<Scroll.Link
          activeClass="active"
          to="contact"
          spy={true}
          offset={-100}
         
        >

                  <Box 
                  // id="contact-phone"
                   onClick={()=>{
                  window.location.href="tel:+918793935129";
                }}>
                    <FiPhoneCall size="50px" />
                  </Box>
        </Scroll.Link>

                </motion.div>
              </Tooltip>
              <Tooltip hasArrow label="Email" bg="gray.300" color="black">
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                >
            

                  <Box
                    // id="contact-email"
                    onClick={() => {
                      window.location.href =
                        "mailto:sonushettiyar9393@gmail.com";
                    }}
                  >
                    <TfiEmail size="50px" />
                  </Box>

                </motion.div>
              </Tooltip>
            </AnimatedFlex>
          </Hide>
          <Show below="md">
            <Flex
              w={"150px"}
              justifyContent={"space-around"}
              mt={"10px"}
              mb={"20px"}
            >
              <Tooltip hasArrow label="Github" bg="gray.300" color="black">
                <NavLink to={"https://github.com/Sonu-Shettiyar"} target={"_blank"}>
                  <Box id="contact-github">
                    <RxGithubLogo size="20px" border-radius="50%" />
                  </Box>
                </NavLink>
              </Tooltip>
              <Tooltip hasArrow label="LinkedIn" bg="gray.300" color="black">
                <NavLink
                  to={"https://www.linkedin.com/in/sonu-shettiyar-071965228/"}
                  target={"_blank"}
                >
                  <Box id="contact-linkedin">
                    <BsLinkedin size="20px" />
                  </Box>
                </NavLink>
              </Tooltip>



              <Tooltip hasArrow label="Contact" bg="gray.300" color="black">
                <Box
                //  id="contact-phone" 
                //  onClick={()=>{
                //   window.location.href =
                //   "tel:+918793935129";
                // }}
                >

<Link
                  href="tel:+918793935129"
                  fontWeight="bold"
                  ml="2"
                  _hover={{ color: "blue.500" }}
                >
                  <FiPhoneCall size="20px" />
                </Link>
                </Box>
              </Tooltip>





              <Tooltip hasArrow label="Email" bg="gray.300" color="black">
                <Box
                  // id="contact-email"
                  onClick={() => {
                    window.location.href = "mailto:sonushettiyar9393@gmail.com";
                  }}
                >
                  <TfiEmail size="20px" />
                </Box>
              </Tooltip>
            </Flex>
          </Show>
          <a
            id="resume-link-2"
            href={"Sonu_Shettiyar_Resume.pdf"}
            download="Sonu_Shettiyar_Resume.pdf"
            rel="noreferrer"
            target="_blank"
          >
            <Button
              id="resume-button-2"
              download="Sonu_Shettiyar_Resume.pdf"
              onClick={() => {
                window.open(
                  "https://drive.google.com/file/d/1dWHHUH6uZrnvy2odtlG4mPY6iEu-XvMX/view",
                  "_blank"
                );
              }}
              _hover={{
                color: colorMode === "light" ? "black" : "white",
                cursor: "pointer",
              }}
              bgGradient={
                colorMode === "light"
                  ? "linear(to-l,#000000 100%, #40ba79 100%)"
                  : "none"
              }
              color={colorMode === "light" ? "  #48BB78" : "black"}
              bgColor={colorMode === "dark" ? "#48BB78" : "none"}
              borderRadius={"10px"}
              fontSize={["xs", "sm", "lg", "xl"]}
          fontFamily="'Poppins', sans-serif"

            >
              Resume
              <Box as={"span"} ml={"1"} fontSize={["xs", "sm", "lg", "xl"]}>
                {<TfiDownload />}
              </Box>
            </Button>
          </a>
        </Box>
      </Flex>
    </Center>
  );
}

export default Home;
