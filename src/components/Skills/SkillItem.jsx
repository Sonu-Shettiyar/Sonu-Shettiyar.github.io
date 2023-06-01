import { Box, Image, Text, useColorMode } from "@chakra-ui/react";
import React from "react";

const SkillItem = ({ logo }) => {
  const { colorMode } = useColorMode();

  return (
    <Box
      shadow="#48BB78"
      boxShadow='md'
      bgColor={"#141515"}
      _hover={{
        boxShadow:" #09ff00 2px 1px 1px 0px,#43f054 1px 5px 5px 6px",
      }}
      h={{
        base: "auto",
        md: "120px",
        lg: "120px",
        xl: "150px",
        "2xl": "170px",
      }}
      w={{
        base: "100px",
        md: "120px",
        lg: "150px",
        xl: "300px",
        "2xl": "300px",
      }}
      borderRadius={"10px"}
      className="skills-card"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      fontFamily="'Poppins', sans-serif"

   >
      <Image
        src={logo.src}
        objectFit={"contain"}
        w={{
          base: "80px",
          md: "80px",
          lg: "80px",
          xl: "100px",
          "2xl": "120px",
        }}
        m={"auto"}
        p={"5"}

        className="skills-card-img"
      />
      <Text
        className="skills-card-name"
        color={colorMode === "light" ? "green.400" : "white"}
        fontWeight="semibold"
        textAlign="center"
        mt={2}
        fontSize={{ base: "10px", md: "18px" }}
        textTransform="uppercase"
        pb={5}
      >
        {logo.name}
      </Text>
    </Box>
  );
};

export default SkillItem;
