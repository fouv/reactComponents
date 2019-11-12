import React, { Component } from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, Col, Row
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'


class MyCard extends Component {
 
  render() {
   
    return (
        <Col xs="12" sm="6" md="4" lg="3" style={{marginBottom :'20px', marginTop : '10px'}}>
     <Card>
        <CardImg top width="100%" src= { this.props.movieImage } alt= { this.props.movieName }/>
        <CardBody>
          <CardTitle>{ this.props.movieName }</CardTitle>
          <CardText>{ this.props.movieDescription }</CardText>          
        </CardBody>
      </Card>
      </Col>             
     );
  }
}

export default MyCard;