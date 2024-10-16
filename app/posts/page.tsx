import PostList from "@/components/posts-list";
import LoadingPost from "@/components/loading-post";
import { Suspense } from "react";

export const metadata = {
  title: "All posts",
};

export default async function page() {
  return (
    <main className="text-center pt-12 px-20">
      <h1 className="text-4xl font-bold mb-8 md:text-5xl">All posts</h1>
      <Suspense fallback={<LoadingPost />}>
        <PostList />
      </Suspense>
    </main>
  );
}
