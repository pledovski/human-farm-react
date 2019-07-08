import React, { Component } from "react";

export const AppContext = React.createContext();

export class AppProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      offer: "Crypto Processing",
      setOffer: this.setOffer
    };
  }
  setOffer = offer => this.setState({ offer });

  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
