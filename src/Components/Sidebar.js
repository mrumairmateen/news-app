import {useState} from 'react';
import {Dropdown, DropdownButton, Form, InputGroup, Button} from 'react-bootstrap';
import './../assets/css/Sidebar.css';

const Sidebar = ({onCountryChange, onCategoryChange, onSearch, onDateRangeChange, onAuthorChange, onSourceChange}) => {
  const [selectedCountry, setSelectedCountry] = useState('Select Country');
  const [selectedCategory, setSelectedCategory] = useState('Select Category');
  const [searchTerm, setSearchTerm] = useState('');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [author, setAuthor] = useState('');
  const [source, setSource] = useState('');

  const handleCountryChange = (country) => {
    setSelectedCountry(country);
    onCountryChange(country);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    onCategoryChange(category);
  };

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  const formatDateToISO = (date) => {
    return new Date(date).toISOString();
  };

  const handleDateRangeChange = () => {
    const fromDateISO = formatDateToISO(from);
    const toDateISO = formatDateToISO(to);
    onDateRangeChange(fromDateISO, toDateISO);
  };

  const handleAuthorChange = (e) => {
    setAuthor(e.target.value);
    onAuthorChange(e.target.value);
  };

  const handleSourceChange = (e) => {
    setSource(e.target.value);
    onSourceChange(e.target.value);
  };

  return (<div className="sidebar">
    <h5>Advanced search</h5>
    <hr/>

    <h5>Select Country</h5>
    <DropdownButton id="dropdown-country" title={selectedCountry} className="mb-4 w-100">
      {[
        {name: 'United Kingdom', id: 'gb'},
        {name: 'United States', id: 'us'},
        {name: 'Pakistan', id: 'pk'},
        {name: 'India', id: 'in'}
      ].map((cat) => (
        <Dropdown.Item key={cat.id} onClick={() => handleCountryChange(cat.id)}>
          {cat.name.charAt(0).toUpperCase() + cat.name.slice(1)}
        </Dropdown.Item>))}
    </DropdownButton>

    <h5>Categories</h5>
    <DropdownButton id="dropdown-categories" title={selectedCategory} className="mb-4 w-100">
      {['world', 'business', 'technology', 'sports', 'entertainment'].map((cat) => (
        <Dropdown.Item key={cat} onClick={() => handleCategoryChange(cat)}>
          {cat.charAt(0).toUpperCase() + cat.slice(1)}
        </Dropdown.Item>))}
    </DropdownButton>


    <h5>Search</h5>
    <InputGroup className="mb-4">
      <Form.Control
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Button variant="primary" onClick={handleSearch}>
        Search
      </Button>
    </InputGroup>

    <h5>Date Range</h5>
    <Form.Group className="mb-4">
      <Form.Label>From</Form.Label>
      <Form.Control
        type="date"
        value={from}
        onChange={(e) => setFrom(e.target.value)}
      />
    </Form.Group>
    <Form.Group className="mb-4">
      <Form.Label>To</Form.Label>
      <Form.Control
        type="date"
        value={to}
        onChange={(e) => setTo(e.target.value)}
      />
    </Form.Group>
    <Button variant="primary" onClick={handleDateRangeChange}>
      Apply Date Range
    </Button>

    <h5 className="mt-4">Authors</h5>
    <InputGroup className="mb-4">
      <Form.Control
        placeholder="Filter by author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <Button variant="primary" onClick={handleAuthorChange}>
        Search
      </Button>
    </InputGroup>

    <h5 className="mt-4">Sources</h5>
    <InputGroup className="mb-4">
      <Form.Control
        placeholder="Filter by source"
        value={source}
        onChange={(e) => setSource(e.target.value)}
      />
      <Button variant="primary" onClick={handleSourceChange}>
        Search
      </Button>
    </InputGroup>
  </div>);
};

export default Sidebar;
