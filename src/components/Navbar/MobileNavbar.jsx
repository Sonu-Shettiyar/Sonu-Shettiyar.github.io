import {
  IconButton,
  Menu,
  MenuButton,
  Show,
  MenuList,
  MenuItem,
  VStack,
  Button,
  Box,
  useColorMode,
} from "@chakra-ui/react";
import { TfiDownload } from "react-icons/tfi";
import { HamburgerIcon } from "@chakra-ui/icons";
import * as Scroll from "react-scroll";

function MobileNavbar() {
  const { colorMode } = useColorMode();
  return (
    <Show below="md">
      <VStack>
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<HamburgerIcon />}
            variant="outline"
          />
          <MenuList>
            <MenuItem>
              <Scroll.Link
                to="home"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="nav-link home hover-underline-animation"
              >
                Home
              </Scroll.Link>
            </MenuItem>
            <MenuItem>
              <Scroll.Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="nav-link about hover-underline-animation"
              >
                Contact
              </Scroll.Link>
            </MenuItem>
            <MenuItem>
              <Scroll.Link
                activeClass="active"
                to="skills"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="nav-link skills hover-underline-animation"
              >
                Skills
              </Scroll.Link>
            </MenuItem>
            <MenuItem>
              <Scroll.Link
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="nav-link projects hover-underline-animation"
              >
                Projects
              </Scroll.Link>
            </MenuItem>
            <MenuItem>
              <a
                id="resume-link-1"
                className="nav-link resume"
                href={"Sonu_Shettiyar_Resume.pdf"}
                download="Sonu_Shettiyar_Resume.pdf"
                onClick={() => {
                  window.open(
                    "https://drive.google.com/file/d/1dWHHUH6uZrnvy2odtlG4mPY6iEu-XvMX/view"
                  );
                }}
              >
                <Button
                  id="resume-button-1"
                  download="Sonu_Shettiyar_Resume.pdf"
                  _hover={{
                    color: colorMode === "light" ? "black" : "white",
                    cursor: "pointer",
                  }}
                  bgGradient={
                    colorMode === "light"
                      ? "linear(to-l,#48BB78 100%, #48BB78 100%)"
                      : "none"
                  }
                  color={colorMode === "light" ? "white" : "black"}
                  bgColor={colorMode === "dark" ? "#48BB78" : "none"}
                  borderRadius={"10px"}
                  fontSize={["xs", "sm", "lg", "xl"]}
                >
                  Resume
                  <Box as={"span"} ml={"1"} fontSize={["xs", "sm", "lg", "xl"]}>
                    {<TfiDownload />}
                  </Box>
                </Button>
              </a>
            </MenuItem>
          </MenuList>
        </Menu>
      </VStack>
    </Show>
  );
}
export default MobileNavbar;
