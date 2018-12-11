import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Swiper from "react-native-swiper";
import Layout from "../constants/Layout";

const SWIPER_HEIGHT = Layout.height / 3;

const View = styled.View`
  background-color: red;
  height: ${SWIPER_HEIGHT};
`;

const Text = styled.Text``;

const MovieSlider = ({ movies }) => (
  <Swiper
    showsPagination={false}
    autoplay={true}
    style={{ height: SWIPER_HEIGHT }}
  >
    <View>
      <Text>First</Text>
    </View>
    <View>
      <Text>Second</Text>
    </View>
    <View>
      <Text>Third</Text>
    </View>
  </Swiper>
);

MovieSlider.propTypes = {
  movies: PropTypes.array
};

export default MovieSlider;
