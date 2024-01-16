import logo from './logo.svg';
import './App.css';
import Todo from './todo/Todo';
import Form from './todo/Form';
import FormByHook from './todo/forms/FormByHook';
import Table from './todo/table/Table';

function App() {
  return (
    <div className="App">
      {/* <Todo/> */}
      {/* <Form/> */}
      {/* <FormByHook/> */}
      <Table/>
    </div>
  );
}

export default App;
