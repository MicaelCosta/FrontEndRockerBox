import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Main from './pages/Main';
import Box from './pages/Box';

//BrowserRouter apresenta a url apenas com barras, igual MVC
//o Switch garante que cada endereço chame apenas uma rota
//exact garante que para acessar a url, seja exatamente o caminho definido '/'


const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/box/:id" component={Box} />
        </Switch>
    </BrowserRouter>
);

export default Routes;