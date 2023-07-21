import React, {useState} from 'react';
import {Loading, Theme} from "../../components";
import useApi from "../../hook/useApi";
import {getProjects} from "../../data/Project";
import ProjectCard from "../../components/ProjectCard";
import {Label, Select} from "flowbite-react";

const Projects: React.FC = () => {
    const [state, setState] = useState()
    const [topic, setTopic] = useState()
    const [isLoad, data, error] = useApi(getProjects({state, topic}), [state, topic])
    if (!isLoad) return <Loading/>
    return (
        <>
            <Theme>
                <div className="flex justify-around">
                    <div className="flex flex-col gap-2">
                        <Label value="حالت"/>
                        <Select onChange={e => setState(e.target.value)}>
                            <option value="">همه</option>
                            <option value="done">انجام شده</option>
                            <option value="doing">درحال انجام</option>
                            <option value="possible">قابل انجام</option>
                        </Select>
                    </div>
                    <div className="flex flex-col gap-2">
                        <Label value="موضوع"/>
                        <Select onChange={e => setTopic(e.target.value)}>
                            <option value="">همه</option>
                            <option value="studentSupport">حمایت از دانشجویان</option>
                            <option value="sports">ورزشی</option>
                            <option value="cultural">فرهنگی</option>
                            <option value="research">پژوهشی</option>
                            <option value="educational">آموزشی</option>
                            <option value="constructional">عمرانی</option>
                        </Select>
                    </div>
                </div>
                {data.map((item, index) => <ProjectCard revesre={index % 2 == 0} key={item.id} data={item}/>)}
            </Theme>
        </>
    );
};

export default Projects;
