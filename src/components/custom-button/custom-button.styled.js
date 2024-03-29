import styled, {css} from 'styled-components';

const invertedButtonStyles = css`
&.inverted{
    background-color: black;
    color: white;
    border: none;

    &:hover{
      background-color: white;
      color:black;
      border: 1px solid black;
    }
  
  }
`;

const ButtonStyles = css`
  background-color: black;
  color: white;
  border: none;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
    }
`;

const GoogleSignInStyles = css`
    background-color: #4285f4;
    color: #fff;
    border:none;
    
    &:hover{
      background: #357ae8;
      border:none;
    }
  }
`;


const getButtonsStyles = props =>{

    if(props.isGoogleSignin){
        return GoogleSignInStyles;
    }

    return props.inverted ?  invertedButtonStyles : ButtonStyles;
}

export const CustomButtonContainer = styled.button`
    min-width: 165px;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px 0 35px;
    font-size: 15px;
    text-transform: uppercase;
    font-family: 'Open Sans Condensed';
    font-weight: bolder;
    cursor: pointer;
    display: flex;
    justify-content: center;

    ${getButtonsStyles}

` ;