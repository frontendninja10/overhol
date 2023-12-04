import React from "react";
import { Flex, Heading, Text, Grid, GridItem, Image } from "@chakra-ui/react";

import ceridian from "../assets/ceridian-logo.svg";
import sap from "../assets/sap-logo.svg";
import serviceNow from "../assets/servicenow.svg";
import kronos from "../assets/kronos.svg";
import ukg from "../assets/UKG.svg";
import workday from "../assets/workday.svg";
import tableau from "../assets/tableau.svg";
import powerbi from "../assets/powerbi.svg";
import adp from "../assets/ADP.svg";
import oracle from "../assets/oracle.svg";
import blueprism from "../assets/blueprism.svg";
import atlassian from "../assets/atlassian.svg";

export default function Experience() {
  return (
    <Flex
      px={{ base: "1em", md: "10em" }}
      // h={"50vh"}
      mt={{ base: "750px", md: "300px" }}
      flexDir={"column"}
      backgroundColor={"#fff"}
      pb={"70px"}
    >
      <Heading
        as={"h2"}
        fontFamily={"Metropolis-SemiBold"}
        fontSize={"30px"}
        pb={"40px"}
        color={"#31249F"}
        marginTop={{ base: "20em", md: "15em" }}
      >
        Why choose us?
      </Heading>
      <Text mb={"50px"} fontFamily={"AvenirNextLTPro-Regular"}>
        Our team has experience implementing the following industry leading
        enterprise solutions and more
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
          <Image src={ceridian} />
        </GridItem>
        <GridItem>
          <Image src={sap} />
        </GridItem>
        <GridItem>
          <Image src={serviceNow} />
        </GridItem>
        <GridItem>
          <Image src={kronos} />
        </GridItem>
        <GridItem>
          <Image src={ukg} />
        </GridItem>
        <GridItem>
          <Image src={workday} />
        </GridItem>
        <GridItem>
          <Image src={tableau} />
        </GridItem>
        <GridItem>
          <Image src={powerbi} />
        </GridItem>
        <GridItem>
          <Image src={adp} />
        </GridItem>
        <GridItem>
          <Image src={oracle} />
        </GridItem>
        <GridItem>
          <Image src={blueprism} />
        </GridItem>
        <GridItem>
          <Image src={atlassian} />
        </GridItem>
      </Grid>
    </Flex>
  );
}
