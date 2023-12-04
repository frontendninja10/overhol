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
      mt={{ base: "-200px", md: "-100px" }}
      bgColor={"#f4f8fb"}
      className="chrome-box"
      __css={{
        "@media screen and (max-width: 768px) and (-webkit-min-device-pixel-ratio: 0)":
          { marginTop: "-150px" },
      }}
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
                        Talent Management
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
                      <ListItem>Recruitment</ListItem>
                      <ListItem>Onboarding and Off-boarding</ListItem>
                      <ListItem>Performance Management</ListItem>
                      <ListItem>Learning and Development</ListItem>
                      <ListItem>Succession Planning</ListItem>
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
                        Benefits Administration
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
                      <ListItem>Benefits Configuration</ListItem>
                      <ListItem>Benefits Tracking</ListItem>
                      <ListItem>Benefits Enrolment</ListItem>
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
                        Automation RPA
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
                      <ListItem>
                        Automation Business Process and Workflow
                      </ListItem>
                      <ListItem>Automation System Integration</ListItem>
                    </UnorderedList>
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
          </Accordion>
        </Flex>
      </Flex>
    </Flex>
  );
}
