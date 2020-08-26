import React, { useEffect, useState } from 'react';

import Popular from 'domains/Movie/api/Popular';
import MovieResponse from 'domains/Movie/api/Popular/Response';
import { Color } from 'shared/enums';

import { ColumnLayout } from 'components/Layout';
import Header from 'containers/Header';
import MovieList from 'containers/MovieList';
import Footer from 'containers/Footer';
import { HeaderBackground } from './styles';

const Home: React.FC = () => {
  const [movieList, setMovieList] = useState([] as MovieResponse[]);
  useEffect(() => {
    Popular().then(response => {
      setMovieList(response);
    });
  }, []);

  return (
    <ColumnLayout>
      <Header />
      {/* <div style={{ flex: 1 }}> */}
      <MovieList theme="light" title="Populares" data={movieList} />
      <MovieList theme="primary" title="Favoritos" data={movieList} />
      <MovieList theme="secondary" title="Lançamentos" data={movieList} />
      {/* </div> */}
      <Footer />
      <HeaderBackground />
    </ColumnLayout>
  );
};

export default Home;
