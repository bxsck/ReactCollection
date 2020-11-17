import React from 'react';
import {connect} from 'react-redux';
import {createStream} from '../../actions';
import StreamForm from './StreamForm';
 //Field -> F = capital -> reactcomponent | reduxFrom -> lowecercase r -> function
/* renderInput receive all props by <Field/> under component={this.renderInput} so {input} came from field*/
class StreamCreate extends React.Component{
    onSubmit=(formValues)=>{
        // console.log(formValues);
        this.props.createStream(formValues);
    }
    /* onSubmit(formValues){
        // console.log(formValues);
        this.props.createStream(formValues);
    } */
    
    render(){
        return (
            <div>
                <h3>Create a Stream</h3>
                <StreamForm onSubmit={this.onSubmit}/>
            </div>
        );
    }
}



export default connect(null,{createStream})(StreamCreate);


/* export default reduxForm({
    form: 'streamCreate',
    validate
}) (StreamCreate); */
