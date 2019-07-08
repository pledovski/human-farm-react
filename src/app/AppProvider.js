import React, { Component } from "react";

export const AppContext = React.createContext();

export class AppProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      offer: "Crypto Processing",
      displayOffer: false,
      setOffer: this.setOffer,
      toggleDisplayOffer: this.toggleDisplayOffer
    };
  }
  setOffer = offer => this.setState({ offer });
  toggleDisplayOffer = displayOffer => {
    this.setState({ displayOffer });
    console.log(this.state);
  };

  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
