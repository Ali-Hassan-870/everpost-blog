import BlogPostCard from "@/components/general/blogpost-card";
import { prisma } from "./utils/db";
import { Suspense } from "react";
import BlogPostCardSkeleton from "@/components/general/blogpost-card-skeleton";

async function getData() {
  const data = await prisma.blogPost.findMany({
    select: {
      id: true,
      title: true,
      content: true,
      imageUrl: true,
      authorID: true,
      authorName: true,
      authorImage: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  return data;
}

async function BlogPosts() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const data = await getData();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {data.map((item) => (
        <BlogPostCard data={item} key={item.id} />
      ))}
    </div>
  );
}

export default async function Home() {
  return (
    <div className="py-6">
      <h1 className="text-3xl font-bold tracking-tight mb-8">Latest Posts</h1>

      <Suspense fallback={<BlogPostCardSkeleton />}>
        <BlogPosts />
      </Suspense>
    </div>
  );
}
