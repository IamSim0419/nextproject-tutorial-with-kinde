import createPost from "@/actions/actions";

export default function Form() {
  return (
    <form
      action={createPost}
      className="flex flex-col max-w-[400px] my-4 gap-2 mx-auto"
    >
      <input
        type="text"
        name="title"
        placeholder="Post title..."
        className="border p-2 rounded"
        required
      />
      <textarea
        name="body"
        placeholder="Post description..."
        rows={6}
        className="border rounded p-2"
        required
      />
      <button className="bg-blue-500 text-white py-[6px] px-5 rounded-md hover:bg-blue-400">
        Submit
      </button>
    </form>
  );
}
