import { useDispatch, useSelector } from 'react-redux';
import RelatedBlogItem from './RelatedBlogItem';
import PropTypes from 'prop-types';
import Message from '../UI/Message';
import { useEffect } from 'react';
import { fetchRelatedBlogs } from '../../features/relatedBlogs/relatedBlogsSlice';

const RelatedBlogs = ({ currentBlogId, tags }) => {
  const dispatch = useDispatch();
  const { blogs, isLoading, isError, error } = useSelector(
    (state) => state.relatedBlogs
  );
  useEffect(() => {
    dispatch(fetchRelatedBlogs({ currentBlogId, tags }));
  }, [dispatch, tags, currentBlogId]);
  let content = null;
  if (isLoading) {
    content = <Message>Loading...</Message>;
  }
  if (!isLoading && isError) {
    content = <Message>{error}</Message>;
  }
  if (!isLoading && !isError && blogs.length <= 0) {
    content = <Message>No blog found...</Message>;
  }
  if (!isLoading && !isError && blogs.length > 0) {
    content = blogs.map((blog) => (
      <RelatedBlogItem key={blog.id} blog={blog} />
    ));
  }
  return (
    <aside>
      <h4 className="mb-4 text-xl font-medium" id="lws-relatedPosts">
        Related Posts
      </h4>
      <div className="space-y-4 related-post-container">{content}</div>
    </aside>
  );
};

RelatedBlogs.propTypes = {
  currentBlogId: PropTypes.number,
  tags: PropTypes.array,
};

export default RelatedBlogs;
