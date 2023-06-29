import axios from "axios";
import {MEMBERS} from "../constant/API";

const getMembers = async (pageName: string) => {

    if (MEMBERS[pageName] !== undefined) {
        const {data} = await axios.get(MEMBERS[pageName])
        return data
    }
    else return undefined
}


export default getMembers