import { Box, Button, Flex, Hide, color, useColorMode } from "@chakra-ui/react";
import { TfiDownload } from "react-icons/tfi";
import ColorModeToggle from "../Darkmode";
// eslint-disable-next-line no-unused-vars
import styes from "./Navbar.css";
import * as Scroll from "react-scroll";
function DefaultNavbar() {
  const { colorMode } = useColorMode();
  return (
    <Hide breakpoint="(max-width: 770px)">
      <Flex
        justifyContent={"space-evenly"}
        alignItems={"center"}
        w={{
          md: "48em",
          lg: "58em",
          xl: "68em",
          "2xl": "60%",
        }}
        id="nav-menu"
      >
        <Scroll.Link
          to="home"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="nav-link home hover-underline-animation"
        >
          <Button
            _hover={{
              cursor: "pointer",
              color:  "white",

            }}
            bgColor={colorMode === "light" ? "black" : "green.400"}
            color={colorMode==="light"?"green.400":"black"}
            fontSize={["xs", "sm", "lg", "xl"]}
          >
            Home
          </Button>
        </Scroll.Link>
        <Scroll.Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="nav-link about hover-underline-animation"
        >
          <Button
            _hover={{
              color:  "white",

              cursor: "pointer",
            }}
            bgColor={colorMode === "light" ? "black" : "green.400"}
            color={colorMode==="light"?"green.400":"black"}
            fontSize={["xs", "sm", "lg", "xl"]}
          >
            About
          </Button>
        </Scroll.Link>
        <Scroll.Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="nav-link skills hover-underline-animation"
        >
          <Button
            _hover={{
              color:  "white",
              
              cursor: "pointer",
            }}
            bgColor={colorMode === "light" ? "black" : "green.400"}
            color={colorMode==="light"?"green.400":"black"}
            fontSize={["xs", "sm", "lg", "xl"]}
          >
            Skills
          </Button>
        </Scroll.Link>
        {/* Projects */}
        <Scroll.Link
          activeClass="active"
          to="projects"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="nav-link projects hover-underline-animation"
        >
          <Button
            _hover={{
              color:  "white",

              cursor: "pointer",
            }}
            bgColor={colorMode === "light" ? "black" : "green.400"}
            color={colorMode==="light"?"green.400":"black"}
            fontSize={["xs", "sm", "lg", "xl"]}
          >
            Projects
          </Button>
        </Scroll.Link>
        {/* Contact */}
        <Scroll.Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="nav-link contact hover-underline-animation"
        >
          <Button
            _hover={{
              color:  "white",
              cursor: "pointer",
            }}
            bgColor={colorMode === "light" ? "black" : "green.400"}
            color={colorMode==="light"?"green.400":"black"}
            fontSize={["xs", "sm", "lg", "xl"]}
          >
            Contact
          </Button>
        </Scroll.Link>
        {/* Resume */}
        <a
          id="resume-link-1"
          className="nav-link resume"
          href={"Sonu_Shettiyar_Resume.pdf"}
          // download="Sonu_Shettiyar_Resume.pdf"
          onClick={() => {
            window.open(
              "https://drive.google.com/file/d/1dWHHUH6uZrnvy2odtlG4mPY6iEu-XvMX/view"
            );
          }}
        >
          <Button
            id="resume-button-1"
            download="Sonu_Shettiyar_Resume.pdf"
            border ={colorMode ==="light"?"none":"1px solid #48BB78"}
            _hover={{
              color: colorMode === "light" ? "#48BB78":"black",
              cursor: "pointer",
              background:colorMode==="light"?"black":"#48BB78"
            }}
            bgGradient={
              colorMode === "light"
                ? 
                "none":"linear(to-l,#000000 100%, #40ba79 100%)"
                
            }
            color={colorMode === "light" ? "black":"green.400" }
            bgColor={colorMode === "dark" ? "black" : "green.400"}
            borderRadius={"10px"}
            fontSize={["xs", "sm", "lg", "xl"]}
          >
            Resume
            <Box as={"span"} ml={"1"} fontSize={["xs", "sm", "lg", "xl"]}>
              {<TfiDownload />}
            </Box>
          </Button>
        </a>
        <ColorModeToggle />
      </Flex>
    </Hide>
  );
}
export default DefaultNavbar;
