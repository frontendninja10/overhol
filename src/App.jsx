import { Box, useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Expertise from "./components/Expertise";
import Experience from "./components/Experience";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import ContactModal from "./modals/ContactModal";
import ConsultantModal from "./modals/ConsultantModal";
import CareerModal from "./modals/CareerModal";

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [showContactModal, setShowContactModal] = useState(false);
  const [showConsultantModal, setShowConsultantModal] = useState(false);
  const [showCareerModal, setShowCareerModal] = useState(false);
  const handleShowContactModal = () => {
    setShowContactModal(true);
  };
  const handleCloseContactModal = () => {
    setShowContactModal(false);
  };
  const handleShowConsultantModal = () => {
    setShowConsultantModal(true);
  };
  const handleCloseConsultantModal = () => {
    setShowConsultantModal(false);
  };
  const handleShowCareerModal = () => {
    setShowCareerModal(true);
  };
  const handleCloseCareerModal = () => {
    setShowCareerModal(false);
  };

  return (
    <>
      {/* TOP SECTION */}
      <Box
        style={{ backgroundImage: `url(/top-semi-circle.svg)` }}
        backgroundSize={{ base: "150px", md: "250px" }}
        backgroundRepeat={"no-repeat"}
        backgroundPosition={"left 20%"}
        bgColor={"#f4f8fb"}
      >
        <Navigation
          handleShowContactModal={handleShowContactModal}
          handleShowConsultantModal={handleShowConsultantModal}
          handleShowCareerModal={handleShowCareerModal}
          isOpen={isOpen}
          onOpen={onOpen}
          onClose={onClose}
          showContactModal={showContactModal}
          showCareerModal={showCareerModal}
          showConsultantModal={showConsultantModal}
        />
        <Hero />
        <Services />
        <Expertise />
      </Box>
      {/*  BOTTOM SECTION */}
      <Box
        bgColor={"#fff"}
        style={{ backgroundImage: `url(/bottom-semi-circle.svg)` }}
        backgroundSize={"150px"}
        backgroundRepeat={"no-repeat"}
        backgroundPosition={"right 45%"}
      >
        <Experience />
        <AboutUs />
        <ContactUs
          handleShowContactModal={handleShowContactModal}
          handleShowCareerModal={handleShowCareerModal}
        />
        <Footer />
        <ContactModal
          handleCloseContactModal={handleCloseContactModal}
          showContactModal={showContactModal}
        />
        <ConsultantModal
          showConsultantModal={showConsultantModal}
          handleCloseConsultantModal={handleCloseConsultantModal}
        />
        <CareerModal
          showCareerModal={showCareerModal}
          handleCloseCareerModal={handleCloseCareerModal}
        />
      </Box>
    </>
  );
}

export default App;
