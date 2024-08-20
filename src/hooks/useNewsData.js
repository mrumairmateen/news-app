import {useState, useEffect} from 'react';

const useNewsData = (category, searchTerm, from, to, author, source, country) => {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchNewsData() {
      try {
        setLoading(true);

        const apiKey = process.env.REACT_APP_GNEWS_API_KEY || '6a91dddba6d61acd72c870f6f74c489c';
        const apiUrl = `https://gnews.io/api/v4/top-headlines?token=${apiKey}`;
        const categoryParam = category ? `&topic=${category}` : '';
        const searchParam = searchTerm ? `&q=${searchTerm}` : '';
        const fromDateParam = from ? `&from=${from}` : '';
        const toDateParam = to ? `&to=${to}` : '';
        const authorParam = author ? `&author=${author}` : '';
        const sourceParam = source ? `&source.name=${source}` : '';
        const languageParam = `&lang=en`;
        const countryParam = country ? `&country=${country}` : '';

        const url = apiUrl + categoryParam + searchParam + languageParam + countryParam + fromDateParam + toDateParam + authorParam + sourceParam;
        const response = await fetch(url);
        const data = await response.json();

        setNewsData(data.articles);
        setLoading(false);
      } catch(error) {
        setError(error);
        setLoading(false);
      }
    }

    fetchNewsData().then();
  }, [category, searchTerm, from, to, author, source, country]);

  return {newsData, loading, error};
};

export default useNewsData;
