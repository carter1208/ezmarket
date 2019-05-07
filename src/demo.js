/**
 * Created by loc on 6/6/2017.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import * as stylesheet from "../html/css/index.scss";
import App from "./view/demoapp/App";
import "babel-polyfill";

// const Entry = () => (
//     <main>
//         <Switch>
//             <Route exact path='/' component={Main} />
//             <Route exact path='/app' component={App} />
//         </Switch>
//     </main>
// );
//BrowserRouter not work on local server
// const Root = () => (
//         <BrowserRouter>
//             <Entry/>
//         </BrowserRouter>
// );

ReactDOM.render(<App/>, document.getElementById('root'));
