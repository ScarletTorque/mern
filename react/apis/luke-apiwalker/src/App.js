import './App.css';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Form from './components/Form';
import Results from './components/Results';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>Luke Apiwalker</h1>
        <Form></Form>
        <Switch>
          <Route exact path = "/:category/:id">
            <Results></Results>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
