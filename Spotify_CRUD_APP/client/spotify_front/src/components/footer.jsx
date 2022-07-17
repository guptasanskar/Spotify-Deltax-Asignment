
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import RoomIcon from '@mui/icons-material/Room';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import { Container, Left, Center, Right, Logo, Desc, Title, List, ListItem, SocialContainer, SocialIcon, ContactItem } from "../style/Footer_Styled";



const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>SpotifyClone</Logo>
        <Desc>
            It is the spotify like clone app which is developed by using React.js, React-router-dom, styled-components, express js , mongodb.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <FacebookIcon></FacebookIcon>
          </SocialIcon>
          <SocialIcon color="E4405F">
            <InstagramIcon></InstagramIcon>
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <TwitterIcon></TwitterIcon>
          </SocialIcon>
        </SocialContainer>
      </Left>

      <Center>
        <Title>Usefull Links</Title>
        <List>
            <ListItem>FAQ</ListItem>
            <ListItem>About Us</ListItem>
            <ListItem>Support</ListItem>
            <ListItem>Web Player</ListItem>
            <ListItem>Free Mobile App</ListItem>
            <ListItem>Terms & Conditions</ListItem>

        </List>
      </Center>

      <Right>
        <Title>Contact Us</Title>
        <ContactItem>
        <RoomIcon style={{marginRight:"10px"}}/> Near Binapani Club,<br/> Cuttack New Colony,<br/>,Cuttack,Odisha,India
        </ContactItem>
        <ContactItem>
        <PhoneIcon style={{marginRight:"10px"}}/> +91-7978-727-140
        </ContactItem>
        <ContactItem>
        <EmailIcon style={{marginRight:"10px"}}/> nsoubhagya264@gmail.com

        </ContactItem>

      </Right>
    </Container>
  );
};

export default Footer;
