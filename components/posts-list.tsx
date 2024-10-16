import prisma from "@/lib/db";
import Link from "next/link";

type Posts = {
  id: number;
  title: string;
  body: string;
};

export default async function PostList() {
  // await new Promise((resolve) => setTimeout(resolve, 1000));
  
  //Modern fetching using prisma ORM
  const posts = await prisma.post.findMany();

  return (
    <ul>
      {posts.map((post: Posts) => (
        <li key={post.id} className="mb-2 text-zinc-900 py-4 border">
          <Link
            href={`/posts/${post.id}`}
            className="text-xl font-bold mb-2 hover:text-zinc-700"
          >
            {post.title}
          </Link>
          <p className="truncate px-4 text-sm">{post.body}</p>
        </li>
      ))}
    </ul>
  );
}
