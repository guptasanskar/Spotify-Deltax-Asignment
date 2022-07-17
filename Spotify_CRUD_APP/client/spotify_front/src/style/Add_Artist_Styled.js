import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
height: 80vh;
   
    width:100%;
    text-align:center;
    justify-content:center;
    `;
export const Wrapper = styled.div`
   
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width:70%;
    padding:40px 40px 40px 40px;
    box-shadow: 2px 0px 3px 2px rgba(0, 0, 0, 0.2);
    `;
export const Form = styled.form`
display: flex;
flex-direction: column;

    width: 100%;
    align-items: center;
    justify-content: center;
    `;

    export const Input = styled.input`
    display: flex;
    width: 50%;
    height: 40px;
    border-radius: 5px;
    border: 1px solid #ccc;
    padding: 0 10px;
    margin-bottom: 10px;
    `;
export const Button = styled.button`
    background-color: black;
    border: 1px solid black;
    border-radius: 4px;
    color: white;
    font-size: 14px;
    font-weight: bold;
    padding: 5px 10px;
    margin: 0 5px;
    cursor: pointer;
    &:hover {
        background-color: white;
        color: black;
        transition: all 0.3s ease-in-out;
    }
    `;
  export const Title = styled.h1`
    font-size: 30px;
    font-weight: bold;
    margin-bottom:20px;
    `;

    export const TextArea = styled.textarea`
    
  width: 51%;
  height: 100px;
  margin: 10px 0px;
  padding: 5px;
  border-radius: 5px;
  
  border: 1px solid #ccc;
    `;




