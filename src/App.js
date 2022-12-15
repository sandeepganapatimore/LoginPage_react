import logo from './logo.svg';
import './App.css';
import Login from './Component/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Routers } from './Routers';
import Api from './Component/Api';
import Middle from './Component/Middle';
import Provider from './Component/Provider';
import Register from './Component/Register';
import ShowApi from './Component/ShowApi';

function App() {
  return (
    <div className="App">
      <Provider>
        <BrowserRouter>
          <Routes>
            <Route path={Routers.login} element={<Login />} />
            <Route path={Routers.register} element={<Register />} />
            <Route path={Routers.Dash} element={<Middle />} />
            <Route path={Routers.api} element={<Api />} />
            <Route path='/showApi/:id' element={<ShowApi />} />
          </Routes>


        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
