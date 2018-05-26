import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Menu, { MenuItem } from "material-ui/Menu";
import Button from "material-ui/Button";

const styles = theme => ({ menu: { width: 100 }, menuItem: { fontSize: 16 } });

class TranslationDropdown extends Component {
  state = {
    language: null,
    anchorEl: null
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.language !== prevState.language) {
      return { language: nextProps.language };
    } else {
      return null;
    }
  }

  handleOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = language => {
    if (language) {
      this.props.handleLanguageChange(language);
    }
    this.setState({ anchorEl: null });
  };

  render() {
    const { buttonClass, classes } = this.props;
    const { anchorEl, language } = this.state;

    return (
      <Fragment>
        <Button
          aria-owns={anchorEl ? "language-menu" : null}
          aria-haspopup="true"
          onClick={this.handleOpen}
          className={buttonClass}
        >
          {language}
        </Button>
        <Menu
          id="language-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          getContentAnchorEl={null}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left"
          }}
          onClose={this.handleClose}
          classes={{ paper: classes.menu }}
        >
          <MenuItem
            onClick={() => this.handleClose("de")}
            className={classes.menuItem}
          >
            DE
          </MenuItem>
          <MenuItem
            onClick={() => this.handleClose("en")}
            className={classes.menuItem}
          >
            EN
          </MenuItem>
        </Menu>
      </Fragment>
    );
  }
}

TranslationDropdown.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TranslationDropdown);
