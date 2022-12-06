import styled from "styled-components";
import {  useNavigate } from "react-router-dom";


export default function Home(){
    const navigate = useNavigate()
    function nextPag(){
        navigate('/add-survey')
    }
    return(
        <>
            <Conteiner>
                <CriaEnquete>
                    <h1>Crie aqui sua enquete</h1>
                    <Botao onClick={()=>{nextPag()}}>Start</Botao>

                </CriaEnquete>

            </Conteiner>

        </>
    )
}
const Conteiner = styled.div`
font-family: 'Raleway';
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    h1{
        font-family: 'Saira Stencil One', cursive;
        font-size: 32px;
        color:white;
    }
`;
const CriaEnquete = styled.div`
    display: flex;
    justify-content:center;
    flex-direction:column;
    align-items: center;
    width: 380px;
    height: 300px;
    background-color: #1cddc0;
    border: 1px solid #9497a3;
    border-radius: 25px;
    padding: 10px;
    box-sizing: border-box;
    h1{
        color: #000000;
        font-family: 'Raleway';
        font-weight: 700;
        font-size: 35px;
        line-height: 26px;
    }
`;
const Botao = styled.button`
display: flex;
justify-content: center;
align-items: center;
margin-top: 50px;
width: 226px;
height: 66px;
background: #A328D6;
border-radius: 5px;
box-shadow: 1px 7px 5px rgba(25, 50, 47, 0.08),0px 4px 4px rgba(18, 71, 52, 0.02), 0px 1px 16px rgba(18, 71, 52, 0.03);
border:none;
cursor: pointer;
font-family: 'Raleway';
    font-weight: 700;
    font-size: 20px;
    line-height: 26px;
    text-align: center;
    color: #FFFFFF;
`;