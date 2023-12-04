import React, { useState } from "react";
import { useMediaQuery } from "@chakra-ui/react";
import logo from "../assets/nav-logo.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  Flex,
  Image,
  Spacer,
  Link,
  Button,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  VStack,
} from "@chakra-ui/react";

function Navigation({
  handleShowContactModal,
  handleShowConsultantModal,
  isOpen,
  onClose,
  onOpen,
  showContactModal,
  showCareerModal,
  showConsultantModal,
  handleShowCareerModal,
}) {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");
  return (
    <Flex
      bgColor={"#f4f8fb"}
      // bottom={0}
      pt={{ md: "6" }}
      px={{ base: "", md: "10em" }}
      alignItems={"center"}
      width={"100%"}
      position={"fixed"}
      top={0}
      zIndex={1000}
      boxShadow={"lg"}
    >
      <Flex
        alignItems={"center"}
        justifyContent={"space-evenly"}
        flexGrow={"2"}
        px={{ base: "1em", md: "3em" }}
        py={"2.5"}
        borderRadius={{ base: "", md: "50px" }}
        boxShadow={"sm"}
        bgColor={"white"}
      >
        <Image src={logo} w={{ base: "30%", md: "unset" }} />
        {isLargerThan768 ? (
          <>
            <Spacer />
            <Flex
              gap={"3em"}
              fontFamily={"AvenirNextLTPro-Regular"}
              color={"#000f08"}
            >
              <Link
                _hover={{ textDecoration: "none" }}
                data-target="services"
                onClick={(e) => {
                  e.preventDefault();
                  onClose();
                  const target = document.querySelector(
                    `[id="${e.target.dataset.target}"]`
                  );
                  const offset = -70; // change this value to adjust the scroll position
                  setTimeout(() => {
                    window.scrollTo({
                      top: target.offsetTop + offset,
                      behavior: "smooth",
                    });
                  }, 200);
                }}
              >
                Our Services
              </Link>
              <Link
                _hover={{ textDecoration: "none" }}
                data-target="about"
                onClick={(e) => {
                  e.preventDefault();
                  onClose();
                  const target = document.querySelector(
                    `[id="${e.target.dataset.target}"]`
                  );
                  const offset = 20; // change this value to adjust the scroll position
                  setTimeout(() => {
                    window.scrollTo({
                      top: target.offsetTop + offset,
                      behavior: "smooth",
                    });
                  }, 200);
                }}
              >
                About Us
              </Link>

              <Link
                _hover={{ textDecoration: "none" }}
                onClick={handleShowCareerModal}
              >
                Careers
              </Link>
              <Link
                _hover={{ textDecoration: "none" }}
                onClick={handleShowConsultantModal}
              >
                Need a Consultant
              </Link>
            </Flex>
            <Spacer />
            <Button
              bg={"#000f08"}
              color={"#fff"}
              borderRadius={"30px"}
              paddingY={"25px"}
              paddingX={"35px"}
              onClick={handleShowContactModal}
              _hover={{ backgroundColor: "#31249F" }}
            >
              Contact Us
            </Button>
          </>
        ) : (
          <>
            <Spacer />
            <IconButton
              aria-label="Navigation Menu"
              icon={<GiHamburgerMenu />}
              onClick={onOpen}
              variant="outline"
              size="sm"
              border={"1px solid #31249F"}
            />
            {!showContactModal && !showCareerModal && !showConsultantModal && (
              <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
                <DrawerOverlay />
                <DrawerContent>
                  <DrawerCloseButton />
                  <DrawerHeader borderBottom={"1px solid #000F08"}>
                    Menu
                  </DrawerHeader>
                  <DrawerBody pt={"2em"}>
                    <VStack spacing="2em" alignItems={"left"}>
                      <Link
                        data-target="services"
                        onClick={(e) => {
                          e.preventDefault();
                          onClose();
                          const target = document.querySelector(
                            `[id="${e.target.dataset.target}"]`
                          );
                          const offset = -70; // change this value to adjust the scroll position
                          setTimeout(() => {
                            window.scrollTo({
                              top: target.offsetTop + offset,
                              behavior: "smooth",
                            });
                          }, 200);
                        }}
                      >
                        Our Services
                      </Link>
                      <Link
                        data-target="about"
                        onClick={(e) => {
                          e.preventDefault();
                          onClose();
                          const target = document.querySelector(
                            `[id="${e.target.dataset.target}"]`
                          );
                          const offset = 20; // change this value to adjust the scroll position
                          setTimeout(() => {
                            window.scrollTo({
                              top: target.offsetTop + offset,
                              behavior: "smooth",
                            });
                          }, 200);
                        }}
                      >
                        About Us
                      </Link>

                      <Link onClick={handleShowCareerModal}>Careers</Link>
                      <Link onClick={handleShowConsultantModal}>
                        Need a Contractor
                      </Link>
                      <Button
                        bg={"#000f08"}
                        color={"#fff"}
                        borderRadius={"10px"}
                        paddingY={"25px"}
                        paddingX={"35px"}
                        mt={"3em"}
                        onClick={handleShowContactModal}
                      >
                        Contact Us
                      </Button>
                    </VStack>
                  </DrawerBody>
                </DrawerContent>
              </Drawer>
            )}
          </>
        )}
      </Flex>
    </Flex>
  );
}

export default Navigation;
