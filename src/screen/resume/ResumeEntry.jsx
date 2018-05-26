import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Typography from "material-ui/Typography";
import List, { ListItem, ListItemIcon, ListItemText } from "material-ui/List";
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
  secondary: { color: theme.status.greyDk },
  primary: {
    fontWeight: 600
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
  },
  listItemText: { fontSize: 14 }
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
              secondary: classes.secondary
            }}
            primary={
              <Typography
                variant="body1"
                color="primary"
                className={classes.primary}
              >
                {title}
                {date && <span className={classes.right}>{date}</span>}
              </Typography>
            }
            secondary={company}
          />
        </ListItem>
        {listItems &&
          listItems.map(elem => (
            <ListItem className={classes.listItemBullet} dense>
              <ListItemIcon>
                <BulletIcon className={classes.bullet} />
              </ListItemIcon>
              <ListItemText
                secondary={
                  <Typography
                    variant="body1"
                    color="primary"
                    className={classes.listItemText}
                  >
                    {elem}
                  </Typography>
                }
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
