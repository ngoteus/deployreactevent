import axios from 'axios';

/**
 * Módulo para trabalhar com apis. Disponibiliza as rotas da api bem como o serviço com a biblioteca axios
 */



/**
 * Rota para o recurso Evento
 */
export const eventsResource = '/Evento';
/**
 * Rota para o recurso Listar Minhas Presenças
 */
export const myEventsResource = '/Presencas/ListarMinhas';
/**
 * Rota para o recurso Presenças Evento
 */
export const presencesEventResource = '/Presencas';
/**
 * Rota para o recurso Presenças Evento
 */
export const commentaryEventResource = '/ComentariosEvento';


export const commentaryShowEventResource = '/ComentariosEvento';

/**
 * Rota para o recurso Próximos Eventos
 */
export const nextEventResource = '/Evento/ListarProximos';
/**
 * Rota para o recurso Tipos de Eventos
 */
export const eventsTypeResource = '/TiposEvento';
/**
 * Rota para o recurso Instituição
 */
export const institutionResource = '/Instituicao';
/**
 * Rota para o recurso Login
 */
export const loginResource = '/Login';

export const pastEventsResource = '/Evento/ListarAnteriores';

// const apiPort = '5000';
// const localApiUri = `http://localhost:${apiPort}/api`;
const externallApiUri = "https://eventwebapi-mateus.azurewebsites.net/api";
// const externalApiUri = null;

const api = axios.create({
    baseURL: externallApiUri
});



export default api;