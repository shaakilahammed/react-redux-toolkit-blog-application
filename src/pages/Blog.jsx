import PostDetail from '../components/PostDetail/PostDetail';
import RightSidebar from '../components/RightSidebar/RightSidebar';
import GoHome from '../components/UI/GoHome';

const Blog = () => {
  return (
    <>
      <GoHome />
      <section className="post-page-container">
        <PostDetail />
        <RightSidebar />
      </section>
    </>
  );
};

export default Blog;
