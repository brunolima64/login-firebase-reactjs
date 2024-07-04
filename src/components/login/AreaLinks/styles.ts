import styled from "styled-components";

export const AreaLinks = styled.div`
    display: flex;
    flex-direction: column;
    padding: 5px;
    margin-top: 5px;
    margin-bottom: 0px;
`;

export const Buttonfacebook = styled.button`
    border: 0;
    width: 100%;
    padding: 10px 20px;
    outline: none;
    border-radius: 20px;
    color: #FFF;
    cursor: pointer;
    background-color: #4122d8;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        background-color: #1d0eb3;
    }

    img {
        width: 20px;
        height: 20px;
        margin-right: 5px;
    }
`;

export const ButtonGoogle = styled.button`
    border: 0;
    width: 100%;
    padding: 10px 20px;
    margin-top: 10px;
    outline: none;
    border-radius: 20px;
    color: #000;
    cursor: pointer;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #c2c2c2;

    &:hover {
        background-color: #dfdfdf;
    }

    img {
        width: 20px;
        height: 20px;
        margin-right: 5px;
    }
`;