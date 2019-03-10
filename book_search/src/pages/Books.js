import React, { Component } from 'react';
import { Container, Row, Jumbotron, Col, Form, FormGroup, Label, Input, Button } from "reactstrap";





class Books extends Component {
  
    
  
  
  
    render() {
    return (
      <Container fluid>
        <Row>
            <Col size="md-6">
                <Jumbotron>
                    <h1>(React) Google Books Search</h1>
                </Jumbotron>
            
                <Jumbotron>
                   <h2>Book Search</h2>
                    <Form>
                        <FormGroup>
                            <Label for="bookSearch">Book</Label>
                            <Input
                                type="bookTitle"
                                name="bookTitle"
                                id="bookTitle"
                                placeholder="Book Title"
                            />
                        </FormGroup>
                    </Form>
                    <Button color="secondary" size="lg" block>Search</Button>

                </Jumbotron>
            </Col>
        </Row>
      </Container>
    )
  }
}
export default Books;