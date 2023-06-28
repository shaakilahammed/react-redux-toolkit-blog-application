import PropTypes from 'prop-types';

const PostDetail = ({ blog }) => {
  const { title, image, likes, tags, isSaved, description } = blog;
  const tagsText = tags.map((tag) => `#${tag}`).join(', ');

  return (
    <main className="post">
      <img
        src={image}
        alt={title}
        className="w-full rounded-md"
        id="lws-megaThumb"
      />
      <div>
        <h1 className="mt-6 text-2xl post-title" id="lws-singleTitle">
          {title}
        </h1>
        <div className="tags" id="lws-singleTags">
          {tagsText}
        </div>
        <div className="btn-group">
          {/* <!-- handle like on button click --> */}
          <button className="like-btn" id="lws-singleLinks">
            <i className="fa-regular fa-thumbs-up"></i> {likes}
          </button>
          {/* <!-- handle save on button click --> */}
          {/* <!-- use ".active" class and "Saved" text  if a post is saved, other wise "Save" --> */}
          <button
            className={`save-btn${isSaved && ' active'}`}
            id="lws-singleSavedBtn"
          >
            <i className="fa-regular fa-bookmark"></i>{' '}
            {isSaved ? 'Saved' : 'Save'}
          </button>
        </div>
        <div className="mt-6">
          <p>{description}</p>
        </div>
      </div>
    </main>
  );
};

PostDetail.propTypes = {
  blog: PropTypes.shape({
    // id: PropTypes.number,
    title: PropTypes.string,
    image: PropTypes.string,
    likes: PropTypes.number,
    description: PropTypes.string,
    tags: PropTypes.array,
    isSaved: PropTypes.bool,
  }).isRequired,
};

export default PostDetail;
