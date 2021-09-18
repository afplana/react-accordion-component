import React, { FunctionComponent, useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { Button, Header, Paragraph, Question as SingleQuestion, Title } from './styled'
interface Props {
    title: string;
    info: string;
}

const Question: FunctionComponent<Props> = ({ title, info }) => {
    const [showInfo, setShowInfo] = useState(false);
    const handleShowInfo = () => setShowInfo((show) => !show)

    return <SingleQuestion>
        <Header>
            <Title>{title}</Title>
            <Button onClick={handleShowInfo}>{showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}</Button>
        </Header>
        {showInfo && <Paragraph>{info}</Paragraph>}
    </SingleQuestion>;
};

export default Question;