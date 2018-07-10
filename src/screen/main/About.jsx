import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Hidden from "@material-ui/core/Hidden";
import headshot from "./img/profile.jpg";
import Button from "@material-ui/core/Button";
import linkedinIcon from "../../theme/icons/linkedin-in.svg";
import gitIcon from "../../theme/icons/github.svg";
import instagramIcon from "../../theme/icons/instagram.svg";
import Translate from "../../i18n/translate";

const styles = theme => ({
  root: {
    padding: 15,
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    [theme.breakpoints.up("md")]: {
      padding: 90
    }
  },
  title: {
    letterSpacing: 3,
    transform: "rotate(90deg)",
    WebkitTransform: "rotate(90deg)",
    MsTransform: "rotate(90deg)",
    OTransform: "rotate(90deg)",
    width: 240,
    textAlign: "right",
    transformOrigin: "left top 0"
  },
  textHeading: {
    textTransform: "uppercase",
    letterSpacing: 3,
    paddingTop: 30,
    paddingBottom: 30
  },
  body: {
    paddingTop: 30,
    [theme.breakpoints.up("md")]: {
      paddingTop: 0,
      marginLeft: 60
    }
  },
  img: {
    width: 300,
    height: 300,
    marginRight: 0,
    [theme.breakpoints.up("md")]: {
      marginRight: 60
    }
  },
  button: {
    padding: 8,
    minWidth: 36,
    marginRight: 15,
    marginLeft: 15,
    marginTop: 30,
    marginBottom: 5,
    [theme.breakpoints.up("md")]: {
      marginLeft: 60
    }
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "space-around",
    [theme.breakpoints.up("md")]: {
      display: "block"
    }
  },
  icon: {
    color: theme.status.pink,
    width: 24,
    height: 24
  },
  col: {
    display: "flex",
    flexDirection: "column",
    width: "90%",
    justifyContent: "flex-end",
    [theme.breakpoints.up("md")]: {
      width: "35%"
    }
  }
});

class About extends Component {
  render() {
    let { classes } = this.props;
    return (
      <div className={classes.root}>
        <Hidden mdUp>
          <Typography
            variant="title"
            color="primary"
            className={classes.textHeading}
          >
            <Translate value="about_header" />
          </Typography>
        </Hidden>
        <img src={headshot} className={classes.img} alt="" />

        <div className={classes.col}>
          <Hidden smDown>
            <Typography
              variant="title"
              color="primary"
              className={classes.title}
            >
              <Translate value="about_header" />
            </Typography>
          </Hidden>
          <Typography variant="body1" color="primary" className={classes.body}>
            I am a Data Scientist who currently spends all of my time doing
            Front End Web Development with React. I love the idea of being able
            to make statistics something everyone can use by building online
            tools and tutorials. <br /> <br /> My personal interests include
            hiking, floating down rivers, and pretending to be a wildlife
            photographer.
          </Typography>
          <span className={classes.buttonContainer}>
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
          </span>
        </div>
      </div>
    );
  }
}

About.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(About);
