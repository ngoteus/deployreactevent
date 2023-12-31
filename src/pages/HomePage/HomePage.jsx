import React, { useEffect, useState } from "react";
import "./HomePage.css";

import Banner from "../../components/Banner/Banner";
import MainContent from "../../components/MainContent/MainContent";
import VisionSection from "../../components/VisionSection/VisionSection";
import ContactSection from "../../components/ContactSection/ContactSection";
import Title from "../../components/Title/Title";
import NextEvent from "../../components/NextEvent/NextEvent";
import PastEvents from "../../components/PastEvents/PastEvents";
import Container from "../../components/Container/Container";
import api from "../../Services/Service";
import Notification from "../../components/Notification/Notification";
import { nextEventResource, pastEventsResource } from "../../Services/Service";

const HomePage = () => {
  const [pastEvents, setPastEvents] = useState([]);
  const [nextEvents, setNextEvents] = useState([]);
  const [notifyUser, setNotifyUser] = useState(); //Componente Notification


  // roda somente na inicialização do componente
  useEffect(() => {
    async function getNextEvents() {
      try {
        const promise = await api.get(nextEventResource);
        const dados = await promise.data;
        // console.log(dados);
        setNextEvents(dados); //atualiza o state
      } catch (error) {
        console.log("não trouxe os próximos eventos, verifique lá!");
        // setNotifyUser({
        //   titleNote: "Erro",
        //   textNote: `Não foi possível carregar os próximos eventos. Verifique a sua conexão com a internet`,
        //   imgIcon: "danger",
        //   imgAlt:
        //   "Imagem de ilustração de erro. Rapaz segurando um balão com símbolo x.",
        //   showMessage: true,
        // });
      }
    }

    getNextEvents(); //chama a função
  }, []);

  useEffect(() => {
    async function getPastEvents() {
      try {
        const promise = await api.get(pastEventsResource);
        const dados = promise.data;
      
        setPastEvents(dados);
      } catch (error) {
        console.log("não trouxe os eventos, verifique lá");
        console.log(error);
      }
    }
    getPastEvents();
  }, []);

  return (
    <MainContent>
      {<Notification {...notifyUser} setNotifyUser={setNotifyUser} />}
      <Banner />

      {/* PRÓXIMOS EVENTOS */}
      <section className="proximos-eventos">
        <Container>
          <Title titleText={"Próximos Eventos"} />

          <div className="events-box">
            {nextEvents.map((e) => {
              return (
                <NextEvent
                  key={e.idEvento}
                  title={e.nomeEvento}
                  description={e.descricao}
                  eventDate={e.dataEvento}
                  idEvent={e.idEvento}
                />
              );
            })}
          </div>
        </Container>
      </section>

      {/*  EVENTOS PASSADOS*/}
      <section className="proximos-eventos">
        <Container>
          <Title titleText={"Eventos Anteriores"} />

          <div className="events-box">
            {pastEvents.map((e) => {
              return (
                <PastEvents
                  key={e.idEvento}
                  title={e.nomeEvento}
                  description={e.descricao}
                  eventDate={e.dataEvento}
                  idEvent={e.idEvento}
                  buttonText="Visualizar"
                  buttonLink={`/detalhes-evento/${e.idEvento}`}
                />
              );
            })}
          </div>
        </Container>
      </section>

      <VisionSection />
      <ContactSection />
    </MainContent>
  );
};

export default HomePage;
