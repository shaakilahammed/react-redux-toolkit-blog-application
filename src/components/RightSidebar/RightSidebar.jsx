import RelatedBlogList from './RelatedBlogList';

const RightSidebar = () => {
  return (
    <aside>
      <h4 className="mb-4 text-xl font-medium" id="lws-relatedPosts">
        Related Posts
      </h4>
      <RelatedBlogList />
    </aside>
  );
};

export default RightSidebar;
