import {useState} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import NavbarComponent from './Components/NavbarComponent';
import Sidebar from './Components/Sidebar';
import NewsList from './Components/NewsList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [category, setCategory] = useState('');
  const [country, setCountry] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [from, setFromDate] = useState('');
  const [to, setToDate] = useState('');
  const [author, setAuthor] = useState('');
  const [source, setSource] = useState('');

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
    setSearchTerm(searchTerm ? searchTerm : '');
  };

  const handleSearch = (searchValue) => {
    setCategory(category ? category : '');
    setSearchTerm(searchValue);
  };

  const handleDateRangeChange = (from, to) => {
    setFromDate(from);
    setToDate(to);
  };

  const handleAuthorChange = (newAuthor) => {
    setAuthor(newAuthor);
  };

  const handleSourceChange = (newSource) => {
    setSource(newSource);
  };

  const handleCountryChange = (newCountry) => {
    setCountry(newCountry)
  }

  return (
    <>
      <NavbarComponent/>
      <Container>
        <Row>
          <Col xs={12} md={3} className="sidebar-col">
            <Sidebar
              onCategoryChange={handleCategoryChange}
              onSearch={handleSearch}
              onDateRangeChange={handleDateRangeChange}
              onAuthorChange={handleAuthorChange}
              onSourceChange={handleSourceChange}
              onCountryChange={handleCountryChange}
            />
          </Col>
          <Col xs={12} md={9}>
            <NewsList
              category={category}
              searchTerm={searchTerm}
              fromDate={from}
              toDate={to}
              author={author}
              source={source}
              country={country}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
