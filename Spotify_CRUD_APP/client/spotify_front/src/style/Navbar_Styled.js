import styled from "styled-components";

// styled components for the navbar
export const Container = styled.div`
  height: 70px;
  background-color: black ;
  color: white;
`;
export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 18px;
`;
export const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
export const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-left: 25px;

`;
export const Center = styled.div`
  flex: 1;
  text-align: center;
`;

export const SearchContainer = styled.div`
  display: flex;
  border: 0.7px solid lightgrey;
  align-items: center;
  border-radius: 3px;
  margin-left: 18px;
  box-shadow: 0px 0px 5px 0px rgba(0.2, 0.3, 0/8, 0.75);
  background-color: white;
  
  
`;
export const Input = styled.input`
  border: none;
  border-radius: 3px;
  padding: 5px 8px;

  
`;
export const Logo = styled.h2`
  font-weight: bold;
`;

export const MenuItem = styled.div`
  font-size: 14px;
  font-weight: bold;
  padding: 10px;
  cursor: pointer;
  &:hover {
    color:cyan;
  }
`;
 

