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

export default function ContactModal({
  showContactModal,
  handleCloseContactModal,
}) {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      workEmail: "",
      phoneNumber: "",
      companySize: "",
      companyName: "",
      jobTitle: "",
      messageHeading: "",
      messageBody: "",
    },
    onSubmit: (values, { resetForm }) => {
      const firstName = document.getElementById("firstName").value;
      const lastName = document.getElementById("lastName").value;
      const workEmail = document.getElementById("workEmail").value;
      const phoneNumber = document.getElementById("phoneNumber").value;
      const companySize = document.getElementById("companySize").value;
      const companyName = document.getElementById("companyName").value;
      const jobTitle = document.getElementById("jobTitle").value;
      const messageHeading = document.getElementById("messageHeading").value;
      const messageBody = document.getElementById("messageBody").value;

      const mailtoLink = `mailto:support@overhol.com?cc=sam@overhol.com, ade@overhol.com, yomi@overhol.com&subject=${encodeURIComponent(
        messageHeading
      )}&body=${encodeURIComponent(
        `Hello,\n\nMy name is ${firstName} ${lastName} and I'm interested in your company. Here's some information about me:\n\nWork Email: ${workEmail}\nPhone Number: ${phoneNumber}\nCompany Size: ${companySize}\nCompany Name: ${companyName}\nJob Title: ${jobTitle}\n\n${messageBody}\nThank you for your time and consideration. We look forward to hearing back from you soon.\nBest regards,\n${firstName}`
      )}`;
      window.location.href = mailtoLink;
      resetForm();
      handleCloseContactModal();
      console.log(values);
    },
  });
  return (
    <Modal
      isOpen={showContactModal}
      onClose={handleCloseContactModal}
      scrollBehavior={"outside"}
      size={{ base: "xl", md: "lg" }}
    >
      <ModalOverlay />
      <ModalContent w={{ base: "90%" }} minW={{ md: "40%" }} py={"3rem"}>
        <ModalHeader textAlign={"center"}>
          <Heading
            as={"h2"}
            size={{ base: "lg", md: "xl" }}
            mb={"6"}
            fontFamily={"Metropolis-SemiBold"}
          >
            We can't wait to speak to you!
          </Heading>
          <Text
            fontSize={"sm"}
            color={"#525C65"}
            fontWeight={"normal"}
            mb={"-2em"}
            fontFamily={"AvenirNextLTPro-Regular"}
          >
            Please fill this form and a member of the team will reach out to
            you.
          </Text>
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
              <GridItem colSpan={{ base: "2", md: "1" }}>
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
              <GridItem colSpan={{ base: "2", md: "1" }}>
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
              <GridItem colSpan={{ base: "2", md: "1" }}>
                <FormControl>
                  <Input
                    name="workEmail"
                    id="workEmail"
                    type="email"
                    isRequired
                    placeholder="Work Email"
                    fontSize={"0.9rem"}
                    borderColor="#437C90"
                    placeholderTextColor="#437C90"
                    _hover={{ borderColor: "#3182CE" }}
                    onChange={formik.handleChange}
                    value={formik.values.workEmail}
                  />
                </FormControl>
              </GridItem>
              <GridItem colSpan={{ base: "2", md: "1" }}>
                <FormControl>
                  <Input
                    name="phoneNumber"
                    id="phoneNumber"
                    type="number"
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
              <GridItem colSpan={2}>
                <FormControl>
                  <Input
                    name="companyName"
                    id="companyName"
                    type="text"
                    isRequired
                    placeholder="Company Name"
                    fontSize={"0.9rem"}
                    borderColor="#437C90"
                    placeholderTextColor="#437C90"
                    _hover={{ borderColor: "#3182CE" }}
                    onChange={formik.handleChange}
                    value={formik.values.companyName}
                  />
                </FormControl>
              </GridItem>
              <GridItem colSpan={{ base: "2", md: "1" }}>
                <FormControl>
                  <Select
                    name="companySize"
                    id="companySize"
                    type="text"
                    isRequired
                    placeholder="Company Size"
                    fontSize={"0.9rem"}
                    borderColor="#437C90"
                    placeholderTextColor="#437C90"
                    _hover={{ borderColor: "#3182CE" }}
                    onChange={formik.handleChange}
                    value={formik.values.companySize}
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value=">5">Greater than 5</option>
                  </Select>
                </FormControl>
              </GridItem>
              <GridItem colSpan={{ base: "2", md: "1" }}>
                <FormControl>
                  <Input
                    name="jobTitle"
                    id="jobTitle"
                    type="text"
                    isRequired
                    placeholder="Job Title"
                    fontSize={"0.9rem"}
                    borderColor="#437C90"
                    placeholderTextColor="#437C90"
                    _hover={{ borderColor: "#3182CE" }}
                    onChange={formik.handleChange}
                    value={formik.values.jobTitle}
                  />
                </FormControl>
              </GridItem>
              <GridItem colSpan={2}>
                <FormControl>
                  <Input
                    name="messageHeading"
                    id="messageHeading"
                    type="text"
                    isRequired
                    placeholder="Message Heading"
                    fontSize={"0.9rem"}
                    borderColor="#437C90"
                    placeholderTextColor="#437C90"
                    _hover={{ borderColor: "#3182CE" }}
                    onChange={formik.handleChange}
                    value={formik.values.messageHeading}
                  />
                </FormControl>
              </GridItem>
              <GridItem colSpan={2}>
                <FormControl mb={3}>
                  <Textarea
                    name="messageBody"
                    id="messageBody"
                    placeholder="Message Body"
                    fontSize={"0.9rem"}
                    borderColor="#437C90"
                    placeholderTextColor="#437C90"
                    _hover={{ borderColor: "#3182CE" }}
                    onChange={formik.handleChange}
                    value={formik.values.messageBody}
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
