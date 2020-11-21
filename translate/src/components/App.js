import React from 'react';
import UserCreate from './UserCreate';
import {LanguageContext, LanguageStore} from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';
import LanguagSelector from './LanguageSelector';

class App extends React.Component{
    
    render(){
        return(
            <div className="ui container">
                <LanguageStore>

                
                <LanguagSelector/>
                <ColorContext.Provider value='red'>
                <UserCreate/>
                </ColorContext.Provider>
                </LanguageStore>
                
                
            </div>
        );
    }
}

export default App;

