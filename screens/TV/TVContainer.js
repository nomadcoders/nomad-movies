import React from "react";
import TVPresenter from "./TVPresenter";

export default class extends React.Component {
  state = {
    loading: true
  };
  render() {
    const { loading } = this.state;
    return <TVPresenter loading={loading} />;
  }
}
