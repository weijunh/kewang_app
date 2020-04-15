import ajax from './ajax.js'

const BASE = '/api'


export const reqHome = ()=> ajax('/home')