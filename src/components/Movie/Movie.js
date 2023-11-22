import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Movie = (props) => {
  const { title, date, image, id } = props;
  const urlImage = `https://image.tmdb.org/t/p/w300/${image}`;

  return (
    <MovieStyle>
      <Link to={`/movie/${id}`}>
        <img className="movie__image" src={urlImage} alt={title} />
        <h3 className="movie__title">{title}</h3>
        <p className="movie__date">{date}</p>
      </Link>
    </MovieStyle>
  );
};

const MovieStyle = styled.div`
  margin-bottom: 1rem;

  a {
    display: block;
    text-decoration: none;
    color: inherit;
    transition: transform 0.3s ease-in-out;

    &:hover {
      transform: scale(1.05);
    }
  }

  .movie__image {
    border-radius: 10px;
    max-width: 100%;
    height: auto;
    margin-bottom: 1rem;
    transition: opacity 0.3s ease-in-out;

    &:hover {
      opacity: 0.8;
    }
  }

  .movie__title {
    color: #473144;
    font-size: 1.95rem;
    margin-bottom: 0.5rem;
  }

  .movie__date {
    color: #64748b;
  }

  @media (min-width: 768px) {
    flex-basis: 50%;
  }

  @media (min-width: 992px) {
    flex-basis: 25%;
    padding: 1rem;
  }
`;

export default Movie;
