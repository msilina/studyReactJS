import styled, { css } from 'styled-components';

export const CheckboxInput = styled.input.attrs({type: 'checkbox'})`
    margin: 20px;
    padding-bottom: 10px;
    width: 25px;
    height: 25px;
`;

export const CheckboxContainer = styled.div`
    border: 1px solid #eee;
    box-shadow: 0 2px 2px #cccccc;
    padding: 1rem;
    background-color: #ffffff;
    margin: 20px;
`;

export const CheckboxLabel = styled.label`
    font-size: 30px;
    font-family: 'Segoe UI', sans-serif;
    color: #282c34;

    
    ${props => props.isDisableMode && css`
        color: #435f8d;
        text-shadow: 1px 1px 2px #cccccc;
    `}
`;
