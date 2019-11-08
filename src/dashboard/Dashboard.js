import React, { Component } from "react";
import Profile from "./Profile";
import { diet } from "../MockData.js";
import Types from "./intakes/Types";

import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const styles = theme => ({
  root: {
    flexGrow: 1,
    zIndex: -1
  },
  item: {
    zIndex: -1
  }
});

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      profile: {},
      currentCalories: 0,
      intake_index: 0,
      currentDataPoints: []
    };

    this.inputRef = React.createRef();
  }

  addIntake = item => {
    console.log(`adding item ${item}`);
    let p = this.state.profile;

    p.data_points[0].intake_list.push(item);

    this.setState({ profile: p });
  };

  changeCurrentCalories = event => {
    let p = this.state.profile;
    p.data_points[1].intake_list.push({ nf_calories: 258 });
    this.setState({ profile: p });
  };

  findIndexByDate = date => {
    date.setHours(0, 0, 0, 0); // set the hours to 0
    if (this.state.profile) {
      for (var i = 0; i < this.state.profile.data_points.length; i++) {
        let dataDate = new Date(this.state.profile.data_points[i].date);
        dataDate.setHours(0, 0, 0, 0);
        if (date.getTime() == dataDate.getTime()) {
          this.setState({ intake_index: i });
          return;
        }
      }
    }
    // if not date found then just set the index to -1 so it wont fetch any data
    this.setState({ intake_index: -1 });
  };

  findDataPoints = index => {
    const data = this.state.profile.data_points
      ? this.state.profile.data_points[this.state.intake_index]
      : null;
    if (data) {
      return data.intake_list;
    } else {
      return [];
    }
  };

  render() {
    const { classes } = this.props;
    const intake_list = this.findDataPoints(this.state.intake_index);
    return (
      <Grid container spacing={3}>
        <Grid className={classes.item} item xs={12} md={5}>
          <Profile profile={this.state.profile} intake_list={intake_list} />
        </Grid>

        <Grid className={classes.item} item xs={12} md={7}>
          <Types intake_list={intake_list} />
        </Grid>
      </Grid>
    );
  }

  componentDidMount() {
    this.setState({
      profile: diet
    });
  }
}

export default withStyles(styles)(Dashboard);
