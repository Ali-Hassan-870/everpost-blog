import { prisma } from "./utils/db";

async function getData() {
  const data = await prisma.blogPost.findMany({
    select: {
      id: true,
      title: true,
      content: true,
      imageUrl: true,
      authorName: true,
      authorImage: true,
      createdAt: true,
    }
  });

  return data;
}


export default async function Home() {

  const data = await getData();

  return (
    <div className="py-6">
      <h1 className="text-3xl font-bold tracking-tight mb-8">Latest Posts</h1>

      <div className="gris grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((item)=>(
          <h1 key={item.id}>{item.title}</h1>
        ))}
      </div>
    </div>
  );
}
