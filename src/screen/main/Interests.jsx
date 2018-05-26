import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Typography from "material-ui/Typography";
import CodeIcon from "@material-ui/icons/Code";
import TimelineIcon from "@material-ui/icons/Timeline";
import UploadIcon from "@material-ui/icons/CloudUpload";
import Translate from "../../i18n/translate";

const styles = theme => ({
  root: {
    backgroundColor: theme.status.white,
    textAlign: "center",
    padding: 15,
    [theme.breakpoints.up("md")]: {
      padding: 60
    }
  },
  text: {
    textTransform: "uppercase",
    letterSpacing: 3,
    paddingBottom: 15
  },
  textHeading: {
    textTransform: "uppercase",
    letterSpacing: 3,
    paddingBottom: 0,
    paddingTop: 30,
    [theme.breakpoints.up("md")]: {
      paddingBottom: 15,
      paddingTop: 0
    }
  },
  flex: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    padding: 0,
    [theme.breakpoints.up("md")]: {
      padding: 30
    }
  },
  box: {
    textAlign: "center",
    padding: 15,
    fontSize: 64,
    width: 300
  },
  icons: { fontSize: 72, color: theme.status.greyDk }
});

class Interests extends Component {
  render() {
    let { classes } = this.props;
    return (
      <div className={classes.root}>
        <Typography
          variant="title"
          color="primary"
          className={classes.textHeading}
        >
          <Translate value="interests_header" />
        </Typography>
        <div className={classes.flex}>
          <div className={classes.box}>
            <TimelineIcon className={classes.icons} />
            <Typography
              variant="title"
              color="primary"
              className={classes.text}
            >
              <Translate value="interests_statistics" />
            </Typography>
            <Typography variant="body1" color="primary">
              <Translate value="interests_statisticsBody" />
            </Typography>
          </div>
          <div className={classes.box}>
            <CodeIcon className={classes.icons} />
            <Typography
              variant="title"
              color="primary"
              className={classes.text}
            >
              <Translate value="interests_development" />
            </Typography>
            <Typography variant="body1" color="primary">
              <Translate value="interests_developmentBody" />
            </Typography>
          </div>
          <div className={classes.box}>
            <UploadIcon className={classes.icons} />
            <Typography
              variant="title"
              color="primary"
              className={classes.text}
            >
              <Translate value="interests_teaching" />
            </Typography>
            <Typography variant="body1" color="primary">
              <Translate value="interests_teachingBody" />
            </Typography>
          </div>
        </div>
      </div>
    );
  }
}

Interests.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Interests);
