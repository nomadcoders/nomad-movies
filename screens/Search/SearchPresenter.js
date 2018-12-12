import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { BG_COLOR } from "../../constants/Colors";

const Container = styled.View`
  flex: 1;
  background-color: ${BG_COLOR};
`;

const Input = styled.TextInput``;

const SearchPresenter = ({
  loading,
  tvResults,
  searchTerm,
  movieResults,
  handleSearchUpdate
}) => (
  <Container>
    <Input
      onChangeText={handleSearchUpdate}
      value={searchTerm}
      autoFocus
      returnKeyType={"go"}
    />
  </Container>
);

SearchPresenter.propTypes = {
  loading: PropTypes.bool.isRequired,
  tvResults: PropTypes.array,
  movieResults: PropTypes.array,
  searchTerm: PropTypes.string,
  handleSearchUpdate: PropTypes.func.isRequired
};

export default SearchPresenter;
