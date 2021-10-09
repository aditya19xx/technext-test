import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Data.css';

const Data = (props) => {
    const {launch_year, mission_name, launch_date_local,  mission_patch, links, launch_success, upcoming, rocket, rocket_name} = props.data;
    return (
        <div>
            <Col>
                <Card className="bg-dark card-color rounded-3 shadow-lg p-3 mb-5  rounded"  >
                    <Card.Img className="card-img" variant="top" src={links.mission_patch} />
                    <Card.Body className="text-white">
                        <Card.Title><h1>{rocket.rocket_name}</h1></Card.Title>
                        <Card.Text>
                           
                           <h5> <span className="">Launch Date:</span> {launch_date_local} </h5>
                           <h5> <span className="card-text">Launch Year:</span> {launch_year}</h5>
                           
                           <h5> <span className="card-text">Launch Status:</span> {launch_success} </h5>
                           <h5> <span className="card-text">Is it upcoming?</span> {mission_name} </h5>
                           
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Data;