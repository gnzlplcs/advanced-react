import React from "react";
const { Provider, Consumer } = React.createContext();

class ThemeContextProvider extends React.Component {
  render() {
    return (
      <Provider value={"dark"}>
        {this.props.children}
      </Provider>
    )
  }
}

export { ThemeContextProvider, Consumer as ThemeContextConsumer };
