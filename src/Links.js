import React from "react";
import Nav from "react-bootstrap/Nav";
import LinkContainer from "./LinkContainers";
import { VisibilityFilters } from "./actions";

class Links extends React.Component {
  render() {
    return (
      <>
        <Nav variant="tabs" defaultActiveKey="All">
          <LinkContainer filter={VisibilityFilters.SHOW_ALL}>All</LinkContainer>
          <LinkContainer filter={VisibilityFilters.SHOW_ACTIVE}>
            Active
          </LinkContainer>
          <LinkContainer filter={VisibilityFilters.SHOW_COMPLETED}>
            Completed
          </LinkContainer>
        </Nav>
      </>
    );
  }
}

export default Links;
