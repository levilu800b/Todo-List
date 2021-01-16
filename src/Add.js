import React from "react";
import { connect } from "react-redux";
import { addItem } from "./actions";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class Add extends React.Component {
  render() {
    let input;

    return (
      <Card className="mb-5 mt-2">
        <Card.Body>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              if (!input.value.trim()) {
                return;
              }
              console.log(input.value);
              this.props.dispatch(addItem(input.value));
              input.value = "";
            }}
          >
            <input
              ref={(node) => {
                input = node;
              }}
            />
            <Button className="ml-5" type="submit">
              Add Todo
            </Button>
          </Form>
        </Card.Body>
      </Card>
    );
  }
}

export default connect()(Add);
