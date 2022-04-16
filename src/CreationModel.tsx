import axios from "axios";
import { Component } from "react";
import { Button, Col, Form, Modal, ModalBody, ModalHeader, Row } from "react-bootstrap";

type MyProps={
    isOpen : boolean
    toggle
    
}

export class CreationModel extends Component<MyProps>{

    handleSubmit=(event)=>{
        event.preventDefault()
        const data=new FormData(event.target)
        const server={
            serverId : data.get("serverId"),
            serverName : data.get("serverName"),
            serverType : data.get("serverType")
        }
        axios.put(`http://localhost:7070/servers`,server)
        this.props.toggle()
    }
    render(){
        
        return(
            <Modal isOpen ={this.props.isOpen} toggle = {this.props.toggle}>
                <ModalHeader>
                    Adding new server
                </ModalHeader>
                <ModalBody>
                <Form>
                    <Row>
                        <Col>
                        <label>Server Id</label>
                        </Col>
                        <Col>
                        <input id="serverId" name="serverId" type="number"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <label>Server Name</label>
                        </Col>
                        <Col>
                        <input id="serverName" name="serverName" type="text"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <label>Server Name</label>
                        </Col>
                        <Col>
                        <input id="serverType" name="serverType" type="text"/>
                        </Col>
                    </Row>
                    <Button className="btn-primary">
                        createNewServer
                    </Button>
                </Form>

                

                </ModalBody>
            </Modal>
        );
    }

}