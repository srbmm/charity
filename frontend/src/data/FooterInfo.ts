import axios from "axios";
import {INFO} from "../constant/API";

const getInfo = async () => {
    const {data} = await axios.get(INFO.info)
    return data
}

const getLinks = async () => {
    const {data} = await axios.get(INFO.links)
    return data
}



export {getInfo, getLinks}