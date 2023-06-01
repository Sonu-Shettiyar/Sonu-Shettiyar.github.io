import { Box, Flex, Image, useColorMode } from "@chakra-ui/react";
import React from "react";
import DefaultNavbar from "./Navbar/DefaultNavbar";
import MobileNavbar from "./Navbar/MobileNavbar";
import darkLogo from "../images/protfolio-icon2.png";
import lightLogo from "../images/protfolio-icon.png";
import { NavLink } from "react-router-dom";
import {RxDividerVertical} from "react-icons/rx"

function Navbar() {
  const { colorMode } = useColorMode();

  return (
    <Box
      zIndex={5}
      position={"sticky"}
      top={0}
    background={"black"}
    fontFamily="'Poppins', sans-serif"

    >
      <Flex
        h={"70px"}
        justifyContent={"space-between"}
        pl={["2", "2", "10"]}
        alignItems={"center"}
      >
        <NavLink to={"https://sonu-shettiyar.github.io/"}>
       
          
          <h1 
          style={{fontSize:"25px",
          display:"flex",
          alignItems:"center",
          fontFamily:"'Dancing Script', cursive",
          color:"#48BB78",
          
          }}><RxDividerVertical/>

            Sonu Shettiyar            <RxDividerVertical/>
            </h1>
        </NavLink>

        <DefaultNavbar />
        <MobileNavbar />
      </Flex>
    </Box>
  );
}

export default Navbar;
