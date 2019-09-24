import React, {useEffect, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import {useDispatch, useSelector} from 'react-redux';

import {employeesDelete, employeesGet, employeesPost, employeesPut} from '../actions/employees';
import Employee from '../components/Employee';
import ModalAddEmployee from '../components/ModalAddEmployee';
import ModalDeleteEntity from '../components/ModalDeleteEntity';
import Page from '../components/Page';

function EmployeesRoute() {
  useEffect(() => {
    dispatch(employeesGet());
  }, []);

  const [addModalVisible, setAddModalVisible] = useState(false);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [activeEmployee, setActiveEmployee] = useState(null);

  const employees = useSelector(state => state.employees.payload);
  const loading = useSelector(state => state.employees.loading);
  const dispatch = useDispatch();

  const hideDeleteModal = () => {
    setDeleteModalVisible(false);
    setActiveEmployee(null);
  };

  const showDeleteModal = (activeEmployee) => {
    setDeleteModalVisible(true);
    setActiveEmployee(activeEmployee);
  };

  const showAddModal = (event, activeEmployee) => {
    setAddModalVisible(true);
    setActiveEmployee(activeEmployee)
  };

  const hideAddModal = () => {
    setAddModalVisible(false);
    setActiveEmployee(null)
  };

  const onAddEmployee = (event, newEmployee) => {
    dispatch(employeesPost(newEmployee));
    hideAddModal();
  };

  const onEditEmployee = (employee) => {
    dispatch(employeesPut(employee));
    hideAddModal();
  };

  const onDeleteEmployee = () => {
    dispatch(employeesDelete(activeEmployee));
    hideDeleteModal();
  };

  return (
    <Page title="Employees Page">
      <Row className="mb-4 d-flex justify-content-between">
        <h2>
          Employees List
        </h2>
        <Button onClick={showAddModal}>Add New Employee</Button>
      </Row>
      <Row>
        {loading && <div>Loading...</div>}
        {!loading && !employees.length && <div>No data</div>}
        {!loading && employees.length > 0 && <Table striped bordered hover>
          <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Employee</th>
            <th colSpan={3}>Position</th>
          </tr>
          </thead>
          <tbody>
          {employees.map((employee) =>
            <Employee employee={employee}
                      key={employee.id}
                      onEditEmployee={showAddModal}
                      onDeleteEmployee={showDeleteModal}/>
          )}
          </tbody>
        </Table>}
      </Row>
      <ModalAddEmployee show={addModalVisible}
                        employee={activeEmployee}
                        onSave={activeEmployee ? onEditEmployee : onAddEmployee}
                        onHide={hideAddModal}/>

      <ModalDeleteEntity show={deleteModalVisible}
                         onDelete={onDeleteEmployee}
                         onHide={hideDeleteModal}/>
    </Page>
  )
}

export default EmployeesRoute;

