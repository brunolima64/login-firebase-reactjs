import styled from "styled-components";

export const PageContainer = styled.div`
    width: 400px;
`;

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
`;

export const P = styled.p`
font-size: 17px;
padding: 10px 0;
text-align: center;
`;

export const FormSignIn = styled.form``;

export const InputArea = styled.div`
    display: flex;
    flex-direction: column;

    label {
        font-size: 13px;
        margin-top: 15px;
    }

    input {
        padding: 10px 10px;
        margin: 10px 0;
        outline: 0;
        border: 0;
        border: 1px solid  #c2c2c2;
        border-radius: 6px;
    }
`;

export const SubmitButton = styled.input`
    width: 100px;
    padding: 10px 10px;
    margin: 10px 0;
    border: 0px;
    background-color: #960000;
    color: #FFF;
    cursor: pointer;

    &:hover {
        background-color: #ab0f09;
    }
`;

export const messageError = styled.p`
    font-size: 13px;
    color: red;
    margin: 0px;
`;

export const NextSignUp = styled.div`
    margin: 20px 0;
    border-top: 1px solid #c2c2c2;
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
        font-size: 14px;
        border: 0;
    }
`;

export const Button = styled.button`
    border: 0;
    width: 100%;
    padding: 10px 20px;
    outline: none;
    border-radius: 20px;
    color: #000;
    cursor: pointer;
    background-color: transparent;
    border: 1px solid #c2c2c2;

    &:hover {
        background-color: #dfdfdf;
    }
`;