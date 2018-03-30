import React from 'react';
import gql from 'graphql-tag';
import {compose, graphql } from 'react-apollo';

const createResolution = gql`
    mutation createResolution{
        createResolution{
            _id
        }
    }
`;

class ResolutionForm extends React.Component {

    submitForm = () => {
        this.props.createResolution();
    }
    render() {
        return(
            <div>
                <input 
                    type="text" 
                    ref={input => (this.name = input)}/>
                <button onClick={this.submitForm} >Submit</button>
            </div>
        )
    }
}

export default graphql(createResolution, {
    name: 'createResolution'
})(ResolutionForm)