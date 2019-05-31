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
        return <Auxiliary key={employees.id}>
            <Employee
                id={employees.id}
                name={employees.name}
                role={employees.role}/>
        </Auxiliary>
        })    
    }
}   

export default Employees;