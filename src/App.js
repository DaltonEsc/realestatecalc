import React, {Component} from 'react';
import 'bootstrap'
import './App.css';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class App extends Component {


    render() {

        return (
            <div className="App">
                <Form>
                    <Form.Label>Purchase Price</Form.Label>
                    <Form.Control placeholder="Enter Price"/>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        );
    }
}


export default App;
