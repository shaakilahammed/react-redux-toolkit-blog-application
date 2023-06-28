import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
const BlogItem = ({ blog }) => {
  const { id, title, image, likes, tags, isSaved, createdAt } = blog;
  const tagsText = tags.map((tag) => `#${tag}`).join(', ');
  return (
    <div className="lws-card">
      <Link to={`/blog/${id}`}>
        <img src={image} className="lws-card-image" alt={title} />
      </Link>
      <div className="p-4">
        <div className="lws-card-header">
          <p className="lws-publishedDate">{createdAt}</p>
          <p className="lws-likeCount">
            <i className="fa-regular fa-thumbs-up"></i>
            {likes}
          </p>
        </div>
        <Link to={`/blog/${id}`} className="lws-postTitle">
          {title}
        </Link>
        <div className="lws-tags">
          {tagsText}
          {/* <span>#python,</span> <span>#tech,</span> <span>#git</span> */}
        </div>
        {/* <!-- Show this element if post is saved --> */}
        {isSaved && (
          <div className="flex gap-2 mt-4">
            <span className="lws-badge"> Saved </span>
          </div>
        )}

        {/* <!-- Show this element if post is saved Ends --> */}
      </div>
    </div>
  );
};

BlogItem.propTypes = {
  blog: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    image: PropTypes.string,
    likes: PropTypes.number,
    tags: PropTypes.array,
    isSaved: PropTypes.bool,
    createdAt: PropTypes.string,
  }).isRequired,
};

export default BlogItem;
