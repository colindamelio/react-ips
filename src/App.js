import React, { Component } from 'react';
import styled from 'styled-components';
import Field from './components/Field';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 100px);
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Wrapper>
          <Field />
        </Wrapper>
      </div>
    );
  }
}

export default App;
