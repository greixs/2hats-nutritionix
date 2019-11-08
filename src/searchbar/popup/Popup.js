import React, { Component } from "react";

import QtyPicker from "./QtyPicker";

import Grid from "@material-ui/core/Grid";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import Divider from "@material-ui/core/Divider";
import FormHelperText from "@material-ui/core/FormHelperText";
import Select from "@material-ui/core/Select";
import FormLabel from "@material-ui/core/FormLabel";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  mealThumb: {
    width: "64px",
    height: "64px",
    borderRadius: "4px"
  },
  formControl: {
    display: "flex"
  },
  mealTypeSelect: {
    width: "100%"
  },
  itemInfo: {
    textAlignLast: "end"
  }
});

class Popup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      servingChangeValue: 0.5,
      base_qty: 0,
      qty: 1,
      multiplier: 1,
      mealType: "breakfast"
    };
  }

  changeQty = value => {
    if (value >= 0.5) {
      this.setState(
        {
          qty: value
        },
        () => {
          this.setState({ multiplier: this.state.qty / this.state.base_qty });
        }
      );
    }
  };

  addItem = () => {
    const { item } = this.props;
    const itemToAdd = {
      food_name: item.food_name,
      serving_qty: this.state.base_qty,
      serving_unit: item.serving_unit,
      serving_weight_grams: item.serving_weight_grams,
      nf_calories: item.nf_calories,
      serving_size: this.state.qty,
      meal_type: this.state.mealType,
      thumb: item.photo.thumb
    };
    console.log(itemToAdd);
    this.props.add(itemToAdd);
    this.props.close();
  };

  changeMealType = event => {
    this.setState({
      mealType: event.target.value
    });
  };

  roundNumber = num => {
    return Number(parseFloat(num).toFixed(2));
  };

  render() {
    const { classes, close, item, open } = this.props;
    const types = ["breakfast", "lunch", "snack", "dinner"];
    console.log(item);
    return (
      <Dialog open={open} onClose={close} aria-labelledby="form-dialog-title">
        <figure>
          <img
            id="itemImage"
            className={classes.mealThumb}
            src={item.photo.thumb}
            alt={item.food_name}
          />
        </figure>
        <DialogTitle>{item ? item.food_name : null}</DialogTitle>
        <Divider />
        <DialogContent id="mealDetails">
          <Grid container>
            <Grid item xs={4}>
              <QtyPicker
                servingChangeValue={this.state.servingChangeValue}
                size={this.state.qty}
                changeQty={value => this.changeQty(value)}
                servingUnit={item.serving_unit}
              />
            </Grid>
            <Grid item xs={4} className={classes.itemInfo}>
              <label>
                {this.roundNumber(
                  this.state.multiplier * item.serving_weight_grams
                )}
              </label>
              <FormHelperText id="serving_unit">grams</FormHelperText>
            </Grid>
            <Grid xs={4} className={classes.itemInfo}>
              <label>
                {this.roundNumber(this.state.multiplier * item.nf_calories)}
              </label>
              <FormHelperText id="serving_unit">calories</FormHelperText>
            </Grid>
          </Grid>
        </DialogContent>
        <Divider />
        <DialogContent id="mealType">
          <FormControl variant="filled" className={classes.formControl}>
            <Grid>
              <FormLabel>Add To Today</FormLabel>
              <br />
              <Select
                className={classes.mealTypeSelect}
                native
                value={this.state.mealType ? this.state.mealType : types[0]}
                onChange={this.changeMealType}
              >
                {types.map(type => {
                  return <option value={type}>{type}</option>;
                })}
              </Select>
            </Grid>
            <br />
            <Grid container justify="flex-end">
              <Button onClick={this.addItem}>Add</Button>
            </Grid>
          </FormControl>
        </DialogContent>
      </Dialog>
    );
  }

  componentDidMount() {
    const { item } = this.props;
    this.setState({ base_qty: item.serving_qty, qty: item.serving_qty });
  }
}
export default withStyles(styles)(Popup);
