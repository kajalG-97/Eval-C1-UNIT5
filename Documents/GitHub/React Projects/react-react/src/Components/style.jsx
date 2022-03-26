import styled from "styled-components";

export const DIV = styled.div`
display: grid;
grid-template-columns: repeat(3,1fr);
grid-gap: 40px;


/* width:30%; */
div{
    border: 1px solid;
text-align: center;
}


`
export const Div = styled.div`
text-align: center;
width:50%;
margin:auto;


`
export const Text = styled.div`
display:flex;
justify-content:space-evenly;
button{
    background-color:teal;
    padding:10px 30px;
    border-radius: 10px;
    border:0px;
    color:white;
    font-size: 20px;
}
`
