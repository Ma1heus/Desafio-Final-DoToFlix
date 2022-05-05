import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import Home from "./components/Home";
import Todos from "./components/Todos";
import film1 from "./img/sherek.png";
import film2 from "./img/amarelo.png";
import film3 from "./img/voltarsozinho.png";
import film4 from "./img/galinhas.png";
import film5 from "./img/horasvolta.png";
import film6 from "./img/spider.png";
import film8 from "./img/rocketman.png";
import film9 from "./img/sonho.png";
import Lupa from "./img/lupa.png";
import polegar from "./img/polegar.png";
import coracao from "./img/coracao.png";
import usuario from "./img/usuario.jpg";
import seta from "./img/seta.png";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    background-color: #000000;
  }
`;

const HeaderS = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 4vw;
`;

const Title = styled.h1`
  @import url("https://fonts.googleapis.com/css2?family=Secular+One&display=swap");
  font-family: "Secular One", sans-serif;
  color: #e71b27;

  margin-left: 5vw;
  margin-top: 0.5vw;
  font-size: 1.8vw;
`;

const List = styled.ul`
  display: flex;
  align-items: center;

  margin-left: 2vw;
`;

const Li = styled.li`
  display: flex;
  align-items: center;
  color: white;
`;

const LinkS = styled(Link)`
  font: normal normal bold 13px/15px Arial;

  padding: 0.5vw;
  font-size: 0.9vw;

  color: white;

  text-decoration: none;
`;

const Menu = styled.div`
  display: flex;
`;

const AdcFilme = styled.div`
  display: flex;
  align-items: center;
  margin-right: 5vw;
`;

const Button = styled.button`
  color: white;
  background-color: #e71b27;

  font: normal normal bold 13px/15px Arial;
  font-size: 0.7vw;

  border: 0;
  height: 2vw;
  width: 7vw;

  border-radius: 4px;
  &:hover {
    cursor: pointer;
    border: 1px solid black;
  }
`;

const Input = styled.input`
  border: 0;
  height: 2vw;
  width: 30vw;
  margin-left: 1.4vw;
  padding-left: 2vw;
  border-radius: 4px;

  background-color: #2c2c2c;
  background-image: url(${Lupa});
  background-repeat: no-repeat;
  background-size: 1vw 1vw;
  background-position: 0.5vw;
  color: white;
`;

const Img = styled.img`
  height: 2vw;
  margin-left: 1vw;
  border-radius: 2px;
`;

const ImgS = styled.img`
  margin-left: -1vw;
`;

const Opc = styled.div`
  position: absolute;
  margin-top: 10vw;
  margin-left: 4vw;
`;

const Div = styled.div`
  font: normal normal bold 13px/15px Arial;
  cursor: pointer;

  padding: 1vw;
  font-size: 0.9vw;

  color: white;

  text-decoration: none;
`;

const InfoFilme = styled.div`
  width: 15vw;
  height: 5.7vw;
  margin-left: 5vw;
  margin-top: 10vw;

  position: absolute;
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

const Itens = styled.div`
  font: normal normal bold 13px/15px Arial;

  margin-top: 25px;
  margin-left: 11px;
  font-size: 0.9vw;

  color: white;

  text-decoration: none;
`;

export default class HomePage extends React.Component {
  state = {
    lista: false,
    procurar: [],
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

  handleMenu = () => {
    this.setState({
      lista: !this.state.lista
    });
  };

  handleChange = (e) => {
    if (e.target.value !== "") {
      this.setState({
        procurar: this.state.filmes.filter((item) => {
          if (
            item.titulo.toLowerCase().includes(e.target.value.toLowerCase())
          ) {
            return true;
          }
        })
      });
    } else {
      this.setState({
        procurar: []
      });
    }
  };

  render() {
    return (
      <Router>
        {this.state.procurar.map((item) => (
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

        <GlobalStyle />

        <HeaderS>
          <Menu>
            <Title>TODOFLIX</Title>

            <List>
              <Li>
                <LinkS to="/">Início</LinkS>
              </Li>
              <Li>
                <Div onClick={this.handleMenu}>Categorias</Div>
                <ImgS src={seta} alt="seta para baixo" />
              </Li>
              {this.state.lista && (
                <Opc>
                  <Li>
                    <LinkS to="/todos">Todos</LinkS>
                  </Li>
                  <Li>
                    <Itens>Favoritos</Itens>
                  </Li>
                  <Li>
                    <Itens>Já vistos</Itens>
                  </Li>
                  <Li>
                    <Itens>Adicionados</Itens>
                  </Li>
                </Opc>
              )}
            </List>
          </Menu>

          <AdcFilme>
            <Button>Adicionar filme</Button>
            <Input
              type="text"
              placeholder="Pesquisar"
              onChange={this.handleChange}
            />
            <Img src={usuario} alt="Conta do Usuário" />
            <img src={seta} alt="Seta para baixo" />
          </AdcFilme>
        </HeaderS>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todos" element={<Todos />} />
        </Routes>
      </Router>
    );
  }
}
