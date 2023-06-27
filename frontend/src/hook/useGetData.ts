import {useState, useEffect} from "react";

const useGetData  = (funcData, effect  = []) => {
    const [isLoad, setIsLoad] = useState(false);
    const [data, setData] = useState([]);
    const [error, setError] = useState({});
    useEffect(  () => {
        funcData.then((res) => setData(res)).catch((e) => setError(e)).finally(() => setIsLoad(true))
    }, effect);
    return [isLoad, data, error];
}

export default useGetData