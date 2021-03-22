import styled, { css } from 'styled-components';

export const CheckboxInput = styled.input.attrs({type: 'checkbox'})`
    margin: 20px;
    padding-bottom: 10px;
    width: 17px;
    height: 17px;
`;

export const DataContainer = styled.div`
    border: 1px solid #eee;
    box-shadow: 0 2px 2px #cccccc;
    padding: 1rem;
    background-color: #f2f2f2;
    margin: 20px;
`;

export const CardContainer = styled.div`
    height: 600px;
`;

export const CheckboxContainer=styled.div`
    border: 1px solid #eee;
    padding: 1rem;
    background-color: #ffffff;
    margin-top: 20px;
`;

export const CheckboxLabel = styled.label`
    font-size: 22px;
    font-family: 'Segoe UI', sans-serif;
    color: #5a6268;

    
    ${props => props.isDisableMode && css`
        color: #435f8d;
        text-shadow: 1px 1px 2px #cccccc;
    `}
`;
