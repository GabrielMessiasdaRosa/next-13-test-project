import NewPostForm from "@/components/new-post-form";

export interface NewPostPageProps {}

export default async function NewPostPage({}: NewPostPageProps) {
  return (
    <div className="px-16 py-6 min-h-[85.3dvh]">
      <h1 className="text-4xl font-bold mb-8">New post</h1>
      <NewPostForm />
    </div>
  );
}
