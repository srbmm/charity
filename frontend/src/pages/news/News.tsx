import React, {useState} from 'react';
import {Loading, Theme} from "../../components";
import useGetData from "../../hook/useGetData";
import {getAllNewsNumber, getNews} from "../../data/News";
import {Card, Label, Pagination, Select} from 'flowbite-react';
import {NEWS_PER_PAGE} from '../../constant/PER_PAGE'
import {Link} from "react-router-dom";
import COLOR from "../../constant/COLOR";
const NewsBox = ({news}) => {
    
    return (<Card className="w-96">
        <div className="flex">
            <div className="w-1/2"><img className="w-36 h-56 object-cover rounded" src={news.avatar}/></div>
            <div className="w-1/2 p-2">
                <div className="flex flex-col justify-between h-full">
                    <div>
                        <h3>{news.title}</h3>
                        <p>{news.summary}</p>
                    </div>
                    <Link to={String(news.id)} className="text-center" style={{color: COLOR.lowPrimary}}>ادامه خبر...</Link>
                </div>
            </div>
        </div>
    </Card>)

}
const News: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [sort, setSort] = useState("");
    const [reverse, setReverse] = useState("");
    const [isLoadAllNum, allNum, error] = useGetData(getAllNewsNumber())
    const [isLoadNews, news, errorNews] = useGetData(getNews(currentPage, sort, reverse), [currentPage, sort, reverse])
    let totalPage = 0
    if (!isLoadAllNum || !isLoadNews) return <Loading/>
    const newsInPage = news.map((news) => <NewsBox key={news.id} news={news}/>)
    if (allNum) totalPage = Math.ceil(allNum / NEWS_PER_PAGE)
    return (
        <Theme className="relative h-full flex flex-col">
            <div className="w-56 text-center m-auto">
                <Label>مرتب سازی</Label>
                <Select onChange={(e) => {
                    switch (e.target.value) {
                        case "date":
                            setSort("date")
                            setReverse("")
                            break
                        case "date-reverse":
                            setSort("date")
                            setReverse("true")
                            break
                        case "seen":
                            setSort("seen")
                            setReverse("")
                            break
                        case "":
                            setSort("")
                            setReverse("")
                            break
                    }
                }}>
                    <option value="">هیچکدام</option>
                    <option value="date">تاریخ</option>
                    <option value="date-reverse">تاریخ از قدیم به جدید</option>
                    <option value="seen">پر بازدید ترین اخبار</option>
                </Select>
            </div>
            <div className='flex gap-2 justify-around flex-wrap'>
                {...newsInPage}
            </div>
            <Pagination
                style={{direction: "ltr", bottom: 0, margin: 'auto'}}
                currentPage={currentPage}
                nextLabel="بعدی"
                previousLabel="قبلی"
                onPageChange={page => {
                    setCurrentPage(page)
                }}
                totalPages={totalPage}
            />
        </Theme>
    );


};

export default News;
export {NewsBox}