import {
    Container,
    Wrapper,
    Form,
    Input,
    Button,
    Title
} from '../style/Login_Styled';
import { Link } from 'react-router-dom';
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import { publicRequest } from "../api/requestMethod";


const Login = () => {

    const navigate=useNavigate();
    const [formData,setFormData]=useState({
      "Email":"",
      "Password":"",
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
      
      if ( formData.Email==='' || formData.Password===''){
        setErrorMessage('Please fill all the fields');
        return;

      }
      
      
      // send formData to server
      // if success, navigate to home page
      // if error, show error message

      const login=async ()=>{
        try{
          const response=await publicRequest.post('/auth/login',formData);
          
           localStorage.setItem('user',JSON.stringify(response.data));
        
          navigate('/');
          window.location.reload();
        }
        catch(error){
          console.log(error);
          setErrorMessage(error.response.data.message);
        }
      }
      setFormData({
        "Email":"",
        "Password":"",
        });
      login();

   


    }

    return (
        <Container>
            <Wrapper>
                <Title>SIGN IN</Title>
                <Form>

                    <Input placeholder="Email" name="Email" value={formData.Email} onChange={handleChange} />
                    <Input placeholder="Password"
                        name="Password"
                        value={formData.Password}
                        onChange={handleChange}
                        type="password"
                     />
                    <Button onClick={submit}>LOGIN</Button>
                     <Link to="/signup">CREATE A NEW ACCOUNT</Link>
                     {errorMessage && <span style={{"color":"red"}}>{errorMessage}</span>}
                </Form>


            </Wrapper>
        </Container>
    )
}

export default Login
