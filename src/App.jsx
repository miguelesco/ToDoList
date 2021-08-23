import react from 'react';
import GlobalStyles from './styles/GlobalStyles';
import TodoContainer from './components/TodoContainer';

class App extends react.PureComponent {
  render() {
    return (
      <react.Fragment>
        <GlobalStyles />
        <TodoContainer />
      </react.Fragment>
    );
  }
}

export default App;
