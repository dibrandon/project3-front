import { useState, useEffect } from 'react';

import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';


// import Sonnet from '../../components/Sonnet';

function WorldCard({nombre, breveDescripcion }) {
  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col sm={3}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="first" href="#">
                {nombre}
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second" href="#">
                Tab 2
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="first">
            <p>
             {breveDescripcion}
              </p>
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              <p>
              When thou shalt be dispos'd to set me light, And place my merit in the eye of scorn, Upon thy side, against myself I'll fight, And prove thee virtuous, though thou art forsworn.When thou shalt be dispos'd to set me light, And place my merit in the eye of scorn, Upon thy side, against myself I'll fight, And prove thee virtuous, though thou art forsworn.When thou shalt be dispos'd to set me light, And place my merit in the eye of scorn, Upon thy side, against myself I'll fight, And prove thee virtuous, though thou art forsworn.When thou shalt be dispos'd to set me light, And place my merit in the eye of scorn, Upon thy side, against myself I'll fight, And prove thee virtuous, though thou art forsworn.When thou shalt be dispos'd to set me light, And place my merit in the eye of scorn, Upon thy side, against myself I'll fight, And prove thee virtuous, though thou art forsworn.When thou shalt be dispos'd to set me light, And place my merit in the eye of scorn, Upon thy side, against myself I'll fight, And prove thee virtuous, though thou art forsworn.When thou shalt be dispos'd to set me light, And place my merit in the eye of scorn, Upon thy side, against myself I'll fight, And prove thee virtuous, though thou art forsworn.When thou shalt be dispos'd to set me light, And place my merit in the eye of scorn, Upon thy side, against myself I'll fight, And prove thee virtuous, though thou art forsworn.When thou shalt be dispos'd to set me light, And place my merit in the eye of scorn, Upon thy side, against myself I'll fight, And prove thee virtuous, though thou art forsworn.When thou shalt be dispos'd to set me light, And place my merit in the eye of scorn, Upon thy side, against myself I'll fight, And prove thee virtuous, though thou art forsworn.When thou shalt be dispos'd to set me light, And place my merit in the eye of scorn, Upon thy side, against myself I'll fight, And prove thee virtuous, though thou art forsworn.When thou shalt be dispos'd to set me light, And place my merit in the eye of scorn, Upon thy side, against myself I'll fight, And prove thee virtuous, though thou art forsworn.When thou shalt be dispos'd to set me light, And place my merit in the eye of scorn, Upon thy side, against myself I'll fight, And prove thee virtuous, though thou art forsworn.When thou shalt be dispos'd to set me light, And place my merit in the eye of scorn, Upon thy side, against myself I'll fight, And prove thee virtuous, though thou art forsworn.When thou shalt be dispos'd to set me light, And place my merit in the eye of scorn, Upon thy side, against myself I'll fight, And prove thee virtuous, though thou art forsworn.When thou shalt be dispos'd to set me light, And place my merit in the eye of scorn, Upon thy side, against myself I'll fight, And prove thee virtuous, though thou art forsworn.When thou shalt be dispos'd to set me light, And place my merit in the eye of scorn, Upon thy side, against myself I'll fight, And prove thee virtuous, though thou art forsworn.When thou shalt be dispos'd to set me light, And place my merit in the eye of scorn, Upon thy side, against myself I'll fight, And prove thee virtuous, though thou art forsworn.When thou shalt be dispos'd to set me light, And place my merit in the eye of scorn, Upon thy side, against myself I'll fight, And prove thee virtuous, though thou art forsworn.When thou shalt be dispos'd to set me light, And place my merit in the eye of scorn, Upon thy side, against myself I'll fight, And prove thee virtuous, though thou art forsworn.
              </p>
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}

export default WorldCard;