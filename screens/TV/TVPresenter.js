import React from "react";
import { Text } from "react-native";
import PropTypes from "prop-types";
import Loader from "../../components/Loader";

const TVPresenter = ({ loading }) => (loading ? <Loader /> : <Text>TV</Text>);

TVPresenter.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default TVPresenter;
