import React from "react";
import { Flex, Link, Icon, Text, Box } from "@chakra-ui/react";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { FaPhoneAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <Box px={{ base: "1em", md: "10em" }}>
      <Flex
        color={"#01070D"}
        flexDirection={{ base: "column", md: "row" }}
        gap={{ base: "1rem" }}
        justifyContent={"space-between"}
        alignItems={{ base: "center" }}
        mt={{ base: "2rem", md: "5rem" }}
        py={{ base: "2rem", md: "2rem" }}
        pb={{ base: "2rem", md: "5rem" }}
        borderTop={"2px solid #D9D9D9"}
      >
        <Flex
          alignItems={{ base: "center", md: "flex-end" }}
          gap={"0.8rem"}
          fontWeight={"semibold"}
          flexDirection={{ base: "column", md: "unset" }}
          mb={{ base: "1em", md: "unset" }}
        >
          <Icon as={FaPhoneAlt} />
          <Text>647-564-8141</Text>
          <Text>647-232-5136</Text>
          <Text>613-263-1891</Text>
        </Flex>

        <Text ml={{ base: "unset", md: "-10.5rem" }} fontWeight={"semibold"}>
          Ontario, Canada
        </Text>

        <Flex alignItems={"center"} gap={"1rem"}>
          <Link href="mailto:support@overhol.com?cc=sam@overhol.com, ade@overhol.com, yomi@overhol.com">
            <Icon as={GrMail} />
          </Link>
          <Link>
            <Icon as={FaLinkedinIn} />
          </Link>
          <Link href="">
            <Icon as={FaInstagram} />
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
}
