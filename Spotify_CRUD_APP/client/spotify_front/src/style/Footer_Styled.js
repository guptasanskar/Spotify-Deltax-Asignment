import styled  from "styled-components"

export  const Container = styled.div`
  display: flex;
  background-color:#2f2f2f;
  color: white;
  
  
`;
export  const Left = styled.div`
  flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

export const Title = styled.h3`
margin-bottom: 20px;


`
export  const List = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
`

export  const ListItem = styled.li`
width:50%;
margin-bottom: 10px;
&:hover{
    cursor: pointer;
    transform: scale(1.01);
}

`
export  const Center = styled.div`
  flex: 1;
  padding: 10px;
 
`;
export  const Right = styled.div`
  flex: 1;
 `;

export  const Logo = styled.h3`

`
export  const Desc = styled.p`
    font-size: 1.1rem;
   
    margin:20px 0px;

    `
export  const SocialContainer = styled.div`
    display: flex;
    justify-content: center;
`   
export  const SocialIcon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
color: white;
background-color:#${props => props.color};
display: flex;
justify-content: center;
align-items: center;
margin-right: 10px;
&:hover{
    transform: scale(1.1);
    cursor: pointer;
}




` 
export  const ContactItem = styled.div`

    display: flex;
    align-items: center;
   
    margin-bottom: 10px;
   

    
    `