import styled from "@emotion/styled";

export const FormStyled = styled('form')`
color: black;

display: flex;
justify-content: space-between;

input {
    width: 100%;
    min-height: 60px;
    outline: none;
    padding: 10px 15px 15px;
    border: 2px solid black;
};
input::-webkit-input-placeholder {
    white-space:pre-line;  
    position:relative;
    top:-7px;
    
    }
    input::-moz-placeholder {
       white-space:pre-line;  
    position:relative;
    top:-7px;
    }
    input:-ms-input-placeholder { 
      white-space:pre-line;  
    position:relative;
    top:-7px;
    }
    input:-moz-placeholder { 
       white-space:pre-line;  
    position:relative;
    top:-7px;
    }
button {
    background: black;
    color: white;
    padding: 10px 15px;
    border: none;
    width: 100%;
}
`
