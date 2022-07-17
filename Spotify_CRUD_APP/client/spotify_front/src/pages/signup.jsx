
import { Container, Wrapper, Form, Input, Button, Title } from "../style/Signup_Styled"
import {useState} from "react";

import {useNavigate} from "react-router-dom";
import { publicRequest } from "../api/requestMethod";



const SignUp = () => {
     const navigate=useNavigate();
    const [formData,setFormData]=useState({
      "Name":"",
      "Email":"",
      "Password":"",
      ConfirmPassword: "",
    });
    const [errorMessage, setErrorMessage] = useState(null);

    const handleChange = (e) => {
      const name = e.target.name;
      const value = e.target.value;
      setFormData({
        ...formData,
        [name]: value,
      });
    };

    function submit(e) {
      e.preventDefault();
      if (formData.Name==='' || formData.Email==='' || formData.Password==='' || formData.ConfirmPassword===''){
        setErrorMessage('Please fill all the fields');
        return;

      }
      console.log(formData);
      if (formData.Password !== formData.ConfirmPassword) {
        setErrorMessage("Password and Confirm Password does not match");
        return;
      }
      
      // remove confirmPassword from formData
      delete formData.ConfirmPassword;

      
      // send formData to server
      // if success, navigate to login page
      // if error, show error message

      const signup=async ()=>{
        try{
          const response=await publicRequest.post('/auth/signup',formData);
          console.log(response.data);
          navigate('/login');
        }
        catch(error){
          console.log(error);
          setErrorMessage(error.response.data.message);
        }
      }
      signup();
      setFormData({
        "Name":"",
        "Email":"",
        "Password":"",
        ConfirmPassword: "",
      });
    }

  return (
    <Container>
        <Wrapper>
            <Title>CREATE AN ACCOUNT</Title>
            <Form>
                <Input placeholder="Name" 
                  name="Name"
                  value={formData.Name}
                  onChange={handleChange}
                />
                <Input placeholder="Email" 
                  name="Email"
                  value={formData.Email}
                  onChange={handleChange}
                />
                <Input placeholder="Password" 
                  name="Password"
                  type="password"
                  value={formData.Password}
                  onChange={handleChange}
                />
                <Input placeholder="Confirm Password"
                name="ConfirmPassword"
                type="password"
                value={formData.ConfirmPassword}
                onChange={handleChange}
                 />
                <Button onClick={submit}>Create</Button>
                <p>
                  {errorMessage && <span style={{"color":"red"}}>{errorMessage}</span>}
                </p>
            </Form>
            

        </Wrapper>
    </Container>
  )
}

export default SignUp
