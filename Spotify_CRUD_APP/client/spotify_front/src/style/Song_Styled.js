import styled from "styled-components";


export const Title = styled.h1`
    font-size: 2rem;
    font-weight: bold;
    color: #fff;
    margin: 0;
    padding: 0;
    margin-bottom: 1rem;
    margin-top: 1rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-family: 'Roboto', sans-serif;
    `
export const Container = styled.div`
    
    width:100%;
    text-align:center;
    justify-content:center;
    margin-bottom: 20px;
    `;
    export const Right = styled.div`
   flex: 1;
  display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-left: 25px;

`;
export const Button = styled.button`
    background-color: lightgrey;
    border: 1px solid #fff;
    border-radius: 5px;
    color: #000;
    font-size: 1rem;
    font-weight: bold;
    padding: 0.5rem 1rem;
    margin: 0.5rem 1rem;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover {
        background-color: #000;
        color: #fff;
    }
`;
export const Wrapper = styled.div`
 margin-top: 30px;
 margin-left: 30px;
    margin-right: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    box-shadow: 2px 0px 3px 2px rgba(0, 0, 0, 0.2);
    `;
 export const Table=styled.table`
    width: 100%;    
    border-collapse: collapse;
    `;

    export const TableHead=styled.thead`

    font-size: 1.2rem;
    font-family:'Times';
    background-color: black;
    color: white;
    
    
  

    `;
    export const TableBody=styled.tbody`
    font-family:'sans-serif';
 
    `;
    export const TableRow=styled.tr`
    
    `;
    export const TableCell=styled.td`
    border-right: solid 1px #e0e0e0;
    border-left: solid 1px #e0e0e0;
    padding-left: 15px;
    padding-top: 5px

    `;



