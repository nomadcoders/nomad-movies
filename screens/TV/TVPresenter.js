import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Loader from "../../components/Loader";
import MovieItem from "../../components/MovieItem";
import Section from "../../components/Section";
import { BG_COLOR } from "../../constants/Colors";

const Container = styled.ScrollView`
  background-color: ${BG_COLOR};
`;

const TVPresenter = ({ loading, popular, topRated, airingToday }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      {airingToday ? (
        <Section title="Airing Today">
          {airingToday
            .filter(tv => tv.poster_path !== null)
            .map(tv => (
              <MovieItem
                key={tv.id}
                id={tv.id}
                posterPhoto={tv.poster_path}
                title={tv.name}
                voteAvg={tv.vote_average}
              />
            ))}
        </Section>
      ) : null}
      {topRated ? (
        <Section title="Top Rated">
          {topRated
            .filter(tv => tv.poster_path !== null)
            .map(tv => (
              <MovieItem
                key={tv.id}
                id={tv.id}
                posterPhoto={tv.poster_path}
                title={tv.name}
                voteAvg={tv.vote_average}
              />
            ))}
        </Section>
      ) : null}
    </Container>
  );

TVPresenter.propTypes = {
  loading: PropTypes.bool.isRequired,
  popular: PropTypes.array,
  topRated: PropTypes.array,
  airingToday: PropTypes.array
};

export default TVPresenter;
