import axios from "axios";
import React from "react";
import {Component} from "react";
import { Button, Col, Container, Navbar, NavbarBrand, Row } from "react-bootstrap";
import {IoSchoolOutline} from "react-icons/io5"
import { Card,CardBody, CardSubtitle, CardText, CardTitle } from "reactstrap";
import { ToastContainer, toast } from 'react-toastify';
import { CreationModel } from "./CreationModel";


interface MyState{
    isOpen : boolean,
    servers : [];
}

class Dashboard extends Component<{}, MyState> {
    
    state : MyState ={
        isOpen: false,
        servers : [],
    };
    
    componentDidMount (){
        axios.get('http://localhost:7070/servers')
        .then(res=>{
            const servers =res.data
            this.setState({servers})
        })
    }

toggle=()=>{
    this.setState((prevState) =>({ isOpen : !prevState.isOpen}));
}

render(){
    return(
        <div>
            <Navbar color ="dark" bg="dark" mb-2 >
                <NavbarBrand className="text-white">
                    
                    <span className="font-size-xl ml-3"> task-4-UI </span>
                    

                </NavbarBrand>
            </Navbar>
            <Container>
                <CreationModel isOpen={this.state.isOpen} toggle={this.toggle}></CreationModel>
            </Container>
            <Container className="mt-4"> 
               <Row>
                    <Col sm="12">
                        <Button className="btn-block btn-success" onClick={this.toggle}>
                            <span className="font-size-xxl"> Add new Server </span>
                        </Button>
                    </Col>
                </Row>     
            </Container>
            <Container className="mt-4">
                <span className="text-size-xxl">
                    ALL SERVERS!!
                </span>
            </Container>
            <Container className="mt-4">
                {this.state.servers.map(server => renderServer(server))}
            </Container>
            
        </div>
    );
}
}
function renderServer(sv) {
    return(
        <div>
         <Card className="text-center">
             
             <CardBody>
                 <CardSubtitle tag="h5">Server Id : {sv.serverId}</CardSubtitle>
                 <CardText>Server Name : {sv.serverName}</CardText>
                 <CardText>Server Type : {sv.serverType}</CardText>
                 <Container className="text-center">
                     
                     <Button className="btn-info" onClick={()=>{
                         deleteServer(sv.serverId);
                     }}>Delete</Button>
                      
                     
                     
                 </Container>
             </CardBody>
         </Card>
        </div>
    );
}
function deleteServer(serverId:any): void {
    axios.delete(`http://localhost:7070/servers/delete/${serverId}`)
    
    
}



  

export default Dashboard





