import { useState } from "react"
import styled from "styled-components"
import play from "../img/seta_play.png"


export default function Deck() {
    const flashcards = [{ id: 1, question: "O que é JSX?", answer: "Uma extensão de linguagem do JavaScript" },
    { id: 2, question: "O React é __ ", answer: "uma biblioteca JavaScript para construção de interfaces" },
    { id: 3, question: "Componentes devem iniciar com __", answer: "letra maiúscula" },
    { id: 4, question: "Podemos colocar __ dentro do JSX ", answer: "expressões" },
    { id: 5, question: "O ReactDOM nos ajuda __ ", answer: "interagindo com a DOM para colocar componentes React na mesma" },
    { id: 6, question: "Usamos o npm para __ ", answer: "gerenciar os pacotes necessários e suas dependências" },
    { id: 7, question: "Usamos props para __ ", answer: "passar diferentes informações para componentes " },
    { id: 8, question: "Usamos estado (state) para __", answer: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente" }]

    //const [card, setCard] = useState("")

    return (
        <div>
            <AddFlashcard flashcards={flashcards}></AddFlashcard>
        </div>
        //<AddFlashcard flashcards={flashcards}></AddFlashcard>
    )
}

function AddFlashcard({ flashcards }) {
    return (
        <div className="cards">
            {flashcards.map((c) => <PerguntaFechada><p> Pergunta {c.id} </p> <img src={play} /></PerguntaFechada>)}
        </div>
    )
}

function revealCard(){
    return (
        console.log("oi")
    )
}

const PerguntaFechada = styled.div`
    width: 300px;
    height: 35px;
    background-color: #FFFFFF;
    margin: 12px;
    padding: 15px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    z-index: 2;

    p {
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        color: #333333;
    }
`;

const PerguntaAberta = styled.div`
    width: 300px;
    margin: 12px;
    padding: 15px;
    min-height: 100px;
    background: #FFFFD5;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    img {
        position: absolute;
        bottom: 10px;
        right: 10px;
    }
`;