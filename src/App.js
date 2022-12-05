import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Amplify } from 'aws-amplify';
import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import config from './aws-exports';
Amplify.configure(config);

function App({signOut,user}) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
       {user &&
          <div>
            {user.username}
            <button onClick={signOut}>
              ログアウト
            </button>
          </div>
        }
      </header>
    </div>
  );
}

export default withAuthenticator(App);
