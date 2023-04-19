import styled from 'styled-components';


export const ButtonContainer = styled.button`
position : relative !important;
text-transform : capitalize;
font-size : 1.4rem;
background : transparent;
border : 0.5px solid white;
color : white;
cursor : pointer;
transition: all 0.5s ease-in-out;
&:hover{
    background : grey;
}
padding : 0.2rem !important;
`
export const Span = styled.span`
margin : 0.3rem;
`
export const Nav=styled.nav`
position : sticky !important;
top : 0;
z-index : +1;
background-color : black;
& img  {
    width : 30px;
    filter : invert();
}
& img:hover{
    color: green !important;
    filter: invert(90%);
}

& Link:hover{
    color: yellow !important;
}
overflow : auto !important;
`



