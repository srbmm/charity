import axios from "axios";
import {SUPPORT_TOPIC} from "../constant/API";

const type = {
    all: "",
    studentSupport: "?topic=studentSupport",
    sports: "?topic=sports",
    cultural: "?topic=cultural",
    research: "?topic=research",
    educational: "?topic=educational",
    constructional: "?topic=constructional"
}
const getSupporterTopic = async (key) => {
    const {data} = await axios.get(SUPPORT_TOPIC + type[key]);
    return data
}

const getOneSupportTopic = async (id) => {
    const {data} = await axios.get(SUPPORT_TOPIC + "/" + id)
    return data
}


export { getSupporterTopic, getOneSupportTopic }
