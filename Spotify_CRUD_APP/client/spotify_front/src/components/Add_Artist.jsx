

import React from 'react'
import { useState, useEffect } from 'react'
import { userRequest } from '../api/requestMethod';

import {Container, Wrapper, Title, Form, Input,Button,TextArea} from '../style/Add_Artist_Styled'


const Add_Artist = () => {

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
      
      window.location.reload();
      

    }
    catch (error) {
      console.log(error);
    }
  }


  return (
    <>
    <Container>
    <Wrapper>
    <Title>
        Add Artist
    </Title>
    <Form>
        <Input type="text" placeholder="Artist Name"
        name="Name"
        onChange={handleChange}
        value={formData.Name}
         />
        <Input type="date" placeholder="Artist DOB"
        name="DOB"
        onChange={handleChange}
        value={formData.DOB}

         />
        <TextArea placeholder="Artist Bio"
        name="Bio"
        onChange={handleChange}
        value={formData.Bio}
         />
        <Button
        onClick={handleSubmit}
        >Save</Button>
    </Form>
    </Wrapper>
    </Container>

        

    </>
  )
}

export default Add_Artist
