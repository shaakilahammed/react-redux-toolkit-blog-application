import { useDispatch, useSelector } from 'react-redux';
import { updateSort } from '../../features/filters/filtersSlice';

const Sorting = () => {
  const dispatch = useDispatch();
  const { sort } = useSelector((state) => state.filters);
  const handleSort = (e) => {
    dispatch(updateSort(e.target.value));
  };
  return (
    <div className="sidebar-content">
      <h4>Sort</h4>
      <select
        name="sort"
        id="lws-sort"
        className="w-full max-w-[150px] border-2 rounded-md text-gray-500"
        onChange={handleSort}
        value={sort}
      >
        <option value="default">Default</option>
        <option value="newest">Newest</option>
        <option value="most_liked">Most Liked</option>
      </select>
    </div>
  );
};

export default Sorting;
