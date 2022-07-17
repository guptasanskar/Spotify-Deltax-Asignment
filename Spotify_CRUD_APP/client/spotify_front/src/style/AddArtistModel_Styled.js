
import styled from "styled-components";
export const ModalBackground = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0,0,0,0.6);
  display: flex;
  justify-content: center;
  align-items: center;

`;
export const closeStyle = {
    position: 'absolute',
  top: '8px',
  right: '8px'

}
export const ModalContainer = styled.div`
  @keyframes fadeInDown {
  0% {
    opacity: 0;
    transform: translateY(-50px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
  min-width: 500px;
  min-height: 450px;
  background: white;
  border-radius: 5px;
  display: flex;
    flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  animation: fadeInDown 0.8s;
  border-radius: 12px;
  
  
`;
export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const ModalTitle = styled.div`
  display: inline-block;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 10px;
  font-family: "Arial", sans-serif;
  font-size: 1.2rem;
  font-weight: bold;
  color: #333ede;
`;
export const ModalClose = styled.div`
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
`;
export const ModalBody = styled.div`
  flex: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.7rem;
  text-align: center;
`;
export const ModalBodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const ModalBodyTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ModalBodyTitleText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Times New Roman", Times, serif;
  font-size: 1.5rem;
  font-weight: bold;
`;

export const ModalBodyInputText = styled.input`
  text-align: center;
  width: 350px;
  margin: 10px 0px;
  padding: 5px;
  border-radius: 5px;
  font-size: 20px;
  font-weight: 200;
  border: 1px solid #ccc;
`;
export const ModalFooterButton = styled.div`
  width: 150px;
  height: 45px;
  margin: 10px;
  border: none;
  background-color: #333ede;
  color: white;
  border-radius: 8px;
  font-size: 20px;
  cursor: pointer;
  &:hover {
    background-color: #350fff;
    color: white;
    transition: all 0.3s ease-in-out;
    transform: scale(1.05);
  }
`;
export const ModalFooterButtonText = styled.div`
  font-size: 1.3rem;
  font-weight: bold;
  text-align: center;
  margin-top: 5px;
`;
export const ModalFooter = styled.div`
  display: flex;
  flex: 20%;

  justify-content: center;
  align-items: center;
`;
export const ModalBodyInput = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
`;
export const ModalBodyInputTextArea = styled.textarea`
  text-align: center;
  width: 360px;
  height: 100px;
  margin: 10px 0px;
  padding: 5px;
  border-radius: 5px;
  font-size: 20px;
  font-weight: 200;
  border: 1px solid #ccc;
`;
