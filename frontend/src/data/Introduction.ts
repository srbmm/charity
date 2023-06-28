import axios from "axios";
import {INTRODUCTION} from "../constant/API";

const getIntroduction = async (pageName: string) => {

    if (INTRODUCTION[pageName] !== undefined) {
        const {data} = await axios.get(INTRODUCTION[pageName])
        return data
    }
    else return undefined
}


export default getIntroduction