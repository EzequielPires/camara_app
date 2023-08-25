import axios from "axios";

export const apiCamara = axios.create({
    baseURL: 'https://sapl.catalao.go.leg.br/api/'
})