import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useParams } from "react-router-dom";
import Swal from 'sweetalert2'
import {  useNavigate } from "react-router-dom";


export default function GetOptions(){
    const navigate = useNavigate()

    const [options, setOptions] = useState([])
    const {id} = useParams()
    useEffect(()=>{
        const URL = `https://driven-cracy-809i.onrender.com/${id}/choice`
        const promise = axios.get(URL)
        console.log(URL)
        
        promise.then((response)=>{
            setOptions(response.data)
            // localStorage.setItem("idPoll", options?.pollId)
        })
        promise.catch((err)=>{
            console.log(err.message)
          })
    }, [])
    function votar(idVote){
        const URL = `https://driven-cracy-809i.onrender.com/${idVote}/vote`
        console.log(URL)
        const promise = axios.post(URL)
        promise.then((res)=>{
            console.log(res)
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Votado com sucesso',
                showConfirmButton: false,
                timer: 1500
              })
        })
        promise.catch((err)=>{
            console.log(err.message)
          })
    }
    function result(){
        navigate(`/poll/${id}/result`)
    }

    return(
        <>
            <Conteiner>
                <CriaEnquete>
                    <h1>Opcoes de voto</h1>
                    {options.map((enq, index)=>{
                        return(
                            <>
                                <Botao key={index} onClick={(()=>{
                                    votar(enq._id)
                                })}>{enq.title}</Botao>
                            </>
                        )
                    })}


                </CriaEnquete>
                <Botao2 onClick={(()=>{
                    result()
                })}>RESULTADO</Botao2>
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