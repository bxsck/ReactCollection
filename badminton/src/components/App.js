import React from 'react';
import Header from './Header';
import rules from './pages/rules'
import {BrowserRouter as Router, Route} from 'react-router-dom';
const App=()=>{
    return (
        <Router>
                <div>
                    <Header/>
                    <Route path="/rules" exact component={rules}/>
                </div>
            </Router>
    )
}


export default App;