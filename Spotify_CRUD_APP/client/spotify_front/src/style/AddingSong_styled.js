import styled from 'styled-components';

export const Container = styled.div`
    height: 80vh;
    width:100%;
    text-align:center;
    justify-content:center;

    

    `
export const Wrapper = styled.div`
    margin-top: 30px;
    margin-left: 30px;
    margin-right: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 2px 0px 3px 2px rgba(0, 0, 0, 0.2);
    `;

    export const FORM=styled.form`
    width: 100%;
    
    
    align-items: center;
    justify-content: center;
    `;
    export const FIELD=styled.div`
    display: flex;
    flex-wrap: wrap;
    width:80%;
    align-items: center;
    justify-content: center;
    `;

    export const LEFT=styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    `
    export const CENTER=styled.div`
    flex: 2;
    display: flex;
    text-align: center;
    `
    export const RIGHT=styled.div`
    flex: 1;
  display: flex;
    align-items: center;
    justify-content: flex-end;

    `

export const SELECTFILE=styled.div`
    display: flex;
 
    width:80%;
    align-items: center;
    justify-content: center;
    `;

    export const LABEL=styled.label`
    flex: 1;
   font-family: 'Times New Roman', Times, serif;
    font-size: 1.25rem;
    font-weight: bold;
    width:40%;
    
   
    `;
    export const Imagelabel=styled.label`
    flex: 1;
    width:50%;
    margin:10px 0px;
    padding:5px;
    border-radius:5px;
    font-size:20px;
    font-weight:200;
    border:1px solid #ccc;
    `;

    export const INPUT=styled.input`
   
    
    text-align:center;
    width:100%;
    margin:10px 0px;
    padding:5px;
    border-radius:5px;
    font-size:20px;
    font-weight:200;
    border:1px solid #ccc;
    `;
    export const BUTTON=styled.button`
 
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
    export const BUTTONFILED=styled.div`
    display: flex;
    flex-wrap: wrap;
    width:100%;
    align-items: center;
    justify-content: center;
    `;

    







