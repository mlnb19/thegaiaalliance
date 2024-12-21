import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
} from "@chakra-ui/react";

const PopupModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen} colorScheme="blue">
        Open Popup
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Din titel här</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Här kan du skriva något innehåll eller lägga in en komponent.
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Stäng
            </Button>
            <Button variant="ghost">Sekundär åtgärd</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default PopupModal;
