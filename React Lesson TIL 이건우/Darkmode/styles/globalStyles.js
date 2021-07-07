import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle `
   body {
    background: ${({theme}) => theme.body};
    color: ${({theme}) => theme.text};
    font-family:'Roboto', sans-serif ;
    transition: all .5s linear;
    }
    .btn-primary{
        background-color: ${({theme}) => theme.primary};
        color: ${({theme}) => theme.body};;
        padding: 0.5rem 1.5rem;
        font-size: 1rem;
        border-radius: 1rem;
        cursor: pointer;
        outline: none;
        border: none;
        transition: all .5 linear;
    }
    .navbar{
        background: ${({theme}) => theme === lightTheme ? '#gray' : '#fff'};
        color: ${({theme}) => theme === lightTheme ? '#121212' : '#fff'};
        width: 100%;
       padding: 10px 20px;
       cursor: pointer;
       border-radius: 10px;
    }
    .header{
        color: ${({theme}) => theme === lightTheme ? '#121212' : '#fff'};
        text-align: center;
        cursor: pointer;
        margin-bottom: 60px;
        font-weight: bold;
        font-family: 'Zen Loop', cursive;
        font-size: 45px;
    }
    .policy{
        color: ${({theme}) => theme === lightTheme ? '#121212' : '#fff'};
    }
   
    

`;


export const lightTheme = {
    body: '#fff',
    text: '#121212',
    primary: "#6200ee"
}
export const darkTheme = {
    body: '#121212',
    text: '#fff',
    primary: '#bb86fc'
}