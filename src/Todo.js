import React from "react";
import Button from "react-bootstrap/Button";

class Todo extends React.Component {
  render() {
    console.log(this.props);
    return (
      <tr>
        <td>{this.props.id}</td>

        <td>
          <span
            style={{
              textDecoration: this.props.completed ? "line-through" : "none",
            }}
            onClick={this.props.onClick}
          >
            {this.props.text}
          </span>
        </td>

        <td>
          <Button variant="danger" onClick={this.props.removeClick}>
            remove
          </Button>
        </td>
      </tr>
    );
  }
}

export default Todo;
