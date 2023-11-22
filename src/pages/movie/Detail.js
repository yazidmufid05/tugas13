import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import GetDetailMovie from '../../utils/networks/GetDetailMovie';
import { useParams } from 'react-router-dom';

const DetailContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
`;

const MovieImage = styled.img`
  max-width: 100%;
  max-height: 400px; 
  margin-bottom: 20px;
`;

const Detail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  const urlImage = `https://image.tmdb.org/t/p/w300/${movie.poster_path}`;

  const getDetail = async (id) => {
    try {
      const data = await GetDetailMovie(id);
      setMovie(data);
    } catch (error) {
      console.error('Error fetching movie details:', error);
    }
  };

  useEffect(() => {
    getDetail(id);
  }, [id]);

  return (
    <DetailContainer>
      <h1>{movie.title}</h1>
      <MovieImage src={urlImage} alt={movie.title} />
      <h3>{movie.tagline}</h3>
      <p>{movie.overview}</p>
      <p>
        <strong>Genre:</strong> {movie.genres && movie.genres.map((genre) => genre.name).join(', ')}
      </p>
      <p>
        <strong>Tanggal Rilis:</strong> {movie.release_date}
      </p>
      <p>
        <strong>Durasi:</strong> {movie.runtime} menit
      </p>
      <p>
        <strong>Popularitas:</strong> {movie.popularity}
      </p>
    </DetailContainer>
  );
};

export default Detail;
