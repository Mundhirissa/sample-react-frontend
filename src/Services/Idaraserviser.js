import axios from "axios";
const api_rest_full = 'http://localhost:8080/api/v1/Idara';

export const ListIdara =()=> axios.get(api_rest_full); 

export const createIdara =(list)=> axios.post(api_rest_full,list);

export const getbyidIdara =(id)=> axios.get(api_rest_full+'/'+ id); 

export const updateIdara =(list,id)=> axios.put(api_rest_full+'/'+ id,list); 

export const deletebyidIdara =(id)=> axios.delete(api_rest_full+'/'+ id); 

