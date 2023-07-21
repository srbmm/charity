import React from 'react';
import {Accordion} from 'flowbite-react';
import {Loading, Theme} from "../../components";
import useApi from "../../hook/useApi";
import getIntroduction from "../../data/Introduction";

const FrequentlyAskedQuestions: React.FC = () => {
    const [isLoad, data, err] = useApi(getIntroduction("faq"));
    if (!isLoad) return <Loading/>
    return (
        <>
            <Theme>
                <Accordion>
                    {data.map(item => {
                        return (
                            <Accordion.Panel className="bg-stone-100">
                                <Accordion.Title className="bg-stone-100 hover:bg-[rgba(96,112,154,0.22)]">{item.question}</Accordion.Title>
                                <Accordion.Content className="bg-stone-100">{item.answer}</Accordion.Content>
                            </Accordion.Panel>
                        )
                    })}

                </Accordion>
            </Theme>
        </>
    );
};

export default FrequentlyAskedQuestions;
