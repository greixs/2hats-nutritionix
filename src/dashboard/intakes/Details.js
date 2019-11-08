import React, { Component } from "react";
import DetailItem from "./DetailItem";

export default class Details extends Component {
  constructor(props) {
    super(props);

    this.state = {
      intake_list: []
    };
  }

  render() {
    const { intake_list } = this.props;
    // console.log(intake_list);
    if (!intake_list.length) {
      return <div></div>;
    } else {
      const intakes = intake_list.map((intake, index) => {
        console.log(intake);
        return <DetailItem intake={intake} />;
      });

      return <div>{intakes}</div>;
    }
  }
}
