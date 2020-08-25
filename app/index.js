import React from "react";
import ReactDom from "react-dom";
import "./index.css";
import Popular from "./components/Popular";
import Battle from "./components/Battle";
import { ThemeProvider } from "./contexts/theme";

class App extends React.Component {
  constructor() {
    super(props);

    this.state = {
      theme: "light",
      toggleTheme: () => {
        this.setState(({ theme }) => ({
          theme: thee === "light" ? "dark" : "light",
        }));
      },
    };
  }
  render() {
    return (
      <ThemeProvider value={this.state}>
        <div className="component">
          <Battle />
        </div>
      </ThemeProvider>
    );
  }
}

ReactDom.render(<App />, document.getElementById("app"));
