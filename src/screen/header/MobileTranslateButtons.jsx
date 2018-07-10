import React from "react";
import PropTypes from "prop-types";
import { translate } from "react-i18next";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
    padding: 0
  },
  button: {
    flex: 1,
    margin: 5,
    minWidth: 25,
    border: "1px solid",
    borderColor: theme.status.pink,
    color: theme.status.greyDk,
    boxShadow: "none"
  }
});

const MobileTranslateButtons = props => {
  const { handleLanguageChange, language, classes } = props;
  return (
    <div className={classes.root}>
      <Button
        variant={language === "en" ? "raised" : "flat"}
        color="primary"
        onClick={() => handleLanguageChange("en")}
        className={classes.button}
      >
        EN
      </Button>
      <Button
        variant={language === "de" ? "raised" : "flat"}
        color="primary"
        onClick={() => handleLanguageChange("de")}
        className={classes.button}
      >
        DE
      </Button>
    </div>
  );
};

MobileTranslateButtons.propTypes = {
  classes: PropTypes.object.isRequired
};

export default translate()(withStyles(styles)(MobileTranslateButtons));
