import { PostCard } from 'app/components/PostCard';
import { allPosts } from 'contentlayer/generated';
import { compareDesc } from 'date-fns';
import { type Metadata } from 'next';

export const metadata: Metadata = {
  title: 'posts',
  description: 'posts',
};

const PostLayout = () => {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.createdAt), new Date(b.createdAt)),
  );

  return (
    <div className="flex flex-col gap-5">
      {posts.map((post, idx) => (
        <PostCard key={idx} {...post} />
      ))}
    </div>
  );
};

export default PostLayout;
