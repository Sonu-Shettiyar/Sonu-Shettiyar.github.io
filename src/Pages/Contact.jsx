import { useState } from "react";
import {
  Box,
  Flex,
  Heading,
  Input,
  Textarea,
  Button,
  useToast,
  Text,
  Icon,
  useColorMode,
  FormControl,
  FormLabel,
  Link,
  Show,
  color,
} from "@chakra-ui/react";
import { HiOutlineMail } from "react-icons/hi";
import { AiFillGithub, AiFillLinkedin, AiTwotoneMail } from "react-icons/ai";
import { IoMdCall } from "react-icons/io";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const { colorMode } = useColorMode();
  const toast = useToast();
  const [load, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: name,
          to_name: "Sonu Shettiyar",
          from_email: email,
          to_email: "sonushettiyar9393@gmail.com",
          message: message,
        },
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          toast.closeAll();
          toast({
            title: "Thank you for Contacting",
            description: "I will get back to you as soon as possible.",
            status: "success",
            duration: 5000,
            isClosable: true,
          });
        },
        (error) => {
          toast.closeAll();
          setLoading(false);
          toast({
            title: "Error!",
            description: "Oops, something went wrong. Please try again.",
            status: "error",
            duration: 5000,
            isClosable: true,
          });
        }
      );
  };

  return (
    <>
      <Box id="contact" py="24" 
          fontFamily="'Poppins', sans-serif"
      
      >
        <Heading textAlign="center" mb="8" textDecor={"underline"}
          fontFamily="'Poppins', sans-serif"
          >
         Contact Me
         {/* <h6 style={{fontSize:"12px",}}>Submit the form below to get in touch with me</h6> */}

        </Heading>
        <Flex maxW="800px" mx="auto" direction={{ base: "column", lg: "row" }}>
          <Show above="lg">
            <Box
              borderRadius={"10px"}
              background={colorMode === "light" ? "white" : "black"}
              boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px;"}
              bgColor={colorMode === "light" ?  "black":"white" }
              w={"100%"}
              mb={"30px"}
              p={"5"}
              flex="1"
              mr={{ md: "8" }}
              alignItems={"center"}
            >
              <form onSubmit={handleSubmit} style={{color:colorMode==="light"?"white":"black"}}>
                <FormControl isRequired>
                  <FormLabel >Name</FormLabel>
                  <Input
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    background={colorMode==="light"?"white":"black"}
                    color={colorMode === "light" ? "black" : "white"}
                    _focus={{
                      fontSize:"16px",
                      border:"none",
                      border:"1px solid #19ec11"

                    }}
                    onChange={(e) => setName(e.target.value)}
                  />
                </FormControl>
                <FormControl mt={4} isRequired>
                  <FormLabel>Email</FormLabel>
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    background={colorMode==="light"?"white":"black"}
                    color={colorMode === "light" ? "black" : "white"}

                    onChange={(e) => setEmail(e.target.value)}
                    _focus={{
                      fontSize:"16px",
                      border:"none",
                      border:"1px solid #19ec11"

                    }}
                  />
                </FormControl>
                <FormControl mt={4} isRequired>
                  <FormLabel>Message</FormLabel>
                  <Textarea
                    placeholder="Enter your message"
                    rows="6"
                    value={message}
                    _focus={{
                      fontSize:"16px",
                      border:"none",
                      border:"1px solid #19ec11"

                    }}
                    background={colorMode==="light"?"white":"black"}
                    color={colorMode === "light" ? "black" : "white"}

                    onChange={(e) => setMessage(e.target.value)}
                  />
                </FormControl>
                <Button
                  type="submit"
                  mt="8"
                  _hover={{
                    color: colorMode === "light" ? "white" : "black",
                    cursor: "pointer",
                  }}
                  bgGradient={
                    colorMode === "light"
                      ? "linear(to-l,#000000 100%, #40ba79 100%)"
                      : "none"
                  }
                  color={colorMode === "light" ? "green.400" : "black"}
                  bgColor={colorMode === "dark" ? "#48BB78" : "none"}
                  borderRadius={"10px"}
                  border={"1px solid #48BB78"}
                  fontSize={["xs", "sm", "lg", "xl"]}
                  isLoading={load}
                  leftIcon={<HiOutlineMail />}
                >
                  send
                </Button>
              </form>
            </Box>
          </Show>
          <Show below="lg">
            <Box
              borderRadius={"10px"}
              m={"auto"}
              w={"95%"}
              mb={"30px"}
              p={"5"}
              flex="1"
              mr={{ md: "8" }}
              background={colorMode === "light" ? "white" : "black"}
              boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px;"}
              bgColor={colorMode === "light" ?  "black":"green.400" }
              alignItems={"center"}
            >
              <form onSubmit={handleSubmit}>
                <FormControl isRequired>
                  <FormLabel>Name</FormLabel>
                  <Input
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    background={colorMode==="light"?"white":"black"}
                    color={colorMode === "light" ? "black" : "white"}

                    onChange={(e) => setName(e.target.value)}
                  />
                </FormControl>
                <FormControl mt={4} isRequired>
                  <FormLabel>Email</FormLabel>
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    background={colorMode==="light"?"white":"black"}
                    color={colorMode === "light" ? "black" : "white"}

                    onChange={(e) => setEmail(e.target.value)}
                  />
                </FormControl>
                <FormControl mt={4} isRequired>
                  <FormLabel>Message</FormLabel>
                  <Textarea
                    placeholder="Enter your message"
                    rows="6"
                    value={message}
                    background={colorMode==="light"?"white":"black"}
                    color={colorMode === "light" ? "black" : "white"}

                    onChange={(e) => setMessage(e.target.value)}
                  />
                </FormControl>
                <Button
                  type="submit"
                  mt="8"
                  _hover={{
                    color: colorMode === "light" ? "white" : "black",
                    cursor: "pointer",
                  }}
                  bgGradient={
                    colorMode === "light"
                      ? "linear(to-l,#43d75c 100%, #5ff252 100%)"
                      : "none"
                  }
                  color={colorMode === "light" ? "white" : "black"}
                  bgColor={colorMode === "dark" ? "#48BB78" : "none"}
                  borderRadius={"10px"}
                  isLoading={load}
                  border={"1px solid #48BB78"}
                  
                  leftIcon={<HiOutlineMail />}
                >
                  Send
                </Button>
              </form>
            </Box>
          </Show>
          <Box
            borderRadius={"10px"}
            background={colorMode === "light" ? "white" : "black"}
            boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px;"}
            w={{ base: "80%", lg: "fit-content" }}
            mb={"30px"}
            p={"5"}
            m={"auto"}
            overflow={"auto"}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.03 }}
            >
              <Heading size="md" mb="4" fontWeight="bold">
Info
              </Heading>
              <Flex alignItems="center">
                <Box as="span" mr="2">
                  <Icon as={AiTwotoneMail} boxSize={8} />
                </Box>
                <Link
                  href="mailto:sonushettiyar9393@gmail.com"
                  fontWeight="bold"
                  ml="2"
                   id="contact-email"
                  _hover={{ color: "blue.500" }}
                >
                  sonushettiyar9393@gmail.com
                </Link>
              </Flex>
              <Flex alignItems="center" mt="4">
                <Box as="span" mr="2">
                  <Icon as={AiFillGithub} boxSize={8} />
                </Box>
                <Link
                  href="https://github.com/Sonu-Shettiyar"
                  target="_blank"
                  rel="noopener noreferrer"
                  fontWeight="bold"
                  ml="2"
                  _hover={{ color: "blue.500" }}
                >
                  Sonu-Shettiyar
                </Link>
              </Flex>
              <Flex alignItems="center" mt="4">
                <Box as="span" mr="2">
                  <Icon as={AiFillLinkedin} boxSize={8} />
                </Box>
                <Link
                  href="https://www.linkedin.com/in/sonu-shettiyar-071965228/"
                  target="_blank"
                  rel="noopener noreferrer"
                  fontWeight="bold"
                  ml="2"
                  _hover={{ color: "blue.500" }}
                >
                sonu-shettiyar
                </Link>
              </Flex>
              <Flex alignItems="center" mt="4">
                <Box as="span" mr="2">
                  <Icon as={IoMdCall} boxSize={8} />
                </Box>
                <Link
                  href="tel:+918793935129"
                  fontWeight="bold"
                  id="contact-phone"
                  ml="2"
                  _hover={{ color: "blue.500" }}
                >
                  +91 8793935129
                </Link>
              </Flex>
            </motion.div>
          </Box>
        </Flex>
      </Box>
      <Box
        textAlign={"center"}
        bgColor={colorMode === "light" ? "black" : "black"}
        color={colorMode === "light" ? "green.400":"green.400"  }
        mt={{ base: 4, md: 0 }}
        h={"50px"}
        alignItems={"center"}
        display={"flex"}
        justifyContent={"center"}
      >
        <Text>&copy; All Rights Reserved.</Text>
      </Box>
    </>
  );
};

export default Contact;
