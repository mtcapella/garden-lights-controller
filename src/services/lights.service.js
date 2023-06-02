// Fichero JS que contiene las peticiones HTTP que se realizaran al ESP32 unsado la libreria aixos

import axios from "axios"; // importamos la libreria Axios

const URL = process.env.REACT_APP_API_URL; // Guardamos la URL endpoint del ESP32 de la variable de entorno a una constante

export async function getState() {
    return axios.request({method: 'GET', url: URL})
    .then((result) => result.data)
    .catch((error) => error )
}

export async function setStateOn() {
  return axios.request({method: 'POST', url: URL + 'on'})
  .then((result) => result.data)
  .catch((error) => error )
}

export async function setStateOff() {
  return axios.request({method: 'POST', url: URL + 'off'})
  .then((result) => result.data)
  .catch((error) => error )
}