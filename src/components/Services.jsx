import React from "react";
import {
  Flex,
  Heading,
  Grid,
  GridItem,
  Box,
  Image,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import binoculars from "../assets/binoculars.svg";
import locationCompass from "../assets/location-compass.svg";
import customerSupport from "../assets/customer-support.svg";

export default function Services() {
  return (
    <Flex
      px={{ base: "1em", md: "10em" }}
      mt={{ base: "6em", md: "10em" }}
      h={{ base: "150vh", md: "100vh" }}
      flexDirection={"column"}
      mb={"40px"}
      w={"100%"}
      id="services"
    >
      <Heading
        as={"h2"}
        fontFamily={"Metropolis-SemiBold"}
        fontSize={"30px"}
        pb={"40px"}
      >
        Our Services
      </Heading>
      <Grid
        h={"100vh"}
        gridColumnGap={{ base: "unset", md: "2em" }}
        gridRowGap={{ base: "2em", md: "1em" }}
        gridTemplateColumns={"repeat(2, 1fr)"}
      >
        <GridItem colSpan={{ base: "2", md: "1" }}>
          <Box
            border={"1px solid rgba(52, 35, 166, 0.40)"}
            h={{ base: "200px", md: "250px" }}
            borderRadius={"30px"}
            p={{ base: "40px", md: "" }}
            pt={{ base: "30px", md: "45px" }}
            // pl={{ base: "20px", md: "60px" }}
            // pb={{ base: "30px", md: "unset" }}
          >
            <Flex pb={"20px"} alignItems={"center"} gap={"5px"}>
              <Image src={binoculars} w={"15px"} h={"15px"} />
              <Heading
                as="h5"
                size="md"
                fontFamily={"Metropolis-SemiBold"}
                color={"#31249F"}
              >
                Assessment
              </Heading>
            </Flex>
            <UnorderedList color={"#525C65"} spacing={2}>
              <ListItem>Business Case Review and Development</ListItem>
              <ListItem>RFI and RFP Evaluation</ListItem>
              <ListItem>System Selection</ListItem>
            </UnorderedList>
          </Box>
        </GridItem>
        <GridItem colSpan={{ base: "2", md: "1" }}>
          <Box
            border={"1px solid rgba(52, 35, 166, 0.40)"}
            h={{ base: "unset", md: "250px" }}
            borderRadius={"30px"}
            p={{ base: "40px", md: "" }}
            pt={{ base: "30px", md: "45px" }}
            pb={{ base: "30px", md: "unset" }}
          >
            <Flex pb={"20px"} alignItems={"center"} gap={"5px"}>
              <Image src={locationCompass} w={"15px"} h={"15px"} />
              <Heading
                as="h5"
                size="md"
                fontFamily={"Metropolis-SemiBold"}
                color={"#31249F"}
              >
                Roadmap & Governance
              </Heading>
            </Flex>
            <UnorderedList color={"#525C65"} spacing={2}>
              <ListItem>3-5 Year Transformation Roadmap Design</ListItem>
              <ListItem>Project Planning and Management</ListItem>
              <ListItem>Change Management and Value Realization</ListItem>
              <ListItem>Process Review and Optimization</ListItem>
            </UnorderedList>
          </Box>
        </GridItem>
        <GridItem colSpan={2} mt={{ base: "", md: "-100px" }}>
          <Box
            border={"1px solid rgba(52, 35, 166, 0.40)"}
            borderRadius={"30px"}
            // pl={{ base: "20px", md: "60px" }}
            p={{ base: "40px", md: "" }}
            pt={{ base: "30px", md: "45px" }}
          >
            <Flex
              pb={"20px"}
              alignItems={"center"}
              justifyContent={"center"}
              gap={"5px"}
            >
              <Image src={customerSupport} w={"15px"} h={"15px"} />
              <Heading
                as="h5"
                size="md"
                fontFamily={"Metropolis-SemiBold"}
                color={"#31249F"}
              >
                Implementation and Support
              </Heading>
            </Flex>
            <Flex
              justifyContent={"space-between"}
              flexDir={{ base: "column", md: "row" }}
            >
              <UnorderedList color={"#525C65"} spacing={2}>
                <ListItem>Project Management</ListItem>
                <ListItem>Technical Staffing</ListItem>
                <ListItem>Discovery and Blueprinting</ListItem>
                <ListItem>Build and Design</ListItem>
              </UnorderedList>
              <UnorderedList color={"#525C65"} spacing={2}>
                <ListItem>Validate and Test</ListItem>
                <ListItem>Go-live Readiness and Deployment</ListItem>
                <ListItem>Change Management</ListItem>
                <ListItem>Post-Go live Support and Stabilization</ListItem>
              </UnorderedList>
              <UnorderedList color={"#525C65"} spacing={2}>
                <ListItem>Optimization and Enhancements</ListItem>
                <ListItem>Integrations and Third party feeds</ListItem>
              </UnorderedList>
            </Flex>
          </Box>
        </GridItem>
      </Grid>
    </Flex>
  );
}
