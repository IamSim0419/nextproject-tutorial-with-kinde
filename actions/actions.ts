"use server"

import prisma from "@/lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function createPost(formData: FormData) {
    //Check if the user is authenticated.
    const { isAuthenticated } = getKindeServerSession();
    const isUserAuthenticated = await isAuthenticated();

    //If is not authenticated redirect to path for auth
    if (!isUserAuthenticated) {
        redirect("/api/auth/login");
    }

    // Validation check here (e.g. Zod) ---

    const title = formData.get("title") as string;
    const body = formData.get("body") as string

    //Prisma create post //Create lib folder db
    await prisma.post.create({
        data: {
            title,
            body,
        },
    });

    // revalidate the path of /posts.
    // automatically updates UI posts, you dont need to refresh
    revalidatePath("/posts");
}


