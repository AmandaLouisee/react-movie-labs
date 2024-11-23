import React from "react";
import { useParams } from 'react-router-dom';
import MovieDetails from "../components/movieDetails/";
import PageTemplate from "../components/templateMoviePage";
import { getMovie, getMovieTranslations, getMovieCredits, getMovieKeyWords } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner'
// import useMovie from "../hooks/useMovie";   Redundant

const MoviePage = (props) => {
  const { id } = useParams();

  const { data: movie, error, isLoading, isError } = useQuery(
    ["movie", { id: id }],
    getMovie
  );

  const { data: translationData, isLoading1 } 
  = useQuery(
    ["movieTranslations", { id: id }],
    getMovieTranslations
  ) 

  const { data: creditsData, isLoading2 } 
  = useQuery(
    ["movieCredits", { id: id }],
    getMovieCredits
  ) 

  const { data: keywordData, isLoading3 } 
  = useQuery(
    ["movieKeywords", { id: id }],
    getMovieKeyWords
  ) 

  if (isLoading || isLoading1 || isLoading2 || isLoading3) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
      {movie ? (
        <>
          <PageTemplate movie={movie}>
            <MovieDetails movie={movie} translation={translationData} credit={creditsData} keyword ={keywordData}/>
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for movie details</p>
      )}
    </>
  );
};

export default MoviePage;