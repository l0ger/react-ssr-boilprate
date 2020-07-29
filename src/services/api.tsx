// import axios from 'axios';
import { Action } from '../types/state';
// const axi = axios.create({
//   baseURL: '',
// });

const getToDoList = (action:Action)=>{
  return new Promise(()=>console.log('reslove'))
}
export const api = {
  getToDoList
};
