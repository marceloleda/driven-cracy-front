import axios from "axios";


// const URL = process.env.API_URL || "http://localhost:5002";
// const URL = process.env.API_URL || "http://localhost:5002";

//DEV
// const URL = "http://localhost:5002";https://dulcestore.onrender.com
const URL = "https://driven-cracy-b394.onrender.com";

export const api = axios.create({ baseURL: URL });


export function addPoll(body) {
  return api.post("/poll", body);
}
export function showPoll(){
    return api.get("/poll")
}
export function addOptions(body){
    return api.post("/choice", body)
}
export function getResult(id){
    return api.get(`/poll/${id}/result`)
}
