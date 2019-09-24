import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Link from '../components/Link';

function Header({title}) {
  return [
    <Head key="head">
      <title>{title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport"/>
    </Head>,
    <Navbar key="nav" bg="light" expand="lg">
      <Container>
        <Row>
          <Navbar.Brand href="/">Employees App</Navbar.Brand>
        </Row>
      </Container>
    </Navbar>
  ]
}

Header.propTypes = {
  title: PropTypes.string.isRequired
};

export default Header;