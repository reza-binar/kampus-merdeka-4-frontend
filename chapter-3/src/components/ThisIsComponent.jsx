import React, { Component, Fragment } from "react";

export class ThisIsComponent extends Component {
  state = {
    count: 0,
    showName: false,
  };

  handleOnClick = () => {
    const { count } = this.state;
    this.setState({ count: count + 1 });
  };

  toggleShowName = () => {
    const { showName } = this.state;
    this.setState({ showName: !showName });
  };

  render() {
    return (
      <Fragment>
        <p>
          Total click: <strong>{this.state.count}</strong>
        </p>
        <p>{this.state.showName ? "Fahmi Alfareza" : "No name"}</p>
        <button onClick={this.handleOnClick}>Click</button>
        <button onClick={this.toggleShowName}>Toggle Name</button>
      </Fragment>
    );
  }
}

export default ThisIsComponent;
