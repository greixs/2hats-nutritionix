import React, { Component } from "react";
import Moment from "react-moment";

import Grid from "@material-ui/core/Grid";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIosOutlined";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    padding: "10px 0"
  }
});

class DatePicker extends Component {
  render() {
    const { classes } = this.props;
    const { date, onClick } = this.props;
    return (
      <div className={classes.root}>
        <Grid container justify="center">
          <ArrowBackIosIcon onClick={() => onClick(-1)} />

          <Moment format="YYYY/MM/DD">{date}</Moment>

          <ArrowForwardIosIcon onClick={() => onClick(1)} />
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(DatePicker);
