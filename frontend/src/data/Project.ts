import axios from "axios";
import {PROJECTS} from "../constant/API";


const getProjects = async ({state, topic}) => {
    let query = "?"
    query += state ? "state="+state + "&": ""
    query += topic ? "topic="+topic + "&": ""
    const {data} = await axios.get(PROJECTS + query);
    return data
}

const getOneProject = async (id) => {
    const {data} = await axios.get(PROJECTS + "/" + id)
    return data
}


export { getProjects, getOneProject }
