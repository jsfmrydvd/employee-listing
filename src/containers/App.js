import React, {Component} from 'react';
import Auxiliary from '../hoc/Auxiliary';
import Employees from '../components/Employees/Employees';
import Button from '../components/Button/Button';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor')
  }
  state = {
    employees: [
      { id: 1, name: 'Josef', role: 'admin' },
      { id: 2, name: 'Mary', role: 'software-engineer'}, 
      { id: 3, name: 'David', role: 'test-engineer'}
    ],
    filter: '',
    filteredEmployees: []
  }
  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }
  componentDidMount() {
    this.getFilterData = (event) => {
      let filterName = event.target.value;
      let employeeData = this.state.employees.filter((emp, id) => {
        return emp.role === filterName
      }, filterName);
      this.setState({
          filter: filterName,
          filteredEmployees: employeeData
      })
    } 
  }
 
  render() {
    return (
        <Auxiliary>
          <Button click={(event) => this.getFilterData(event)}></Button>
          <Employees employees={this.state.filteredEmployees}/>    
        </Auxiliary>
    );
  }
}

export default App;
