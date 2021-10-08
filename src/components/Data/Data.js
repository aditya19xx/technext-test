import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Data = (props) => {
    const {upcoming, launch_year, nationality, mission_name, launch_success, launch_date_utc, launch_date_local,  mission_patch, mission_patch_small, links} = props.data;
    return (
        <div>
            <Col>
                <Card>
                    <Card.Img variant="top" src={links.mission_patch} />
                    <Card.Body>
                        <Card.Title><h1>{mission_name}</h1></Card.Title>
                        <Card.Text>
                           <h3>  {upcoming} </h3>
                           <h5>Launch Date : {launch_date_local} </h5>
                           <h5>Launch Year: {launch_year}</h5>
                           
                           <h5>Launch Status : {launch_success}</h5>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Data;