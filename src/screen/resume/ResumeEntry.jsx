import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from "@material-ui/icons/Dashboard";
import BulletIcon from "@material-ui/icons/Stop";

const styles = theme => ({
  icon: {
    width: 48,
    height: 48,
    marginRight: 0,
    color: theme.status.green,
    [theme.breakpoints.up("md")]: {
      width: 64,
      height: 64
    }
  },
  list: {
    [theme.breakpoints.up("md")]: {
      marginLeft: 30
    }
  },
  secondary: { fontSize: 14, color: theme.status.greyDk },
  primary: {
    fontWeight: 600,
    color: theme.status.greyDk
  },
  right: {
    float: "right"
  },
  location: { color: theme.status.grey },
  bullet: { width: 16, height: 16 },
  listItem: {
    marginLeft: 15,
    paddingLeft: 0,
    paddingRight: 0,
    width: "75%",
    [theme.breakpoints.up("md")]: {
      marginLeft: 115,
      paddingLeft: 15,
      paddingRight: 15
    }
  },
  listItemBullet: {
    marginLeft: 15,
    paddingLeft: 0,
    paddingRight: 0,
    [theme.breakpoints.up("md")]: {
      marginLeft: 115,
      paddingLeft: 15,
      paddingRight: 15
    }
  }
});

class ResumeEntry extends Component {
  render() {
    let { title, company, date, listItems, classes } = this.props;
    return (
      <List className={classes.list}>
        <ListItem disableGutters>
          <ListItemIcon>
            <DashboardIcon className={classes.icon} />
          </ListItemIcon>
          <ListItemText
            classes={{
              secondary: classes.secondary,
              primary: classes.primary
            }}
            primary={
              <Fragment>
                {title}
                {date && <span className={classes.right}>{date}</span>}
              </Fragment>
            }
            secondary={company}
          />
        </ListItem>
        {listItems &&
          listItems.map(elem => (
            <ListItem key={elem} className={classes.listItemBullet} dense>
              <ListItemIcon>
                <BulletIcon className={classes.bullet} />
              </ListItemIcon>
              <ListItemText
                classes={{
                  secondary: classes.secondary
                }}
                secondary={elem}
              />
            </ListItem>
          ))}
      </List>
    );
  }
}

ResumeEntry.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ResumeEntry);
