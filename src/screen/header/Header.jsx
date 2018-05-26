import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";
import Button from "material-ui/Button";
import Hidden from "material-ui/Hidden";
import IconButton from "material-ui/IconButton";
import Drawer from "material-ui/Drawer";
import MenuIcon from "@material-ui/icons/Menu";
import TranslationDropdown from "./TranslationDropdown";
import Translate from "../../i18n/translate";
import MobileHeaderList from "./MobileHeaderList";

const styles = theme => ({
  button: {
    color: theme.status.grey,
    marginRight: 15
  },
  toolbarRoot: {
    justifyContent: "space-between"
  },
  appbar: {
    boxShadow: "none",
    backgroundColor: theme.status.greyLt
  }
});

class Header extends Component {
  state = {
    isOpen: false
  };
  handleDrawer = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };
  render() {
    const {
      handlePageChange,
      handleLanguageChange,
      language,
      classes
    } = this.props;
    const links = ["home", "resume"]; //"porfolio","photo","contact"
    return (
      <AppBar position="static" className={classes.appbar}>
        <Toolbar
          classes={{
            root: classes.toolbarRoot,
            gutters: classes.toolbarGutters
          }}
        >
          <Typography variant="title" color="primary">
            A.B
          </Typography>
          <Hidden mdUp>
            <IconButton
              aria-label={<Translate value="menu" />}
              className={classes.menuToggle}
              onClick={this.handleDrawer}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={this.state.isOpen}
              onClose={this.handleDrawer}
            >
              <div
                tabIndex={0}
                role="button"
                onClick={this.handleDrawer}
                onKeyDown={this.handleDrawer}
              >
                <MobileHeaderList
                  links={links}
                  handlePageChange={handlePageChange}
                  handleLanguageChange={handleLanguageChange}
                  language={language}
                />
              </div>
            </Drawer>
          </Hidden>
          <Hidden smDown>
            <span>
              {links.map((link, idx) => (
                <Button
                  key={`link_${link}`}
                  className={classes.button}
                  onClick={() => {
                    handlePageChange(link);
                  }}
                >
                  <Translate value={link} />
                </Button>
              ))}
              <TranslationDropdown
                buttonClass={classes.button}
                handleLanguageChange={handleLanguageChange}
                language={language}
              />
            </span>
          </Hidden>
        </Toolbar>
      </AppBar>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  handlePageChange: PropTypes.func.isRequired
};

export default withStyles(styles)(Header);
