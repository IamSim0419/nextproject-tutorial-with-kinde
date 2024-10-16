import Form from "@/components/form";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";

export default async function page() {
  return (
    <main className="text-center pt-16 px-20">
      <h1 className="text-4xl font-bold mb-8 md:text-5xl">Create post</h1>

      <Form />
      
      <div className="bg-zinc-800 hover:bg-zinc-700 text-white inline-block mt-4 px-4 py-1 rounded">
        <LogoutLink>Logout</LogoutLink>
      </div>
    </main>
  );
}
