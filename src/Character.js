import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import {useEffect, useState} from 'react';
import Service from "./services/apiservice";
import logo from './logo.svg';
import Table from 'react-bootstrap/Table';
import './Character.css';

function Character() {
    //https://static.wikia.nocookie.net/leagueoflegends/images/b/bc/Senna_OriginalSkin.jpg/revision/latest?cb=20210923010536

    const [apiLoaded, setApiLoaded] = React.useState(false);
    const [apiData, setApiData] = React.useState(null);
    const [sennaVersion, setSennaVersion] = React.useState(null);
    const [blurb, setBlurb] = React.useState(null);
    const [hp, sethp] = React.useState(null);
    const [hpperlevel, sethpperlevel] = React.useState(null);
    const [mp, setmp] = React.useState(null);
    const [tags1, settags1] = React.useState(null);
    const [tags2, settags2] = React.useState(null);
    const [mpperlevel, setmpperlevel] = React.useState(null);
    const [movespeed, setmovespeed] = React.useState(null);
    const [armor, setarmor] = React.useState(null);
    const [armorperlevel, setarmorperlevel] = React.useState(null);
    const [attackrange, setattackrange] = React.useState(null);
    const [attackdamage, setattackdamage] = React.useState(null);
    const [attackspeed, setattackspeed] = React.useState(null);
    const [attackspeedperlevel, setattackspeedperlevel] = React.useState(null);



    const fetchApiData = async () => {
        const newdata = await Service.getChampionData()
        setApiData(newdata);
        setSennaVersion(newdata.data.Senna.version)
        setBlurb(newdata.data.Senna.blurb)
        settags1(newdata.data.Senna.tags[0])
        settags2(newdata.data.Senna.tags[1])
        sethp(newdata.data.Senna.stats.hp)
        sethpperlevel(newdata.data.Senna.stats.hpperlevel)
        setmp(newdata.data.Senna.stats.mp)
        setmpperlevel(newdata.data.Senna.stats.mpperlevel)
        setmovespeed(newdata.data.Senna.stats.movespeed)
        setarmor(newdata.data.Senna.stats.armor)
        setarmorperlevel(newdata.data.Senna.stats.armorperlevel)
        setattackrange(newdata.data.Senna.stats.attackrange)
        setattackdamage(newdata.data.Senna.stats.attackdamage)
        setattackspeed(newdata.data.Senna.stats.attackspeed)
        setattackspeedperlevel(newdata.data.Senna.stats.attackspeedperlevel)
      }

    if(apiLoaded==false) {
        fetchApiData();
        setApiLoaded(true);
    }

    return(
        <Container>
            <Card>
            <Card.Img variant="top" src="https://static.invenglobal.com/upload/image/2019/10/16/i1571255032196880.png" />
                <Card.Body>
                <Card.Title>Champion info from version {JSON.stringify(sennaVersion)}</Card.Title>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>Details</th>
                        <th>Data</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Description</td>
                        <td>{blurb}</td>
                        </tr>
                        <tr>
                        <td>Role</td>
                        <td>{tags1}, {tags2}</td>
                        </tr>
                        <tr>
                        <td>HP</td>
                        <td>{hp}</td>
                        </tr>
                        <tr>
                        <td>HP Per Level</td>
                        <td>{hpperlevel}</td>
                        </tr>
                        <tr>
                        <td>MP</td>
                        <td>{mp}</td>
                        </tr>
                        <tr>
                        <td>MP Per Level</td>
                        <td>{mpperlevel}</td>
                        </tr>
                        <tr>
                        <td>Movespeed</td>
                        <td>{movespeed}</td>
                        </tr>
                        <tr>
                        <td>Armor</td>
                        <td>{armor}</td>
                        </tr>
                        <tr>
                        <td>Armor Per Level</td>
                        <td>{armorperlevel}</td>
                        </tr>
                        <tr>
                        <td>Attack Damage</td>
                        <td>{attackdamage}</td>
                        </tr>
                        <tr>
                        <td>Attack Range</td>
                        <td>{attackrange}</td>
                        </tr>
                        <tr>
                        <td>Attack Speed</td>
                        <td>{attackspeed}</td>
                        </tr>
                        <tr>
                        <td>Attack Speed Per Level</td>
                        <td>{attackspeedperlevel}</td>
                        </tr>
                    </tbody>
                    </Table>
                    

                </Card.Body>
            </Card>
        </Container>
            

    );
}

export default Character;