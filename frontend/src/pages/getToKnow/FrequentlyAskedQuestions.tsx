import React from 'react';
import {Accordion} from 'flowbite-react';
import {Loading, Theme} from "../../components";
import useGetData from "../../hook/useGetData";
import getIntroduction from "../../data/Introduction";

const FrequentlyAskedQuestions: React.FC = () => {
    const [isLoad, data, err] = useGetData(getIntroduction("faq"));
    if (!isLoad) return <Loading/>
    return (
        <>
            <Theme>
                <Accordion>
                    {data.map(item => {
                        return (
                            <Accordion.Panel>
                                <Accordion.Title>{item.question}</Accordion.Title>
                                <Accordion.Content>{item.answer}</Accordion.Content>
                            </Accordion.Panel>
                        )
                    })}

                </Accordion>
            </Theme>
        </>
    );
};

export default FrequentlyAskedQuestions;
