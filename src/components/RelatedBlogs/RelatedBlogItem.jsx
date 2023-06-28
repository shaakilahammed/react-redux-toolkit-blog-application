import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
const RelatedBlogItem = ({ blog }) => {
  const { id, title, image, tags, createdAt } = blog;
  const tagsText = tags.map((tag) => `#${tag}`).join(', ');
  return (
    <div className="card">
      <Link to={`/blog/${id}`}>
        <img src={image} className="card-image" alt={title} />
      </Link>
      <div className="p-4">
        <Link
          to={`/blog/${id}`}
          className="text-lg post-title lws-RelatedPostTitle"
        >
          {title}
        </Link>
        <div className="mb-0 tags">{tagsText}</div>
        <p>{createdAt}</p>
      </div>
    </div>
  );
};

RelatedBlogItem.propTypes = {
  blog: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    image: PropTypes.string,
    tags: PropTypes.array,
    createdAt: PropTypes.string,
  }).isRequired,
};

export default RelatedBlogItem;
