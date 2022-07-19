import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css';
import Homepage from './Pages/Homepage/Homepage';
import { createBrowserHistory } from 'history';
import { Router, Switch } from "react-router-dom";
import HomeLayout from "./HOC/Layouts/HomeLayout";
import DetailCoursePage from "./Pages/DetailCoursePage/DetailCoursePage";
import LoginPage from "./Pages/Loginpage/LoginPage";
import RegisterPage from "./Pages/Registerpage/RegisterPage";
export const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Switch>
        <HomeLayout
          path='/course/:tenKhoaHoc'
          Component={DetailCoursePage}
        />
        <HomeLayout
          path='/login'
          Component={LoginPage}
        />
        <HomeLayout
          path='/register'
          Component={RegisterPage}
        />
        <HomeLayout
          path='/'
          exact
          Component={Homepage} />
      </Switch>
    </Router>
  );
}

export default App;
