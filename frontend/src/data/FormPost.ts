import axios from "axios";
import {FORM} from "../constant/API";

const postCash = async (data) => {
    const response = await axios.post(FORM.cash, data)
    return response
}

const postNonCash = async (data) => {
    const response = await axios.post(FORM.nonCash, data)
    return response
}



export {postCash, postNonCash}