import React, { useContext, useEffect, useState } from "react";
import MainContent from "../../components/MainContent/MainContent";
import Title from "../../components/Title/Title";
import Table from "../DetalhesEvento/TableDetalhe/TableDetalhe";
import Container from "../../components/Container/Container";
import { Select } from "../../components/FormComponents/FormComponents";
import Spinner from "../../components/Spinner/Spinner";
import TableComentario from '../../pages/DetalhesEvento/TableComentario/TableComentario'
import Modal from "../../components/Modal/Modal";
import api, {
  eventsResource,
  myEventsResource,
  presencesEventResource,
  commentaryEventResource,
} from "../../Services/Service";

import "./DetalhesEvento.css";
import { UserContext } from "../../context/AuthContext";
import { useParams } from "react-router-dom";
import { dateFormatDbToView } from "../../Utils/stringFunctions";

const DetalhesEvento = () => {
  // state do menu mobile
  const { idEvento } = useParams();
  const [eventos, setEventos] = useState([]);
  // select mocado
  // const [quaisEventos, setQuaisEventos] = useState([
  const quaisEventos = [
    { value: 1, text: "Todos os eventos" },
    { value: 2, text: "Meus eventos" },
  ];

  const [tipoEvento, setTipoEvento] = useState("1"); //código do tipo do Evento escolhido
  const [showSpinner, setShowSpinner] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [eventoMeu, setEventoMeu] = useState([]);
  const [descricao, setDescricao] = useState([])
  const [dataEvento, setDataEvento] = useState([])

  // recupera os dados globais do usuário
  const { userData } = useContext(UserContext);
  // const [comentario, setComentario] = useState("");
//   const [idEvento, setIdEvento] = useState("");
  const [idComentario, setIdComentario] = useState(null);

  useEffect(() => {
    // loadEventsType();
    loadEvents();
    // console.log(nomeEvento);
  }, [tipoEvento, userData.userId]); //

  async function loadEvents() {
    const retorno = await api.get(`${eventsResource}/${idEvento}`);
    console.log(retorno.data);
    setEventoMeu(retorno.data.nomeEvento)
    setDescricao(retorno.data.descricao);
    setDataEvento(dateFormatDbToView(retorno.data.dataEvento))

  }
 

  return (
    <>
      <MainContent>
        <Container>
          <Title titleText={"Detalhes"} additionalClass="custom-title" />

          
          <Table
            nomeEvento={eventoMeu}
            descricao={descricao}
            dataEvento={dataEvento}
            
            // fnShowModal={showHideModal}
          />
        </Container>
        <section className="lista-eventos-section">
          <TableComentario 
          id={idEvento}
          />
        </section>
      </MainContent>
      {/* SPINNER -Feito com position */}
      {showSpinner ? <Spinner /> : null}

    
    </>
  );
};

export default DetalhesEvento;
