import { Link } from 'react-router-dom';
import relatedBlogImage from '../../assets/images/ai.jpg';
const RelatedBlogItem = () => {
  return (
    <div className="card">
      <Link to={`/blog/1`}>
        <img src={relatedBlogImage} className="card-image" alt="" />
      </Link>
      <div className="p-4">
        <Link
          to={`/blog/1`}
          className="text-lg post-title lws-RelatedPostTitle"
        >
          Top Github Alternatives
        </Link>
        <div className="mb-0 tags">
          <span>#python,</span> <span>#tech,</span> <span>#git</span>
        </div>
        <p>2010-03-27</p>
      </div>
    </div>
  );
};

export default RelatedBlogItem;
