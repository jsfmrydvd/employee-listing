import React, { Component } from 'react';
import Employee from '../Employees/Employee/Employee';
import Auxiliary from '../../hoc/Auxiliary';

class Employees extends Component {
    constructor(props) {
        super(props);
        console.log('[Employees]')
    }
    render() {
       return this.props.employees.map((employees, index)=> {
        return <Auxiliary>
            <Employee 
                click={() => this.props.click(index)}
                name={employees.name}
                role={employees.role}
                changed={(event) => this.props.changed(event, employees.id)}/>
        </Auxiliary>
        })    
    }
}   

export default Employees;