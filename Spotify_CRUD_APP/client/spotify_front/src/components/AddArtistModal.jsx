import React from "react";
import { useState } from "react";

import CloseIcon from "@mui/icons-material/Close";
import { ModalBackground, ModalContainer, ModalHeader, ModalTitle, ModalClose, ModalBody, ModalBodyContainer,  ModalBodyInput, ModalBodyInputText, ModalBodyInputTextArea, ModalBodyTitleText, ModalBodyTitle, ModalFooter, ModalFooterButton, ModalFooterButtonText,closeStyle } from "../style/AddArtistModel_Styled";
import {useEffect } from 'react';
import { Link } from 'react-router-dom';
import { userRequest,publicRequest } from '../api/requestMethod';
const AddArtistModal = ({ setModalOpen,modalOpen }) => {
    
    const [formData, setFormData] = useState({
      Name: "",
      DOB: "",
      Bio: "",
    });
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
    const handleSubmit = async (e) => {
      console.log(formData);
      e.preventDefault();
      try {
        const response = await userRequest.post("/artists/create", formData);
        console.log(response);
        setModalOpen(false);
        window.location.reload();
        

      }
      catch (error) {
        console.log(error);
      }
    }


    if (!modalOpen) {
      return null;
  }
  return (
    <>
      <ModalBackground>
        <ModalContainer>
          <ModalHeader>
            <ModalTitle>Add Artist</ModalTitle>
            <ModalClose
              onClick={() => {
                console.log("clicked");
                setModalOpen(false);
              }}
            >
              <CloseIcon className="close" style={closeStyle} />
            </ModalClose>
          </ModalHeader>
          <ModalBody>
            <ModalBodyContainer>
              <ModalBodyTitle>
                <ModalBodyTitleText>Artist Name</ModalBodyTitleText>
              </ModalBodyTitle>
              <ModalBodyInput>
                <ModalBodyInputText name="Name" onChange={handleChange} value={formData.Name} />
              </ModalBodyInput>
              <ModalBodyTitle>
                <ModalBodyTitleText>Artist DOB</ModalBodyTitleText>
              </ModalBodyTitle>
              <ModalBodyInput>
                <ModalBodyInputText type="date"
                  name="DOB"
                  onChange={handleChange}
                  value={formData.DOB}
                 />
              </ModalBodyInput>
              <ModalBodyTitle>
                <ModalBodyTitleText>Artist BIO</ModalBodyTitleText>
              </ModalBodyTitle>
              <ModalBodyInput>
                <ModalBodyInputTextArea
                  name="Bio"
                  onChange={handleChange}
                  value={formData.Bio}
                 />
              </ModalBodyInput>
            </ModalBodyContainer>
          </ModalBody>
          <ModalFooter>
            <ModalFooterButton
              onClick={() => {
                setModalOpen(false);
              }}
            >
              <ModalFooterButtonText>Cancel</ModalFooterButtonText>
            </ModalFooterButton>
            <ModalFooterButton>
              <ModalFooterButtonText
                onClick={handleSubmit}
              >Add</ModalFooterButtonText>
            </ModalFooterButton>
          </ModalFooter>
        </ModalContainer>
      </ModalBackground>
    </>
  );
};

export default AddArtistModal;
