import { useState } from 'react';
import Select, { components } from 'react-select';
import "./MultiDropDown.styles.scss";
import { FaArrowCircleDown } from "react-icons/fa";


// Sample genre options for the dropdown
const genreOptions = [
  { value: 'action', label: 'Action' },
  { value: 'sci-fi', label: 'Sci-Fi' },
  { value: 'drama', label: 'Drama' },
  { value: 'comedy', label: 'Comedy' },
  { value: 'thriller', label: 'Thriller' },
  { value: 'horror', label: 'Horror' },
];

// Custom dropdown indicator with an emoji icon
const DropdownIndicator = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <FaArrowCircleDown color='#16ae7d'/> {/* Custom color */}
    </components.DropdownIndicator>
  );
};

const GenreMultiSelect = ({ onSelectionChange }) => {
  const [selectedGenres, setSelectedGenres] = useState([]);

  // Handler for changes in the multi-select component
  const handleChange = (selectedOptions) => {
    setSelectedGenres(selectedOptions || []); // Update the selected genres
    onSelectionChange(selectedOptions || []); // Pass the selected genres to the parent component
  };

  return (
    <Select
      closeMenuOnSelect={false}
      components={{ DropdownIndicator }}
      isMulti
      options={genreOptions}
      value={selectedGenres}
      onChange={handleChange}
      placeholder="Select genres..."
      className="genre-multi-select"
      classNamePrefix="genre-select"
    />
  );
};

export default GenreMultiSelect;
