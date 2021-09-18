import React, { useState } from 'react';
import data from './data';
import Question from './Question';
import { Container, Headline3, Main, Section } from './styled'

const App = () => {
  const [questions] = useState(data);

  return (
    <Main>
      <Container>
        <Headline3>FaQ</Headline3>
        <Section>
          {questions.map((question) => <Question {...question} key={question.id} />)}
        </Section>
      </Container>
    </Main>
  );
}

export default App;
