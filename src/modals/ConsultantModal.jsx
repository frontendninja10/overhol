import React from "react";
import { useFormik } from "formik";
import {
  Modal,
  ModalOverlay,
  ModalCloseButton,
  ModalBody,
  ModalContent,
  Heading,
  Text,
  Grid,
  GridItem,
  FormControl,
  Select,
  Input,
  ModalHeader,
  Textarea,
  Button,
} from "@chakra-ui/react";

export default function ConsultantModal({
  showConsultantModal,
  handleCloseConsultantModal,
}) {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      industry: "",
      projectType: "",
      workScheduleType: "",
      contractLength: "",
      additionalInformation: "",
    },
    onSubmit: (values, { resetForm }) => {
      const firstName = document.getElementById("firstName").value;
      const lastName = document.getElementById("lastName").value;
      const email = document.getElementById("email").value;
      const phoneNumber = document.getElementById("phoneNumber").value;
      const industry = document.getElementById("industry").value;
      const projectType = document.getElementById("projectType").value;
      const workScheduleType =
        document.getElementById("workScheduleType").value;
      const contractLength = document.getElementById("contractLength").value;
      const additionalInformation = document.getElementById(
        "additionalInformation"
      ).value;

      const messageHeading = `Request for Contractor - ${projectType}`;
      const messageBody = `I am interested in hiring a contractor for ${projectType}. The work schedule type is ${workScheduleType}, and I am looking for a contractor with expertise in ${industry}. I need the contract to last for ${contractLength}. Please let me know if you have any contractors available and their rates. Thank you.\nEmail: ${email}\nPhone Number: ${phoneNumber}\n\n${additionalInformation}\nBest regards,\n${firstName} ${lastName}`;

      const mailtoLink = `mailto:support@overhol.com?cc=sam@overhol.com, ade@overhol.com, yomi@overhol.com&subject=${encodeURIComponent(
        messageHeading
      )}&body=${encodeURIComponent(messageBody)}`;
      window.location.href = mailtoLink;
      resetForm();
      handleCloseConsultantModal();
      console.log(values);
    },
  });
  return (
    <Modal
      isOpen={showConsultantModal}
      onClose={handleCloseConsultantModal}
      scrollBehavior={"outside"}
      size={{ base: "xl", md: "lg" }}
    >
      <ModalOverlay />
      <ModalContent w={{ base: "90%" }} minW={{ md: "40%" }} py={"3rem"}>
        <ModalHeader textAlign={"center"}>
          <Heading
            as={"h2"}
            size={{ base: "lg", md: "xl" }}
            fontFamily={"Metropolis-SemiBold"}
          >
            Need a consultant?
          </Heading>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody
          px={{ md: "2rem" }}
          // overflowY="scroll"
          // style={{ maxHeight: "calc(100vh - 180px)" }}
        >
          <form onSubmit={formik.handleSubmit}>
            <Grid
              gridTemplateColumns={{ base: "unset", md: "repeat(2, 1fr)" }}
              p={"2em"}
              gridColumnGap={"1em"}
              gridRowGap={"1em"}
              fontFamily={"AvenirNextLTPro-Regular"}
            >
              <GridItem>
                <FormControl>
                  <Input
                    name="firstName"
                    id="firstName"
                    type="text"
                    isRequired
                    placeholder="First Name"
                    fontSize={"0.9rem"}
                    borderColor="#437C90"
                    placeholderTextColor="#437C90"
                    _hover={{ borderColor: "#3182CE" }}
                    onChange={formik.handleChange}
                    value={formik.values.firstName}
                  />
                </FormControl>
              </GridItem>
              <GridItem>
                <FormControl>
                  <Input
                    name="lastName"
                    id="lastName"
                    type="text"
                    isRequired
                    placeholder="Last Name"
                    fontSize={"0.9rem"}
                    borderColor="#437C90"
                    placeholderTextColor="#437C90"
                    _hover={{ borderColor: "#3182CE" }}
                    onChange={formik.handleChange}
                    value={formik.values.lastName}
                  />
                </FormControl>
              </GridItem>
              <GridItem>
                <FormControl>
                  <Input
                    name="email"
                    id="email"
                    type="text"
                    isRequired
                    placeholder="Email"
                    fontSize={"0.9rem"}
                    borderColor="#437C90"
                    placeholderTextColor="#437C90"
                    _hover={{ borderColor: "#3182CE" }}
                    onChange={formik.handleChange}
                    value={formik.values.email}
                  />
                </FormControl>
              </GridItem>
              <GridItem>
                <FormControl>
                  <Input
                    name="phoneNumber"
                    id="phoneNumber"
                    type="text"
                    isRequired
                    placeholder="Phone Number"
                    fontSize={"0.9rem"}
                    borderColor="#437C90"
                    placeholderTextColor="#437C90"
                    _hover={{ borderColor: "#3182CE" }}
                    onChange={formik.handleChange}
                    value={formik.values.phoneNumber}
                  />
                </FormControl>
              </GridItem>
              <GridItem>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Industry"
                    isRequired
                    id="industry"
                    name="industry"
                    fontSize={"0.9rem"}
                    borderColor="#437C90"
                    placeholderTextColor="#437C90"
                    _hover={{ borderColor: "#3182CE" }}
                    onChange={formik.handleChange}
                    value={formik.values.industry}
                  />
                </FormControl>
              </GridItem>
              <GridItem>
                <FormControl>
                  <Select
                    placeholder="Project Type"
                    id="projectType"
                    isRequired
                    name="projectType"
                    fontSize={"0.9rem"}
                    borderColor="#437C90"
                    placeholderTextColor="#437C90"
                    _hover={{ borderColor: "#3182CE" }}
                    onChange={formik.handleChange}
                    value={formik.values.projectType}
                  >
                    <option value="System Implementation">
                      System Implementation
                    </option>
                    <option value="Process Automation">
                      Process Automation
                    </option>
                    <option value="Business Intelligence & Dashboards">
                      Business Intelligence & Dashboards
                    </option>
                    <option value="Business Process Change">
                      Business Process Change
                    </option>
                    <option value="Other">Other</option>
                  </Select>
                </FormControl>
              </GridItem>
              <GridItem colSpan={2}>
                <FormControl>
                  <Select
                    type="text"
                    isRequired
                    placeholder="Work Schedule Type"
                    id="workScheduleType"
                    name="workScheduleType"
                    fontSize={"0.9rem"}
                    borderColor="#437C90"
                    placeholderTextColor="#437C90"
                    _hover={{ borderColor: "#3182CE" }}
                    onChange={formik.handleChange}
                    value={formik.values.workScheduleType}
                  >
                    <option value="Remote">Remote</option>
                    <option value="Hybrid">Hybrid</option>
                    <option value="On-site">On Site</option>
                  </Select>
                </FormControl>
              </GridItem>
              <GridItem colSpan={2}>
                <FormControl>
                  <Textarea
                    name="contractLength"
                    id="contractLength"
                    placeholder="Contract length (days/weeks/months)"
                    fontSize={"0.9rem"}
                    borderColor="#437C90"
                    placeholderTextColor="#437C90"
                    _hover={{ borderColor: "#3182CE" }}
                    onChange={formik.handleChange}
                    value={formik.values.contractLength}
                  />
                </FormControl>
              </GridItem>
              <GridItem colSpan={2}>
                <FormControl>
                  <Textarea
                    name="additionalInformation"
                    id="additionalInformation"
                    placeholder="Any additional information?"
                    fontSize={"0.9rem"}
                    borderColor="#437C90"
                    placeholderTextColor="#437C90"
                    _hover={{ borderColor: "#3182CE" }}
                    onChange={formik.handleChange}
                    value={formik.values.additionalInformation}
                  />
                </FormControl>
              </GridItem>
              <GridItem colSpan={2}>
                <Button
                  backgroundColor={"#000F08"}
                  type="submit"
                  width={"100%"}
                  color={"#fff"}
                  borderRadius={"40px"}
                  _hover={{ backgroundColor: "#31249F" }}
                  outline={"none"}
                >
                  Send
                </Button>
              </GridItem>
            </Grid>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
