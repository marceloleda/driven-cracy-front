import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useParams } from "react-router-dom";
import Swal from 'sweetalert2'
import {  useNavigate } from "react-router-dom";
import { getResult } from "../services/api";


export default function GetResult(){
    const navigate = useNavigate()
    const [result, setResult] = useState([])
    const {id} = useParams()
    console.log(result)

    useEffect(()=>{        

        getResult(id)
        .then((res)=>{
            setResult(res.data)
            // localStorage.setItem("idPoll", options?.pollId)
        })
        .catch((err)=>{
            console.log(err.message)
          })
    }, [])
   

    return(
        <>
            <Conteiner>
                <CriaEnquete>
                    <h1>Resutado</h1>
                    <h2>Expira em: {result.expireAt}</h2>
                    <h2>Enquete: {result.title}</h2>
                    <h2>Opcao: {result?.result?.title} </h2>
                    <h2>Votos: {result?.result?.votes} </h2>

                    
                </CriaEnquete>
                <Botao2 onClick={()=>{
                    navigate("/home")
                }}>Inicio</Botao2>
            </Conteiner>
        </>
    );
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
    height: 700px;
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
    h2{
        margin-top:15px;
    }
`;
const Forms = styled.div`
    h2{
        margin-top:30px;
        margin-bottom: 5px;
        color: #000000;
        font-family: 'Raleway';
        font-weight: 700;
        font-size: 20px;
        line-height: 26px;
    }
    h3{
        margin-left: 25px;
        color: red;
        font-family: 'Raleway';
        font-weight: 700;
        font-size: 15px;
        line-height: 26px;
    }
    h4{
        margin-left: 25px;

        margin-top:30px;
        margin-bottom: 5px;
        color: #000000;
        font-family: 'Raleway';
        font-weight: 700;
        font-size: 20px;
        line-height: 26px;
    }
    form{
            display:flex;
            flex-direction:column;
            justify-content: center;
            align-items:center;
        }
`
const Inserir = styled.input`
width: 326px;
height: 58px;

margin-bottom: 16px;
background: #FFFFFF;
border: 1px solid #D5D5D5;
border-radius: 5px;
padding: 10px;
box-sizing: border-box;
margin-top: 5px;

`;

const Botao = styled.button`
display: flex;
justify-content: center;
align-items: center;
margin-top: 20px;
width: 326px;
height: 66px;
background: #A328D6;
border-radius: 5px;
box-shadow: 1px 7px 5px rgba(25, 50, 47, 0.08),0px 4px 4px rgba(18, 71, 52, 0.02), 0px 1px 16px rgba(18, 71, 52, 0.03);

border:none;
cursor: pointer;
font-family: 'Raleway';
    font-weight: 700;
    font-size: 25px;;
    line-height: 26px;
    text-align: center;
    color: #FFFFFF;

`;
const Botao2 = styled.button`
display: flex;
justify-content: center;
align-items: center;
margin-top: 20px;
width: 326px;
height: 66px;
background: #2ad335;
border-radius: 5px;
box-shadow: 1px 7px 5px rgba(25, 50, 47, 0.08),0px 4px 4px rgba(18, 71, 52, 0.02), 0px 1px 16px rgba(18, 71, 52, 0.03);

border:none;
cursor: pointer;
font-family: 'Raleway';
    font-weight: 700;
    font-size: 25px;;
    line-height: 26px;
    text-align: center;
    color: #FFFFFF;

`;