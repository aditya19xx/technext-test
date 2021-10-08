import Button from '@restart/ui/esm/Button';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Form, FormControl, Nav, Navbar, Row } from 'react-bootstrap';

import Data from '../Data/Data';
import './Home.css';

const Home = () => {
    const [dataApi, setDataApi] = useState([]);
    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches')
            .then(res => res.json())
            .then(data => setDataApi(data))
    }, [])
    return (
        <div className="body">
            <header>
                <Navbar bg="dark" variant="dark" expand="lg">
                    <Navbar.Brand href="#">Technext test</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="mr-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#action1">Home</Nav.Link>
                            <Nav.Link href="#action2">About</Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="mr-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
            </header>
            <div className=" w-75 mx-auto mt-5">
                <Row xs={1} md={2} className="g-4">
                  {
                      dataApi.map(dt => <Data 
                        key={"flight_number"}
                        data={dt} ></Data>)
                  }
                </Row>
            </div>
        </div>

    );
};

export default Home;