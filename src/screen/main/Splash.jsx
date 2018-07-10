import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Translate from "../../i18n/translate";
import backsplash from "../../theme/background.jpg";
import linkedinIcon from "../../theme/icons/linkedin-in.svg";
import gitIcon from "../../theme/icons/github.svg";
import instagramIcon from "../../theme/icons/instagram.svg";

const styles = theme => ({
  root: {
    height: 300,
    backgroundImage: `url(${backsplash})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.up("md")]: {
      height: 600
    }
  },
  border: {
    marginLeft: 15,
    marginRight: 15,
    paddingTop: 10,
    paddingRight: 15,
    paddingBottom: 10,
    paddingLeft: 15,
    border: "4px solid",
    background: "rgba(51,51,51,.5)",
    borderColor: theme.status.pink,
    [theme.breakpoints.up("md")]: {
      background: "none",
      marginLeft: 100,
      paddingTop: 30,
      paddingRight: 50,
      paddingBottom: 30,
      paddingLeft: 50
    }
  },
  bold: {
    fontWeight: 600,
    letterSpacing: 5,
    fontSize: 24,
    paddingTop: 15,
    paddingBottom: 15,
    [theme.breakpoints.up("md")]: {
      fontSize: 51
    }
  },
  big: {
    fontSize: 36,
    [theme.breakpoints.up("md")]: {
      fontSize: 64
    }
  },
  text: {
    textTransform: "uppercase",
    fontSize: 18,
    letterSpacing: 3,
    [theme.breakpoints.up("md")]: {
      fontSize: 24
    }
  },
  button: {
    padding: 8,
    minWidth: 36,
    marginRight: 30,
    marginTop: 30
  },
  icon: {
    width: 24,
    height: 24
  }
});

class Splash extends Component {
  render() {
    let { classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.border}>
          <Typography
            variant="subheading"
            color="textSecondary"
            className={classes.text}
          >
            <Translate value="splash_hello" />
          </Typography>
          <Typography
            variant="display2"
            color="textSecondary"
            className={classes.bold}
          >
            <span className={classes.big}>A</span>LYSSA{" "}
            <span className={classes.big}>B</span>UTLER
          </Typography>
          <Typography
            variant="subheading"
            color="textSecondary"
            className={classes.text}
          >
            DATA SCIENTIST & FRONTEND DEVELOPER
          </Typography>
          <Button
            color="primary"
            variant="raised"
            aria-label="linkedin"
            className={classes.button}
            href="https://www.linkedin.com/in/alyssa-butler-b77054ab/"
            target="_blank"
          >
            <img src={linkedinIcon} className={classes.icon} alt="" />
          </Button>
          <Button
            color="primary"
            variant="raised"
            aria-label="github"
            className={classes.button}
            href="https://github.com/cabutler10"
            target="_blank"
          >
            <img src={gitIcon} className={classes.icon} alt="" />
          </Button>
          <Button
            color="primary"
            variant="raised"
            aria-label="instagram"
            className={classes.button}
            href="https://www.instagram.com/cabutler10/"
            target="_blank"
          >
            <img src={instagramIcon} className={classes.icon} alt="" />
          </Button>
        </div>
      </div>
    );
  }
}

Splash.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Splash);
