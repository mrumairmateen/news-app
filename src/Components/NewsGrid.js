import {Row} from 'react-bootstrap';
import NewsCard from './NewsCard';

const NewsGrid = ({articles}) => {
  if(!articles.length) {
    return <p>No data found</p>;
  }

  return (
    <Row>
      {articles.map((article) => (
        <NewsCard key={article.url} article={article}/>
      ))}
    </Row>
  );
};

export default NewsGrid;
