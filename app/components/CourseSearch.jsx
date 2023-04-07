import { useState } from 'react';

const CourseSearch = ({ getSearchResults }) => {
  const [query, setQuery] = useState('');
  const [noResults, setNoResults] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch(`/api/courses/search?query=${query}`);
    const courses = await res.json();
    if (courses.length === 0) {
      setNoResults(true);
    } else {
      setNoResults(false);
      getSearchResults(courses);
    }
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSubmit} className='search-form'>
        <input
          type='text'
          className='search-input'
          placeholder='Search Courses...'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className='search-button' type='submit'>
          Search
        </button>
      </form>
      {noResults && (
        <div className="noResult">
          No results found.
        </div>
      )}
    </div>
  );
};

export default CourseSearch;
