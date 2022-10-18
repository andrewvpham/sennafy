import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import {useEffect, useState} from 'react';
import Service from "./services/apiservice";
import logo from './logo.svg';
import Table from 'react-bootstrap/Table';



function Players() {

    const [apiLoaded, setApiLoaded] = React.useState(false);
    const [apiData, setApiData] = React.useState(null);

    /*const fetchApiData = async () => {
        const newdata = await Service.getSummonerData()
        setApiData(newdata);

      }

    if(apiLoaded==false) {
        fetchApiData();
        setApiLoaded(true);
    } */

    return(
<Container>
            <Card>
                <Card.Body>
                <Card.Title>Senna Main Player Data</Card.Title>
                    
                </Card.Body>
            </Card>
        </Container>
    );
}

export default Players;