import React, { Component } from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import Carousel from "nuka-carousel";
import film1 from "../img/sherek.png";
import film2 from "../img/amarelo.png";
import film3 from "../img/voltarsozinho.png";
import film4 from "../img/galinhas.png";
import film5 from "../img/horasvolta.png";
import film6 from "../img/spider.png";
import film7 from "../img/capitao.png";
import film8 from "../img/rocketman.png";
import film9 from "../img/sonho.png";
import polegar from "../img/polegar.png";
import coracao from "../img/coracao.png";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;

const Boxx = styled.div`
  height: 5vw;
`;

const Imgp = styled.img`
  margin-left: 5.1vw;
  height: 16vw;
`;

const Atracao = styled.div`
  margin-top: 5vw;

  h3,
  p,
  h1 {
    color: white;
  }

  display: flex;
  align-items: row;
`;

const Texto = styled.div`
  margin-top: 1vw;
  margin-left: 3.5vw;

  p {
    margin-top: 0.8vw;
    font: normal normal normal 15px/22px Arial;
    letter-spacing: 1px;
  }
  h1 {
    font-size: 2.5vw;
  }
  h3 {
    margin-top: 0.5vw;
  }
`;

const Classificacao = styled.div`
  display: flex;
  align-items: row;

  margin-top: 1vw;

  img {
    margin-left: 0.5vw;
    height: 1.2vw;
    margin-top: 5px;
  }
`;

const InfoFilme = styled.div`
  width: 15vw;
  height: 5.7vw;
  margin-left: 1vw;
`;

const Box = styled.div`
  height: 100%;
  h3,
  p {
    color: white;
  }
  p {
    font-size: 18px;
    margin-top: 0.5vw;
  }
  h3 {
    font-size: 1vw;
  }
`;

const ImgCora = styled.img`
  position: absolute;
  margin-left: -30px;
  margin-top: 10px;

  background-color: transparent;
`;

const ImgFilm = styled.img`
  width: 100%;
  height: 8.5vw;
`;

const Likes = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  div {
    display: flex;
    align-items: center;
    img {
      margin-left: 7px;
    }
  }
`;

const CarouselStyled = styled.div`
  margin-left: 4vw;
`;

const Caixa = styled.div`
  h2 {
    color: white;
    margin-left: 5vw;
    margin-bottom: 1vw;
    font-size: 1.5vw;
  }

  margin-top: 5vw;
`;

export default class SimpleSlider extends React.Component {
  state = {
    filmes: [
      {
        titulo: "Shrek",
        banner: film1,
        descricao:
          "Para resgatar uma princesa das garras de um dragão que cospe fogo, o ogro Shrek se une a um companheiro improvável: um burro brincalhão."
      },
      {
        titulo: "Hoje Eu Quero Voltar Sozinho",
        banner: film3,
        descricao:
          "Um novo colega de sala transforma a vida do estudante Leonardo, que também é cego, e complica sua amizade com sua melhor amiga."
      },
      {
        titulo: "Spider-man",
        banner: film6,
        descricao:
          "Após ser picado por uma aranha radioativa, o garoto Miles Morales logo aprende a lançar teias com seus parceiros de um universo alternativo."
      },
      {
        titulo: "Um Sonho de Liberdade",
        banner: film9,
        descricao:
          "Condenado pelo assassinato da esposa e do amante dela, um banqueiro se apega à esperança e à amizade com um detento chamado Red para sobreviver à prisão."
      },
      {
        titulo: "Que Horas Ela Volta?",
        banner: film5,
        descricao:
          "Val é a fiel empregada domestica de uma família rica. Mas a chegada de sua filha gera tensão na casa e faz com que ela comece a questionar esse papel."
      },
      {
        titulo: "Rocketman",
        banner: film8,
        descricao:
          "Em reabilitação, Elton John relembra suas origens humildes, as músicas atemporais e os momentos de inspiração e excesso. Baseado em sua verdadeira história."
      },
      {
        titulo: "A Fuga das Galinhas",
        banner: film4,
        descricao:
          "O galo Rocky e a galinha Ginger querem ajudar todas as outras galinhas a fugirem da granja onde vivem em cativeiro."
      },
      {
        titulo: "AmarElo",
        banner: film2,
        descricao:
          "Nos bastidores do show no Teatro Municipal de São Paulo, o rapper e ativista Emicida celebra o grande legado da cultura negra brasileira."
      }
    ]
  };

  render() {
    return (
      <Boxx>
        <GlobalStyle />
        <Atracao>
          <Imgp src={film7} alt="banner" />
          <Texto>
            <img src={coracao} alt="coração" />
            <h3>Visto recentemente</h3>
            <h1>Capitao Fantástico</h1>
            <p>
              Nas florestas do estado de Washington, um pai cria seus seis
              <br />
              filhos longe da civilização, em uma rígida rotina de aventuras.
              <br />
              Ele é forçado a deixar o isolamento e leva sua família para
              <br />
              encarar o mundo, desafiando sua ideia do que significa ser pai.
            </p>
            <Classificacao>
              <h3>4/5</h3>
              <img src={polegar} alt="polegar" />
            </Classificacao>
          </Texto>
        </Atracao>
        <Caixa>
          <h2>Destaques</h2>
          <CarouselStyled>
            <Carousel wrapAround={true} slidesToShow={5}>
              {this.state.filmes.map((item) => (
                <InfoFilme>
                  <ImgFilm src={item.banner} alt="filme" />
                  <ImgCora src={coracao} alt="coração" />
                  <Box>
                    <Likes>
                      <h3>{item.titulo}</h3>
                      <div>
                        <h3>4/5</h3>
                        <img src={polegar} alt="polegar" />
                      </div>
                    </Likes>
                    <p>{item.descricao}</p>
                  </Box>
                </InfoFilme>
              ))}
            </Carousel>
          </CarouselStyled>
        </Caixa>
      </Boxx>
    );
  }
}
