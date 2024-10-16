import prisma from "@/lib/db";
import { notFound } from "next/navigation";

export default async function page({ params }: { params: { id: string } }) {
  const post = await prisma.post.findUnique({
    where: {
      //convert string to number
      id: parseInt(params.id),
    }
  });
  
  //Check if there's post, removes ts red line
  if (!post) {
    notFound();
  }

  return (
    <main className="px-12 pt-24 text-center">
      <h2 className="text-5xl font-semibold mb-7">
        {post.title}
      </h2>
      <p className="max-w-[700px] mx-auto">{post.body}</p>
    </main>
  );
}
