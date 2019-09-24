import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ModalDeleteEntity({show, onHide, onDelete}) {
  return (
    <Modal show={show}
           onHide={onHide}
           aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title>
          Are You sure you want to delete
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <Button variant="danger" onClick={onDelete}>Delete</Button>
          </Col>
          <Col md="auto">
            <Button variant="secondary" onClick={onHide}>Cancel</Button>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
}

ModalDeleteEntity.propTypes = {
  onDelete: PropTypes.func.isRequired,
  onHide: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
};


export default ModalDeleteEntity;