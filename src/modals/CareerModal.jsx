import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalCloseButton,
  ModalBody,
  ModalContent,
  Heading,
  Text,
  Box,
  ModalHeader,
  Link,
} from "@chakra-ui/react";

export default function CareerModal({
  showCareerModal,
  handleCloseCareerModal,
}) {
  return (
    <Modal
      isOpen={showCareerModal}
      onClose={handleCloseCareerModal}
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
            Want to join us?
          </Heading>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody
          px={{ base: "2em", md: "4rem" }}
          // overflowY="scroll"
          // style={{ maxHeight: "calc(100vh - 180px)" }}
        >
          <Text
            fontSize={"md"}
            color={"#525C65"}
            fontWeight={"normal"}
            mb={"-2em"}
            fontFamily={"AvenirNextLTPro-Regular"}
          >
            While there are no current job openings, we value your interest.
            Feel free to attach your resume via mail, compose a mail, and we’ll
            consider it for future opportunities. Thank you for considering a
            future with us!
          </Text>
          <Box pt={"5rem"}>
            <Link
              backgroundColor={"#000F08"}
              type="submit"
              width={"100%"}
              color={"#fff"}
              borderRadius={"40px"}
              _hover={{ backgroundColor: "#31249F" }}
              outline={"none"}
              display={"inline-block"}
              textAlign={"center"}
              py={"8px"}
              href="mailto:support@overhol.com?cc=sam@overhol.com, ade@overhol.com, yomi@overhol.com"
            >
              Attach Resume
            </Link>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
