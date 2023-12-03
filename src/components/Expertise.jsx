import React from "react";
import {
  Flex,
  Heading,
  Accordion,
  AccordionItem,
  AccordionIcon,
  AccordionButton,
  Box,
  AccordionPanel,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";

export default function Expertise() {
  return (
    <Flex
      px={{ base: "1em", md: "10em" }}
      h={"100vh"}
      color={"#000F08"}
      alignItems={"center"}
      mb={{ base: "-750px", md: "-650px" }}
      mt={{ base: "-400px", md: "unset" }}
      bgColor={"#f4f8fb"}
    >
      <Flex
        flexDir={"column"}
        w={"100%"}
        h={{ base: "1000px", md: "720px" }}
        bg={"#F4D81A"}
        borderRadius={{ base: "25px", md: "50px" }}
        px={{ base: "1em", md: "6em" }}
        mb={{ base: "-750px", md: "unset" }}
      >
        <Heading
          as={"h2"}
          fontFamily={"Metropolis-SemiBold"}
          fontSize={"30px"}
          pb={"40px"}
          mt={"4rem"}
          ml={"10px"}
        >
          Our Expertise
        </Heading>
        <Flex flexDir={{ base: "column", md: "row" }}>
          <Accordion
            allowToggle
            border={"none"}
            w={{ base: "100%", md: "50%" }}
            color={"rgba(0, 15, 8, 0.60)"}
            fontFamily={"Metropolis-SemiBold"}
          >
            <AccordionItem border={"none"} mb={"15px"}>
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton>
                      <Box
                        as="span"
                        flex="1"
                        display={"flex"}
                        alignItems={"center"}
                        textAlign="left"
                        fontFamily={
                          isExpanded
                            ? "AvenirNextLTPro-Bold"
                            : "Metropolis-SemiBold"
                        }
                        color={isExpanded ? "#000F08" : "rgba(0, 15, 8, 0.60)"}
                      >
                        {isExpanded ? (
                          <Box
                            display={"inline-block"}
                            mr={"2"}
                            bg={"#000F08"}
                            w={"4px"}
                            h={"35px"}
                            borderRadius={"3px"}
                          ></Box>
                        ) : (
                          ""
                        )}
                        Payroll
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <UnorderedList
                      spacing={1}
                      color={"#000F08"}
                      listStyleType={"none"}
                      fontFamily={"AvenirNextLTPro-Regular"}
                    >
                      <ListItem>SAP ECC Payroll</ListItem>
                      <ListItem>RFI and RFP Evaluation</ListItem>
                      <ListItem>System Selection</ListItem>
                    </UnorderedList>
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
            <AccordionItem border={"none"} mb={"15px"}>
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton>
                      <Box
                        as="span"
                        flex="1"
                        display={"flex"}
                        alignItems={"center"}
                        textAlign="left"
                        fontFamily={
                          isExpanded
                            ? "AvenirNextLTPro-Bold"
                            : "Metropolis-SemiBold"
                        }
                        color={isExpanded ? "#000F08" : "rgba(0, 15, 8, 0.60)"}
                      >
                        {isExpanded ? (
                          <Box
                            display={"inline-block"}
                            mr={"2"}
                            bg={"#000F08"}
                            w={"4px"}
                            h={"35px"}
                            borderRadius={"3px"}
                          ></Box>
                        ) : (
                          ""
                        )}
                        Workforce Management
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <UnorderedList
                      color={"#000F08"}
                      listStyleType={"none"}
                      spacing={1}
                      fontFamily={"AvenirNextLTPro-Regular"}
                    >
                      <ListItem>Ceridian WFM</ListItem>
                      <ListItem>ADP WFM</ListItem>
                      <ListItem>UKG Time and Attendance</ListItem>
                      <ListItem>UKG Dimensions WFM</ListItem>
                    </UnorderedList>
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
            <AccordionItem border={"none"} mb={"15px"}>
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton>
                      <Box
                        as="span"
                        flex="1"
                        display={"flex"}
                        alignItems={"center"}
                        textAlign="left"
                        fontFamily={
                          isExpanded
                            ? "AvenirNextLTPro-Bold"
                            : "Metropolis-SemiBold"
                        }
                        color={isExpanded ? "#000F08" : "rgba(0, 15, 8, 0.60)"}
                      >
                        {isExpanded ? (
                          <Box
                            display={"inline-block"}
                            mr={"2"}
                            bg={"#000F08"}
                            w={"4px"}
                            h={"35px"}
                            borderRadius={"3px"}
                          ></Box>
                        ) : (
                          ""
                        )}
                        Core HR
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <UnorderedList
                      color={"#000F08"}
                      listStyleType={"none"}
                      spacing={1}
                      fontFamily={"AvenirNextLTPro-Regular"}
                    >
                      <ListItem>Ceridian HCM</ListItem>
                      <ListItem>SAP Success Factors Employee Central</ListItem>
                      <ListItem>ADP WFN HR</ListItem>
                    </UnorderedList>
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
            <AccordionItem border={"none"} mb={"15px"}>
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton>
                      <Box
                        as="span"
                        flex="1"
                        display={"flex"}
                        alignItems={"center"}
                        textAlign="left"
                        fontFamily={
                          isExpanded
                            ? "AvenirNextLTPro-Bold"
                            : "Metropolis-SemiBold"
                        }
                        color={isExpanded ? "#000F08" : "rgba(0, 15, 8, 0.60)"}
                      >
                        {isExpanded ? (
                          <Box
                            display={"inline-block"}
                            mr={"2"}
                            bg={"#000F08"}
                            w={"4px"}
                            h={"35px"}
                            borderRadius={"3px"}
                          ></Box>
                        ) : (
                          ""
                        )}
                        Reporting/Analytics
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <UnorderedList
                      color={"#000F08"}
                      listStyleType={"none"}
                      spacing={1}
                      fontFamily={"AvenirNextLTPro-Regular"}
                    >
                      <ListItem>Ceridian Predictive Analysis</ListItem>
                      <ListItem>ADP Reporting</ListItem>
                      <ListItem>UKG Predictive Analysis</ListItem>
                    </UnorderedList>
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
            <AccordionItem border={"none"} mb={"20px"}>
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton>
                      <Box
                        as="span"
                        flex="1"
                        display={"flex"}
                        alignItems={"center"}
                        textAlign="left"
                        fontFamily={
                          isExpanded
                            ? "AvenirNextLTPro-Bold"
                            : "Metropolis-SemiBold"
                        }
                        color={isExpanded ? "#000F08" : "rgba(0, 15, 8, 0.60)"}
                      >
                        {isExpanded ? (
                          <Box
                            display={"inline-block"}
                            mr={"2"}
                            bg={"#000F08"}
                            w={"4px"}
                            h={"35px"}
                            borderRadius={"3px"}
                          ></Box>
                        ) : (
                          ""
                        )}
                        Forecasting
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <UnorderedList
                      color={"#000F08"}
                      listStyleType={"none"}
                      spacing={1}
                      fontFamily={"AvenirNextLTPro-Regular"}
                    >
                      <ListItem>Dayforce Advanced Scheduling</ListItem>
                    </UnorderedList>
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
            <AccordionItem border={"none"} mb={"15px"}>
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton>
                      <Box
                        as="span"
                        flex="1"
                        display={"flex"}
                        alignItems={"center"}
                        textAlign="left"
                        fontFamily={
                          isExpanded
                            ? "AvenirNextLTPro-Bold"
                            : "Metropolis-SemiBold"
                        }
                        color={isExpanded ? "#000F08" : "rgba(0, 15, 8, 0.60)"}
                      >
                        {isExpanded ? (
                          <Box
                            display={"inline-block"}
                            mr={"2"}
                            bg={"#000F08"}
                            w={"4px"}
                            h={"35px"}
                            borderRadius={"3px"}
                          ></Box>
                        ) : (
                          ""
                        )}
                        ServiceNow
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <UnorderedList
                      color={"#000F08"}
                      listStyleType={"none"}
                      spacing={1}
                      fontFamily={"AvenirNextLTPro-Regular"}
                    >
                      <ListItem>Design Flow</ListItem>
                      <ListItem>Implementation</ListItem>
                    </UnorderedList>
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
            <AccordionItem border={"none"} mb={"20px"}>
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton>
                      <Box
                        as="span"
                        flex="1"
                        display={"flex"}
                        alignItems={"center"}
                        textAlign="left"
                        fontFamily={
                          isExpanded
                            ? "AvenirNextLTPro-Bold"
                            : "Metropolis-SemiBold"
                        }
                        color={isExpanded ? "#000F08" : "rgba(0, 15, 8, 0.60)"}
                      >
                        {isExpanded ? (
                          <Box
                            display={"inline-block"}
                            mr={"2"}
                            bg={"#000F08"}
                            w={"4px"}
                            h={"35px"}
                            borderRadius={"3px"}
                          ></Box>
                        ) : (
                          ""
                        )}
                        Business Intelligence (Power BI & Tableau)
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <UnorderedList
                      color={"#000F08"}
                      listStyleType={"none"}
                      spacing={1}
                      fontFamily={"AvenirNextLTPro-Regular"}
                    >
                      <ListItem>Design Flow</ListItem>
                      <ListItem>Implementation</ListItem>
                      <ListItem>
                        (Power BI Developer, Data warehouse Developer)
                      </ListItem>
                    </UnorderedList>
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
          </Accordion>
          {/* Second Accordion */}
          <Accordion
            allowToggle
            border={"none"}
            w={{ base: "100%", md: "50%" }}
            color={"rgba(0, 15, 8, 0.60)"}
            fontFamily={"Metropolis-SemiBold"}
            ml={{ base: "unset", md: "3em" }}
          >
            <UnorderedList
              spacing={1}
              marginBottom={{ base: "1em", md: "20px" }}
              listStyleType={"none"}
            >
              <ListItem>Recruiting</ListItem>
            </UnorderedList>
            <UnorderedList spacing={1} listStyleType={"none"} mb={"30px"}>
              <ListItem>Benefits Administration</ListItem>
            </UnorderedList>
            <UnorderedList spacing={1} listStyleType={"none"} mb={"30px"}>
              <ListItem>Talent Management</ListItem>
            </UnorderedList>
            <UnorderedList spacing={1} listStyleType={"none"} mb={"30px"}>
              <ListItem>Automation (RPA)</ListItem>
            </UnorderedList>
          </Accordion>
        </Flex>
      </Flex>
    </Flex>
  );
}
