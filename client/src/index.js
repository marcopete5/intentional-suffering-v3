//NPM
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

//My Components
import App from './App';
import OptionProvider from './Providers/OptionProvider';
import UserProvider from './Providers/UserProvider';

ReactDOM.render(
   <BrowserRouter>
      <OptionProvider>
         <UserProvider>
               <App />
         </UserProvider>
      </OptionProvider>
   </BrowserRouter>, 
   document.getElementById('root'));
