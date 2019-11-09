import React, { Component } from "react";

import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import LinearProgress from "@material-ui/core/LinearProgress";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  root: {
    backgroundColor: "#f5f5f5",
    [theme.breakpoints.up("lg")]: {
      minHeight: "100vh"
    }
  },
  container: {
    padding: "10px 0"
  },
  divider: {
    margin: "20px 0",
    width: "100%"
  },
  content: {
    margin: "0",
    padding: "1px"
  },
  avatar: {
    margin: "auto",
    width: "56px",
    height: "56px"
  },
  profile_img: {
    margin: "auto",
    backgroundColor: "blue",
    width: "96px",
    height: "96px"
  },
  headline: {
    width: "40px",
    height: "24px",
    fontFamily: "Roboto",
    fontSize: "20px",
    fontWeight: "500",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "normal",
    letterSpacing: "0.25px",
    textAlign: "center",
    color: "#ffffff"
  },
  headline6: {
    margin: "0",
    "font-size": "20px"
  },
  caption: {
    width: "40px",
    height: "16px",
    "font-size": "12px",
    "font-weight": "normal",
    "font-stretch": "normal",
    "font-style": "normal",
    "line-height": "1.33",
    "letter-spacing": "0.4px",
    "text-align": "center",
    color: "#ffffff"
  },
  profile_name: {
    "font-size": "24px",
    [theme.breakpoints.up("lg")]: {
      "padding-bottom": "30px"
    }
  },
  progress_line: {
    flexGrow: 1,
    padding: "10px"
  },
  intake_types: {
    margin: "auto"
  }
});

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      profile: []
    };
  }

  sumCalories = intakes => {
    if (intakes.length) {
      return intakes.reduce(
        (a, b) => a + (b.serving_size / b.serving_qty) * b.nf_calories,
        0
      );
    }
    return 0;
  };

  sumCaloriesByType = (intakes, type) => {
    if (intakes.length) {
      return intakes.reduce(
        (a, b) =>
          b.meal_type == type
            ? a + (b.serving_size / b.serving_qty) * b.nf_calories
            : a,
        0
      );
    }
    return 0;
  };

  calculateGoalPercentage = (currentCalories, goalCalories) => {
    const calories = (currentCalories / goalCalories) * 100;
    return calories > 100 ? 100 : Number(calories.toFixed(1));
  };

  roundNumber = number => {
    return Number(parseFloat(number).toFixed(1));
  };

  render() {
    const { intake_list, profile } = this.props;
    const { classes } = this.props;
    const currentCalories = this.sumCalories(intake_list);
    const types = ["breakfast", "lunch", "snack", "dinner"];

    return (
      <Grid className={classes.root}>
        <Grid
          container
          spacing={1}
          justify="center"
          alignItems="center"
          className={classes.container}
        >
          <Grid item xs={4}>
            <Avatar className={classes.avatar}>
              <div className="">
                <Typography variant="h6" className={classes.headline}>
                  {profile.height_cm}
                </Typography>
                <Typography variant="caption" className={classes.caption}>
                  CM
                </Typography>
              </div>
            </Avatar>
          </Grid>
          <Grid item xs={4}>
            <Avatar
              src={process.env.PUBLIC_URL + "/jane.jpg"}
              className={classes.profile_img}
            />
          </Grid>
          <Grid item xs={4}>
            <Avatar className={classes.avatar}>
              <div className="">
                <Typography variant="h6" className={classes.headline}>
                  {profile.weight_kg}
                </Typography>
                <Typography variant="caption" className={classes.caption}>
                  KG
                </Typography>
              </div>
            </Avatar>
          </Grid>
        </Grid>

        <Grid
          container
          justify="center"
          alignItems="flex-start"
          className={classes.profile_name}
        >
          <Typography variant="h5">
            {profile.first_name} {profile.last_name}
          </Typography>
        </Grid>

        <Divider className={classes.divider} />

        <Grid container spacing={3} className={classes.container}>
          <Grid item xs={6}>
            <Typography variant="h5" id="current_caloriesparseFloat">
              {this.roundNumber(currentCalories)} Cal
            </Typography>
            <Typography variant="caption">Consumed</Typography>
          </Grid>

          <Grid item xs={6}>
            <Typography variant="h5" id="goal_calories">
              {profile.daily_goal} Cal
            </Typography>
            <Typography variant="caption">Daily Goal</Typography>
          </Grid>
        </Grid>

        <div className={classes.progress_line}>
          <LinearProgress
            variant="determinate"
            value={this.calculateGoalPercentage(
              currentCalories,
              profile.daily_goal
            )}
          />
        </div>

        <Grid
          alignItems="center"
          justify="center"
          container
          className={classes.intake_types}
          spacing={4}
        >
          {types.map(type => {
            return (
              <Grid item xs={3}>
                <Typography variant="h6" className={classes.headline6}>
                  {this.sumCaloriesByType(intake_list, type)}
                </Typography>
                <Typography variant="caption">{type}</Typography>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    );
  }
}
export default withStyles(styles)(Profile);
