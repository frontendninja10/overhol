import React from "react";
import { Flex, Box, Heading, Text, Link, Icon, Image } from "@chakra-ui/react";
import arrowPurple from "../assets/arrow-purple.svg";
import arrowYellow from "../assets/arrow-yellow.svg";

export default function ContactUs({
  handleShowContactModal,
  handleShowCareerModal,
}) {
  return (
    <Flex
      px={{ base: "1em", md: "10em" }}
      pt={"100px"}
      bgColor={"white"}
      justifyContent={"space-between"}
      flexDir={{ base: "column", md: "unset" }}
      gap={{ base: "2rem", md: "unset" }}
    >
      <Box
        bgColor={"#000F08"}
        width={{ base: "100%", md: "560px" }}
        height={{ base: "500px", md: "570px" }}
        borderRadius={"30px"}
        padding={"60px"}
        color={"#fff"}
      >
        <Heading
          as={"h2"}
          fontFamily={"Metropolis-SemiBold"}
          fontSize={"30px"}
          pb={"40px"}

          // pt={"400px"}
        >
          We're waiting for you!
        </Heading>
        <Text mb={{ base: "12em", md: "18em" }}>
          We are always excited to meet new clients. Please reach out and a team
          member will be available to answer all your questions
        </Text>
        <Link onClick={handleShowContactModal}>
          <Flex alignItems={"center"} gap={"0.5em"}>
            <Text fontFamily={"AvenirNextLTPro-Regular"}>Contact Us</Text>
            <Image src={arrowPurple} width={"2em"} />
          </Flex>
        </Link>
      </Box>
      <Box
        bgColor={"#F5F8FB"}
        width={{ base: "100%", md: "560px" }}
        height={{ base: "500px", md: "570px" }}
        borderRadius={"30px"}
        padding={"60px"}
        color={"#000F08"}
        boxShadow={"lg"}
      >
        <Heading
          as={"h2"}
          fontFamily={"Metropolis-SemiBold"}
          fontSize={"30px"}
          pb={"40px"}
          // pt={"400px"}
        >
          We're hiring
        </Heading>
        <Text mb={{ base: "15em", md: "19em" }}>
          Are you ready to take the next step in your career? We're looking for
          talanted individuals to join our team. Explore new{" "}
        </Text>
        <Link onClick={handleShowCareerModal}>
          <Flex alignItems={"center"} gap={"0.5em"}>
            <Text fontFamily={"AvenirNextLTPro-Regular"}>View openings</Text>
            <Image src={arrowYellow} width={"2em"} />
          </Flex>
        </Link>
      </Box>
    </Flex>
  );
}
