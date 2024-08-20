import { Card, Col } from 'react-bootstrap';
import './../assets/css/NewsCard.css';
import { useState } from 'react';

const NewsCard = ({ article }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [showFullTitle, setShowFullTitle] = useState(false);

  // Determine if the text is truncated
  const isDescriptionTruncated = !showFullDescription && (article.description?.length > 90);
  const isTitleTruncated = !showFullTitle && (article.title?.length > 50);

  // Get truncated text or full text based on state
  let description = article.description || 'No description found';
  if (isDescriptionTruncated) {
    description = description.substring(0, 90) + ' ...';
  }

  let title = article.title || 'No title found';
  if (isTitleTruncated) {
    title = title.substring(0, 50) + ' ...';
  }

  return (
    <Col xs={12} md={6} lg={4}>
      <Card className="news-card">
        <Card.Img className="news-card-img" src={article.image || 'default-image-url'} variant="top" />
        <Card.Body>
          <Card.Title
            onClick={() => setShowFullTitle(!showFullTitle)}
            className={`news-card-title ${isTitleTruncated ? 'truncated' : ''}`}
          >
            {title}
          </Card.Title>
          <Card.Text
            onClick={() => setShowFullDescription(!showFullDescription)}
            className={`news-card-text ${isDescriptionTruncated ? 'truncated' : ''}`}
          >
            {description}
          </Card.Text>
          <Card.Link target="_blank" href={article.url || '#'}>Read More</Card.Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default NewsCard;
