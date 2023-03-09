import React, { useState } from "react";
import styled from "styled-components";

const ModalWrapper = styled.div`
  display: ${({ open }) => (open ? "block" : "none")};
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
`;

const ModalContent = styled.div`
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
  border-radius: 10px;
`;

const CloseButton = styled.span`
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;

  &:hover {
    color: #000;
    text-decoration: none;
    cursor: pointer;
  }
`;

const PopupButton = styled.button`
padding: 16px;
  background-color: #ffdd00;
  color: black;
  border: none;
  border-radius: 10px;
  font-size: 18px;
  cursor: pointer;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: #ffc800;
  }
`;

export const CustomPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <PopupButton onClick={() => setIsOpen(true)}>Open Modal</PopupButton>
      <ModalWrapper open={isOpen}>
        <ModalContent>
          <CloseButton onClick={() => setIsOpen(false)}>&times;</CloseButton>
          <h2>Modal Header</h2>
          <p>Some text in the Modal..</p>
        </ModalContent>
      </ModalWrapper>
    </>
  );
};
