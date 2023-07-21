import axios from "axios";
import {SUPPORTER, SELECTED_SUPPORTER} from "../constant/API";

const getSupporters = async () => {
    const {data} = await axios.get(SUPPORTER + "/" + "all")
    return data
}

const getOneSupporter = async (id) => {
    const {data} = await axios.get(SUPPORTER + "/" + id)
    return data
}


const getSelectSupporter = async () => {
    const {data} = await axios.get(SELECTED_SUPPORTER)
    return data
}


export { getSupporters, getOneSupporter, getSelectSupporter}