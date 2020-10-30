import { connect } from 'react-redux';
import { sayHello } from './actions/functions';
import './App.css';

function App(props) {
  return (
    <div>
      <div>{props.message}</div>
      <button onClick={() => props.sayHello()}>Button</button>
    </div>
  );
}

const mapStateToProps = state => {
  const { message } = state.hello;
  return {
    message
  };
};

const mapDispatchToProps = dispatch => {
  return { sayHello };
};

export default connect(mapStateToProps, mapDispatchToProps())(App);
