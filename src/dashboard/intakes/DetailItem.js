import React, { Component } from "react";

export default class DetailItem extends Component {
  render() {
    const { intake } = this.props;
    const qty =
      (intake.serving_size / intake.serving_qty);
    return (
      <div>
        <img style={{ width: 50, height: 50 }} src={intake.thumb}></img>
        <span className="name"> {intake.food_name}</span>
        <span className="serving">
          {intake.serving_size} {intake.serving_unit} ({intake.serving_weight_grams * qty} g)
        </span>
        <span className="calories">{intake.nf_calories * qty}</span>
      </div>
    );
  }
}
