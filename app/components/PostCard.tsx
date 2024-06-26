import { Post } from 'contentlayer/generated';
import { format, parseISO } from 'date-fns';
import Link from 'next/link';

export function PostCard(post: Post) {
  return (
    <Link href={post.url}>
      <h2 className="mb-1 text-xl font-semibold">{post.title}</h2>
      <time
        dateTime={post.createdAt}
        className="mb-2 block text-xs text-textGrayColor"
      >
        {format(parseISO(post.createdAt), 'yyyy.MM.dd')}
      </time>
    </Link>
  );
}
