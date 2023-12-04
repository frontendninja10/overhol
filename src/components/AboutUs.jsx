import React from "react";
import {
  Flex,
  Heading,
  Text,
  Grid,
  GridItem,
  Image,
  Box,
} from "@chakra-ui/react";
import ceridian from "../assets/ceridian-logo.svg";
import dhl from "../assets/dhl.svg";
import cn from "../assets/CN.svg";
import timHortons from "../assets/tim-hortons.svg";
import recipe from "../assets/recipe.svg";
import ey from "../assets/EY.svg";
import deloitte from "../assets/deloitte.svg";
import skip from "../assets/skip.svg";
import hydroOne from "../assets/hydro-one.svg";
import walmart from "../assets/walmart.svg";
import lululemeon from "../assets/lululemon.svg";
import rbc from "../assets/RBC.svg";
import aboutUsImg from "../assets/about-us.png";

export default function AboutUs() {
  return (
    <Flex
      px={{ base: "1em", md: "10em" }}
      pb={"50px"}
      flexDir={"column"}
      id="about"
    >
      <Flex
        gap={{ base: "100px", md: "150px" }}
        flexDir={{ base: "column", md: "row" }}
        alignItems={{ base: "unset", md: "center" }}
      >
        <Box>
          <Heading
            as={"h2"}
            fontFamily={"Metropolis-SemiBold"}
            fontSize={"30px"}
            pb={"40px"}
            color={"#31249F"}
            // pt={"400px"}
          >
            About us?
          </Heading>
          <Text>
            We are a team of professionals with almost 2 decades of combined
            experience providing advisory services, implementing business
            solutions, and digitally overhauling existing technologies,
            reshaping businesses and helping them and their people get to the
            next level.
          </Text>
        </Box>
        <Image src={aboutUsImg} />
      </Flex>
      <Text mt={"50px"} mb={"60px"}>
        Our consultants have extensive experience helping clients achieve their
        transformation objectives. Over the course of their careers, they have
        partnered with;
      </Text>
      <Grid
        gridTemplateColumns={{
          base: "repeat(2, 1fr)",
          md: "repeat(6, 1fr)",
        }}
        gridRowGap={"40px"}
        gridColumnGap={"70px"}
        w="100%"
        alignItems={"center"}
        justifyItems={{ base: "center", md: "" }}
      >
        <GridItem>
          <Image src={dhl} />
        </GridItem>
        <GridItem>
          <Image src={cn} />
        </GridItem>
        <GridItem>
          <Image src={timHortons} />
        </GridItem>
        <GridItem>
          <Image src={ceridian} />
        </GridItem>
        <GridItem>
          <Image src={recipe} />
        </GridItem>
        <GridItem>
          <Image src={ey} />
        </GridItem>
        <GridItem>
          <Image src={deloitte} />
        </GridItem>
        <GridItem>
          <Image src={skip} />
        </GridItem>
        <GridItem>
          <Image src={hydroOne} />
        </GridItem>
        <GridItem>
          <Image src={walmart} />
        </GridItem>
        <GridItem>
          <Image src={lululemeon} />
        </GridItem>
        <GridItem>
          <Image src={rbc} />
        </GridItem>
      </Grid>
    </Flex>
  );
}
