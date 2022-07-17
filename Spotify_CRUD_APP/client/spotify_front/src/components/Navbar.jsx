import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import {
  Container,
  Wrapper,
  Left,
  Center,
  Right,
  Logo,
  SearchContainer,
  Input,
  MenuItem,
} from "../style/Navbar_Styled";
import { Link } from "react-router-dom";
const Navbar = ({ isLoggedIn }) => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Link to="/" style={{ textDecoration: "none" }}>
            <MenuItem style={{ backgroundColor: "white", color: "black" }}>
              HOME{" "}
            </MenuItem>
          </Link>
          <Link to="/artist" style={{ textDecoration: "none" }}>
            <MenuItem
              style={{
                backgroundColor: "white",
                color: "black",
                marginLeft: "10px",
              }}
            >
              ARTIST
            </MenuItem>
          </Link>
        </Left>
        <Center>
          <Logo>SpotifyClone</Logo>
        </Center>
        <Right>
          {/* if is loggedin show logout */}
          {isLoggedIn ? (
              <MenuItem style={{ color: "white" }}
                onClick={() => {    
                    localStorage.removeItem("user");
                    window.location.reload();
                }
                }
              >
                LOGOUT
              </MenuItem>
            
          ) : (
            <>
              <Link style={{ textDecoration: "none" }} to="/signup">
                <MenuItem style={{ color: "white" }}>SIGN UP </MenuItem>
              </Link>
              <Link style={{ textDecoration: "none" }} to="/login">
                <MenuItem style={{ color: "white" }}>LOGIN </MenuItem>
              </Link>
            </>
          )}

          <SearchContainer>
            <Input placeholder="search"></Input>
            <SearchIcon
              style={{
                color: "black",
                fontSize: 20,
                paddingRight: 5,
                cursor: "pointer",
              }}
            />
          </SearchContainer>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
