import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {useForm} from 'react-final-form-hooks';
import PropTypes from 'prop-types';

import {TEmployee} from '../helpers/types';
import FormGroup from '../components/FormGroup';

const emptyEmployee = {
  firstName: '',
  lastName: '',
  position: '',
  description: '',
};

const validate = (value) => {
  return value && value.length > 0 ? undefined : 'Обязательное поле'
};

function ModalAddEmployee({onSave, onHide, show, employee}) {
  const {form, values, handleSubmit, pristine, submitting, invalid} = useForm({
    onSubmit: (event) => {
      onSave(event, values);
      setTimeout(form.reset);
    },
    initialValues: employee || emptyEmployee,
  });
  const isEditing = !!employee;
  const title = isEditing ? `Edit "${employee.firstName}"` : 'Add New Employee';

  return (
    <Modal show={show}
           onHide={onHide}
           aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title>
          {title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FormGroup field="firstName"
                   form={form}
                   placeholder="Enter First Name"
                   label="First Name"
                   validate={validate}/>
        <FormGroup field="lastName"
                   form={form}
                   placeholder="Enter Last Name"
                   label="Last Name"
                   validate={validate}/>
        <FormGroup field="position"
                   form={form}
                   placeholder="Enter Position"
                   label="Position"
                   validate={validate}/>
        <FormGroup field="description"
                   form={form}
                   as="textarea"
                   rows="3"
                   placeholder="Enter Description"
                   label="Description"/>
      </Modal.Body>

      <Modal.Footer>
        <Button disabled={pristine || submitting || invalid} onClick={handleSubmit}>Save</Button>
      </Modal.Footer>
    </Modal>
  )
}

ModalAddEmployee.propTypes = {
  onSave: PropTypes.func.isRequired,
  onHide: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  employee: TEmployee
};

export default ModalAddEmployee;