import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';

import {TEmployee} from '../helpers/types';

function Employee({employee, ...restProps}) {
  const onDeleteEmployee = () => restProps.onDeleteEmployee(employee);
  const onEditEmployee = (event) => restProps.onEditEmployee(event, employee);

  return (
    <tr>
      <td>{employee.id}</td>
      <td>{employee.firstName}</td>
      <td>{employee.lastName}</td>
      <td>{employee.position}</td>
      <td className="text-center">
        <Button onClick={onEditEmployee}>Edit</Button>
      </td>
      <td className="text-center">
        <Button
          variant="danger"
          onClick={onDeleteEmployee}>
          Delete
        </Button>
      </td>
    </tr>
  )
}

Employee.propTypes = {
  employee: TEmployee,
  onDeleteEmployee: PropTypes.func.isRequired,
  onEditEmployee: PropTypes.func.isRequired
};

export default Employee;