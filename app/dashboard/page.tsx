import { buttonVariants } from "@/components/ui/button";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";
import { prisma } from "../utils/db";
import BlogPostCard from "@/components/general/blogpost-card";

async function getBlogsdata(userId: string) {
  const data = await prisma.blogPost.findMany({
    where: {
      authorID: userId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return data;
}

export default async function DashboardRoute() {
  await new Promise((resolve) => setTimeout(resolve, 3000))
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  const blogsData = await getBlogsdata(user.id);

  return (
    <>
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-xl font-medium">Your Blog articles</h1>
        <Link href="/dashboard/create" className={buttonVariants()}>
          Create Blog
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {blogsData.map((item) => (
          <BlogPostCard data={item} key={item.id}/>
        ))}
      </div>
    </>
  );
}
