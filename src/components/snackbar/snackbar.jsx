import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Snackbar from "material-ui/Snackbar";

const styles = theme => ({
  close: {
    width: theme.spacing.unit * 4,
    height: theme.spacing.unit * 4
  }
});

class UpdateSnackbar extends Component {
  state = {
    open: true
  };

  handleClick = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { isSuccess, message, classes } = this.props;
    const { open } = this.state;
    return (
      <div>
        <Snackbar
          autoHideDuration={1000}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          open={open}
          onClose={this.handleClose}
          ContentProps={{
            "aria-describedby": "message-id",
            classes: {
              root: isSuccess ? classes.success : classes.error
            }
          }}
          message={<span id="message-id">{message}</span>}
        />
      </div>
    );
  }
}

UpdateSnackbar.propTypes = {
  isSuccess: PropTypes.bool,
  message: PropTypes.string.isRequired,
  onExit: PropTypes.func
};

export default withStyles(styles)(UpdateSnackbar);
