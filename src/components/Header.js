import styled from "styled-components"
import Deck from './Deck'
import logo from "../img/logo.png"

export default function Header() {
    return (
        <Head>
            <Logo>
                <img src={logo} />
                <h1> ZapRecall </h1>
            </Logo>
            <Deck />
        </Head>
    )
}

const Head = styled.div`
    background-color: #FB6B6B;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0px;
    padding: 0px;
    padding-bottom: 200px;
    position: fixed;
    top: 0;
`;

const Logo = styled.div`
    display: flex;
    align-items: center;
    margin: 40px 0 20px 0;

    img {
        width: 52px;
    }

    h1 {
        font-family: 'Righteous';
        font-style: normal;
        font-weight: 400;
        font-size: 36px;
        line-height: 45px;
        color: #FFFFFF;
        margin-left: 20px;
    }
`;