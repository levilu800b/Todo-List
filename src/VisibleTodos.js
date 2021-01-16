import React from "react";
import Table from "react-bootstrap/Table";
import Todo from "./Todo";

class VisibleTodos extends React.Component {
  render() {
    return (
      <>
        <Table>
          <thead>
            <tr>
              <th> ID</th>
              <th>TodoList</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.props.items.map((item) => (
              <Todo
                key={item.id}
                {...item}
                onClick={() => this.props.onItemClick(item.id)}
                removeClick={() => this.props.removeClick(item.id)}
              />
            ))}
          </tbody>
        </Table>
      </>
    );
  }
}

export default VisibleTodos;
