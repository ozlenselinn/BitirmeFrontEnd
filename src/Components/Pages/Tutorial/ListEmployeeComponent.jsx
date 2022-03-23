import React, { Component } from 'react';
import EmployeeService from '../../services/EmployeeService';

//in react 2 types of components stateless function component stateful class component. We use class component

class ListEmployeeComponent extends Component {
    constructor(props) {
        
        //we props to the React component
        super(props)
        
        //this is state which is belongs to this component (ListEmployeeComponent)
        this.state = {
            //initialize an array
          employees : []

        
    }
    
}
    
    componentDidMount() {
        EmployeeService.getEmployees().then((res)=> {
            this.setState({employees:res.data});
            
        });



    }
    render() {
        return (
            <div>
                <h2 className ="text-center">Employees List</h2>
                <div className='row'>
                    <table className='table table-striped table-bordered'>

                        <thead>
                            <tr>
                                <th>Employee First Name</th>
                                <th>Employee Last Name</th>
                                <th>Employee Email</th>
                                <th>Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.employees.map(
                                    employee =>
                                    <tr key =  {employee.id}>
                                        <td>{ employee.firstName}</td>
                                        <td>{ employee.lastName}</td>
                                        <td>{ employee.email}</td>
                                    </tr>
                                    
                               )    


                            }
                        </tbody>
                    </table>
                </div>
            </div>

        )

    }
}
export default ListEmployeeComponent;

























                 



