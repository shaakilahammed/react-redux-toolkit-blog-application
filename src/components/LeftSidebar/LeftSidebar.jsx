import Sorting from './Sorting';
import Filter from './Filter';

const LeftSidebar = () => {
  return (
    <aside>
      <div className="sidebar-items">
        <Sorting />
        <Filter />
      </div>
    </aside>
  );
};

export default LeftSidebar;
