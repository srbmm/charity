import {Link} from "react-router-dom";
import COLOR from "/src/constant/COLOR";
import FakeNews from '/src/assets/images/fakeNews.jpg'

const NewsBox = ({news}) => {
    return (<div className="w-96 group">
        <div className="flex gap-2">
            <div className="w-1/2"><img className="h-64 w-48 object-cover rounded group-hover:translate-x-[-5px] transition" src={news.avatar ? news.avatar: FakeNews}/></div>
            <div className="w-1/2 p-2 bg-white rounded">
                <div className="flex flex-col justify-between h-full">
                    <div>
                        <h3 className="text-[#213D70] mb-2">{news.title}</h3>
                        <p>{news.summary}</p>
                    </div>
                    <Link to={String(news.id)} className="text-center" style={{color: COLOR.lowPrimary}}>ادامه خبر...</Link>
                </div>
            </div>
        </div>
    </div>)

}
export default NewsBox;