import React from 'react';
import { Accordion } from 'flowbite-react';import {Theme} from "../../components";

const FrequentlyAskedQuestions:React.FC = () => {
    return (
        <>
            <Theme>
                <Accordion>
                    <Accordion.Panel>
                        <Accordion.Title>سوال ۱</Accordion.Title>
                        <Accordion.Content>جواب سوال ۱</Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title>سوال ۲</Accordion.Title>
                        <Accordion.Content>جواب سوال ۲</Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title>سوال ۳</Accordion.Title>
                        <Accordion.Content>جواب سوال ۳</Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title>سوال ۴</Accordion.Title>
                        <Accordion.Content>جواب سوال ۴</Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title>سوال ۵</Accordion.Title>
                        <Accordion.Content>جواب سوال ۵</Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title>سوال ۶</Accordion.Title>
                        <Accordion.Content>جواب سوال ۶</Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title>سوال ۷</Accordion.Title>
                        <Accordion.Content>جواب سوال ۷</Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title>سوال ۸</Accordion.Title>
                        <Accordion.Content>جواب سوال ۸</Accordion.Content>
                    </Accordion.Panel>
                </Accordion>
            </Theme>
        </>
    );
};

export default FrequentlyAskedQuestions;
