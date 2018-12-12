import React from "react";
import { Text } from "react-native";
import DetailPresenter from "./DetailPresenter";

export default class extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam("title")
    };
  };

  constructor(props) {
    super(props);
    const {
      navigation: {
        state: {
          params: { id, posterPhoto, backgroundPhoto, title, voteAvg, overview }
        }
      }
    } = props;
    this.state = {
      id,
      posterPhoto,
      backgroundPhoto,
      title,
      voteAvg,
      overview
    };
  }

  render() {
    const {
      id,
      posterPhoto,
      backgroundPhoto,
      title,
      voteAvg,
      overview
    } = this.state;
    return (
      <DetailPresenter
        id={id}
        posterPhoto={posterPhoto}
        backgroundPhoto={backgroundPhoto}
        title={title}
        voteAvg={voteAvg}
        overview={overview}
      />
    );
  }
}
