import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './components/Header';
import Profile from './pages/Profile';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import './App.css';
import { useAuthState } from "./context/AuthContext";
import Sidebar from "./Sidebar";
import Feed from "./Feed"; //geimporteerd door er op te klikken beneden.
//die import Redirect from 'react-router-dom' , daar ging het mis. moest je nog toevoegen

function App() {
  const { isAuthenticated } = useAuthState();
  return (
      <>
        <Header />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            {/*Als je geen specifieke private route maakt, kan je hem ook zo opslaan (zie react les8)*/}
            <Route path="/profile">
               <div className="app_body">
                    <Sidebar />    {/*Hier moet je de components voor importeren beveiligde deel, is ook kwestie van uitzetten straks*/}
                    <Feed />

                    {isAuthenticated ? <Profile /> : <Redirect to="/signin" />}

               </div>
            </Route>

            <Route path="/signin">
              <SignIn />
            </Route>
            <Route path="/signup">
              <SignUp />
            </Route>
          </Switch>
        </div>
      </>
  );
}

export default App;
