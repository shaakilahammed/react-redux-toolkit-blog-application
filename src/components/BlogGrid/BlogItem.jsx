import { Link } from 'react-router-dom';
import blogImage from '../../assets/images/git.webp';
const BlogItem = () => {
  return (
    <div className="lws-card">
      <Link to={`/blog/1`}>
        <img src={blogImage} className="lws-card-image" alt="" />
      </Link>
      <div className="p-4">
        <div className="lws-card-header">
          <p className="lws-publishedDate">2023-05-01</p>
          <p className="lws-likeCount">
            <i className="fa-regular fa-thumbs-up"></i>100
          </p>
        </div>
        <Link to={`/blog/1`} className="lws-postTitle">
          {' '}
          Top Github Alternatives{' '}
        </Link>
        <div className="lws-tags">
          <span>#python,</span> <span>#tech,</span> <span>#git</span>
        </div>
        {/* <!-- Show this element if post is saved -->
    <div class="flex gap-2 mt-4">
      <span class="lws-badge"> Saved </span>
    </div>
    <!-- Show this element if post is saved Ends --> */}
      </div>
    </div>
  );
};

export default BlogItem;
