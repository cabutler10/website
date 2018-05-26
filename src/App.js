import React, { Component, Fragment } from "react";
import { translate } from "react-i18next";
import { MuiThemeProvider } from "material-ui/styles";
import theme from "./theme/MUI";
import Header from "./screen/header/Header";
import Footer from "./screen/Footer";
import Splash from "./screen/main/Splash";
import Interests from "./screen/main/Interests";
import About from "./screen/main/About";
import Resume from "./screen/resume/Resume";
import UpdateSnackbar from "./components/snackbar/snackbar";

class App extends Component {
  state = {
    page: "home",
    language: "en"
  };

  handlePageChange = page => {
    this.setState({ page });
  };

  handleLanguageChange = language => {
    this.props.i18n.changeLanguage(language);
    this.setState({ language });
  };

  render() {
    const { page, language } = this.state;
    return (
      <MuiThemeProvider theme={theme}>
        <UpdateSnackbar message={"Language Updated"} isSuccess={true} />
        <Header
          handlePageChange={this.handlePageChange}
          handleLanguageChange={this.handleLanguageChange}
          language={language}
        />
        {page === "home" && (
          <Fragment>
            <Splash />
            <Interests />
            <About />
          </Fragment>
        )}
        {page === "resume" && (
          <Fragment>
            <Resume />
          </Fragment>
        )}
        <Footer />
      </MuiThemeProvider>
    );
  }
}

export default translate()(App);
