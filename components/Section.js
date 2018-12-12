import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import MovieItem from "./MovieItem";

const Container = styled.View`
  margin-vertical: 20px;
`;

const Title = styled.Text`
  color: white;
  font-weight: 600;
  padding-left: 20px;
  margin-bottom: 10px;
`;

const ScrollView = styled.ScrollView``;

const Section = ({ title, movies }) => (
  <Container>
    <Title>{title}</Title>
    <ScrollView horizontal>
      {movies
        .filter(movie => movie.poster_path !== null)
        .map(movie => (
          <MovieItem
            key={movie.id}
            id={movie.id}
            posterPhoto={movie.poster_path}
            title={movie.title}
            voteAvg={movie.vote_average}
          />
        ))}
    </ScrollView>
  </Container>
);

Section.propTypes = {
  movies: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired
};

export default Section;
