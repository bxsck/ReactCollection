import React from 'react';
import UserCreate from './UserCreate';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';
import LanguagSelector from './LanguageSelector';

class App extends React.Component{
    state ={language : 'english'}
    
   /*  onLanguageChange = lang =>{
        this.setState({language : lang});
    }; */

    onLanguageChange = language =>{
        this.setState({language});
    };
    render(){
        return(
            <div className="ui container">
                <LanguagSelector onLanguageChange={this.onLanguageChange}/>
                <ColorContext.Provider value='red'>
                <LanguageContext.Provider value={this.state.language}>
                <UserCreate/>
                </LanguageContext.Provider>
                </ColorContext.Provider>
                
                
            </div>
        );
    }
}

export default App;

