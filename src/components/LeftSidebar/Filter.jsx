import { useDispatch, useSelector } from 'react-redux';
import { updateFilter } from '../../features/filters/filtersSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const { filter } = useSelector((state) => state.filters);
  const handleFilter = (value) => {
    dispatch(updateFilter(value));
  };

  return (
    <div className="sidebar-content">
      <h4>Filter</h4>
      <div className="radio-group">
        <div>
          <input
            type="radio"
            name="filter"
            id="lws-all"
            checked={filter === 'all'}
            className="radio"
            onChange={() => handleFilter('all')}
          />
          <label htmlFor="lws-all">All</label>
        </div>
        <div>
          <input
            type="radio"
            name="filter"
            id="lws-saved"
            checked={filter === 'saved'}
            className="radio"
            onChange={() => handleFilter('saved')}
          />
          <label htmlFor="lws-saved">Saved</label>
        </div>
      </div>
    </div>
  );
};

export default Filter;
