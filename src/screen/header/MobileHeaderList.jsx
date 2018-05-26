import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import List, { ListItem, ListItemText } from "material-ui/List";
import ArrowIcon from "@material-ui/icons/KeyboardArrowRight";
import Translate from "../../i18n/translate";
import MobileTranslateButtons from "./MobileTranslateButtons";

const styles = theme => ({
  list: {
    width: 200
  },
  text: {
    textTransform: "uppercase",
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 30,
    paddingRight: 30,
    color: theme.status.greyDk
  },
  icon: {
    color: theme.status.grey
  }
});

const MobileHeaderList = props => {
  const {
    links,
    handlePageChange,
    handleLanguageChange,
    language,
    classes
  } = props;

  return (
    <div className={classes.list}>
      <List component="nav">
        {links.map(link => (
          <ListItem
            button
            divider
            dense
            key={`mobileLink_${link}`}
            onClick={() => {
              handlePageChange(link);
            }}
          >
            <ListItemText
              disableTypography
              className={classes.text}
              primary={<Translate value={link} />}
            />
            <ArrowIcon className={classes.icon} />
          </ListItem>
        ))}
        <ListItem dense>
          <ListItemText
            disableTypography
            className={classes.text}
            primary={<Translate value="language" />}
          />
        </ListItem>
        <MobileTranslateButtons
          handleLanguageChange={handleLanguageChange}
          language={language}
        />
      </List>
    </div>
  );
};

MobileHeaderList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MobileHeaderList);
