import React from "react";
import { Flex, Box, Heading, Text, Spacer, Image } from "@chakra-ui/react";
import heroImage from "../assets/hero-image.svg";

function Hero() {
  return (
    <Flex
      px={{ base: "1em", md: "10em" }}
      pt={{ base: "3em", md: "8em" }}
      mt={{ base: "2em", md: "1em" }}
      flexDir={{ base: "column", md: "row" }}
      alignItems={{ base: "center", md: "" }}
    >
      <Box w={{ base: "", md: "55%" }}>
        <Heading
          as={"h1"}
          fontSize={{ base: "35px", md: "40px" }}
          mb={"1em"}
          color={"#000f08"}
          fontFamily={"Metropolis-SemiBold"}
        >
          Leading the way in people, process and technology consulting for
          transformative excellence
        </Heading>
        <Text
          color={"#525C65"}
          lineHeight={"27px"}
          fontFamily={"AvenirNextLTPro-Regular"}
        >
          Our organization aspires to be the industry leader in delivering
          high-quality digital transformation services, that empower
          organizations in optimizing their people, refining their processes,
          and harnessing the full potential of cutting-edge technology. We are
          committed to providing a white-glove approach to every detail as well
          as shaping a future where businesses thrive through our expertise and
          unwavering dedication to excellence.
        </Text>
      </Box>
      <Spacer />
      <Box w={{ base: "70%", md: "unset" }} mt={{ base: "3em", md: "" }}>
        <Image src={heroImage} w={"100%"} />
      </Box>
    </Flex>
  );
}

export default Hero;
