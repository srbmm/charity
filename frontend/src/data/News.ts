import axios from "axios";
import {NEWS} from "../constant/API";
import {NEWS_PER_PAGE} from "../constant/PER_PAGE";

const getNews = async (page: number, sort = "", reverse = "") => {
    const query = `?page=${page}&count=${NEWS_PER_PAGE}${sort ? "&sort=" + sort: ""}${reverse ? "reverse=" + reverse : ""}`
    const {data} = await axios.get(NEWS + query)
    return data['News']
}

const getOneNews = async (id) => {
    const {data} = await axios.get(NEWS + "/" + id)
    return data
}

const getAllNewsNumber = async () => {
    const {data} = await axios.get(NEWS)
    if (data["News_count"]){
        return data["News_count"]
    }else return 0
}

export {getAllNewsNumber, getNews, getOneNews}