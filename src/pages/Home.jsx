import BlogGrid from '../components/BlogGrid/BlogGrid';
import LeftSidebar from '../components/LeftSidebar/LeftSidebar';

const Home = () => {
  return (
    <>
      <section className="wrapper">
        <LeftSidebar />
        <BlogGrid />
      </section>
    </>
  );
};

export default Home;
