import React, { useState, useEffect } from 'react';
import 'react-table-6/react-table.css';
import axios from 'axios';
import ReactTable from 'react-table-6';


const App = () =>  {

  const [employeeState, setEmployeeState] = useState ({
    employees: [],
    columns: [
      {
        Header: 'Name',
        accessor: 'name',
      },
      {
        Header: 'Email',
        accessor: 'email',
      },
      {
        Header: 'Phone',
        accessor: 'phone',
      },
      {
        Header: 'Country',
        accessor: 'country',
      }
    ]
  })

  useEffect (() => {
    axios.get('https://randomuser.me/api?results=20')
    .then (({ data }) => {
      console.log(data.results)

  let employees = data.results.map(employee => ({
    name: employee.name.first+''+employee.name.last,
    email: employee.email,
    phone: employee.phone,
    country: employee.location.country
  }))
  

  setEmployeeState({ ...employeeState, employees})
    })
    .catch (err => console.log(err))
  // eslint-disable-next-line
  }, [])
  return (
    <>
      <ReactTable
        data={employeeState.employees}
        columns={employeeState.columns}
        
      />
    </>
  )
  
}

export default App;

