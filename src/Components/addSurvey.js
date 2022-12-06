import styled from "styled-components";
import {  useNavigate } from "react-router-dom";
import { useState } from "react";
import { addPoll } from "../services/api";
import Swal from 'sweetalert2'

export default function AddSurvey(){
    const [survey, setSurvey] = useState({
        title: "",
        expireAt:""
    })
    const navigate = useNavigate()
    function sendSurvey(event){
        event.preventDefault();
        const body = survey;
        
          addPoll(body)
            .then((res)=>{
              localStorage.setItem("id", res.data)

                navigate("/choice")
            })
            .catch((err)=>{
              if(err.message === "Request failed with status code 409"){
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Esta enquete ja existe, tente outra!',
                  })
              }
              console.log(err.message)
            })
    }
    return(
        <>
            <Conteiner>
                <CriaEnquete>
                    <h1>Preencha os dados</h1>
                    <Forms>
                        <form onSubmit={sendSurvey}>
                            <h2>Nome da sua enquete</h2>
                            <Inserir id="text" type="text" placeholder="ex: Quem vai ganhar a copa?" value={survey.title} onChange={(e)=>
                                setSurvey({...survey, title: e.target.value})}required/>
                            <h2>Quantos dias sua enquete expirar?  </h2>
                            <Inserir id="text" type="number" placeholder="ex: 2" value={survey.expireAt} onChange={(e)=>
                                setSurvey({...survey, expireAt: e.target.value})}/>
                            <h3>Caso nao saiba quanto tempo deixar, deixe em branco, e sera adicionado automaticamente 30 dias para expirar </h3>


                            <Botao type="submit">CRIAR ENQUETE</Botao>
                        </form>
                    </Forms>
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
&:first-child{
    margin-top: 35px;
}
`;

const Botao = styled.button`
display: flex;
justify-content: center;
align-items: center;
margin-top: 50px;
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