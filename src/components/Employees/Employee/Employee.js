import React, { Component } from 'react';
import Auxiliary from '../../../hoc/Auxiliary';

class Employee extends Component {
    constructor(props) {
        super(props);
        console.log('[Employee]')
    }
    render() {
        return <Auxiliary>    
                <p key="i1">I'm {this.props.name} and I am a/an {this.props.role}.</p>
        </Auxiliary>
    }
};

export default Employee;