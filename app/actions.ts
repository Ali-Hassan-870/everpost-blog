"use server";

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { prisma } from "./utils/db";
import { redirect } from "next/navigation";

export async function handleCreatePostSubmission(formData: FormData) {
    const {getUser} = getKindeServerSession();
    const user = getUser();

  const title = formData.get('title');
  const content = formData.get('content');
  const imageUrl = formData.get('imageUrl');

  const data = await prisma.blogPost.create({
    data: {
        title: title as string,
        content: content as string,
        imageUrl: imageUrl as string,
        authorID: (await user).id,
        authorImage: (await user).picture as string,
        authorName: (await user).given_name as string
    }
  });

  return redirect("/dashboard");
}
