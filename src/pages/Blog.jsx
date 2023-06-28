import { useDispatch, useSelector } from 'react-redux';
import BlogDetail from '../components/BlogDetail/BlogDetail';
import GoHome from '../components/UI/GoHome';
import { useEffect } from 'react';
import { fetchBlog } from '../features/blog/blogSlice';
import { useParams } from 'react-router-dom';
import Message from '../components/UI/Message';
import RelatedBlogs from '../components/RelatedBlogs/RelatedBlogs';

const Blog = () => {
  const dispatch = useDispatch();
  const { blog, isLoading, error, isError } = useSelector(
    (state) => state.blog
  );
  const { blogId } = useParams();

  useEffect(() => {
    dispatch(fetchBlog(blogId));
  }, [dispatch, blogId]);

  let content = null;
  if (isLoading) {
    content = <Message>Loading...</Message>;
  }
  if (!isLoading && isError) {
    content = <Message>{error}</Message>;
  }
  if (!isLoading && !isError && !blog?.id) {
    content = <Message>No blog found...</Message>;
  }
  if (!isLoading && !isError && blog?.id) {
    content = (
      <>
        <BlogDetail blog={blog} />
        <RelatedBlogs currentBlogId={Number(blogId)} tags={blog?.tags} />
      </>
    );
  }
  return (
    <>
      <GoHome />
      <section className="post-page-container">{content}</section>
    </>
  );
};

export default Blog;
