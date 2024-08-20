import {useState} from 'react';
import {Container} from 'react-bootstrap';
import useNewsData from '../hooks/useNewsData';
import CustomPagination from './CustomPagination';
import NewsGrid from './NewsGrid';
import Loading from './Loading';
import ErrorComponent from './ErrorComponent';

const NewsList = (props) => {
  const {category, searchTerm, author, fromDate, toDate, source, country} = props;
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 6;

  const onPageChange = (pageNumber) => setCurrentPage(pageNumber);

  const {newsData, loading, error} = useNewsData(category, searchTerm, fromDate, toDate, author, source, country);

  if(loading) {
    return <Loading/>;
  }

  if(error) {
    return <ErrorComponent message={error.message}/>;
  }

  const totalArticles = newsData && newsData.length ? newsData.length : 0;
  const totalPages = Math.ceil(totalArticles / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentArticles = newsData && newsData.length ? newsData.slice(startIndex, endIndex) : [];

  return (
    <Container>
      <NewsGrid articles={currentArticles}/>
      {totalArticles ?
        <CustomPagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={onPageChange}
        /> : ''}
    </Container>
  );
};

export default NewsList;
