"use client";

import { useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
export const dynamic = "force-dynamic";

export interface NewPostFormProps {}

export default function NewPostForm({}: NewPostFormProps) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const { data } = useSession();
  const router = useRouter();
  const [isPending, startTransition] = React.useTransition();
  const [isFetching, setFetching] = React.useState(false);
  const isMutating = isPending || isFetching;
  const postNewPost = async (post: any) => {
    setFetching(true);
    const slug = await post.title.replace(/\s+/g, "-").toLowerCase();
    const authorId = data?.user?.id;
    console.log(slug);
    const newPost = {
      title: post.title,
      content: post.content,
      authorId: authorId,
      slug: slug,
    };
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/content`,
      {
        method: "POST",
        body: JSON.stringify(newPost),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    setFetching(false);
    startTransition(() => {
      router.back();
    });
    return response.json();
  };
  return (
    <form className="max-w-xl space-y-8" onSubmit={handleSubmit(postNewPost)}>
      <div className="flex flex-col gap-4">
        <label className="font-bold text-gray-800 text-lg" htmlFor="title">
          Title
        </label>
        <input
          className="border-2 border-rose-500 rounded-sm px-2 py-1  focus:outline-none focus:ring-2 focus:ring-rose-500/50"
          type="text"
          id="title"
          {...register("title", { required: true })}
        />
        {errors.exampleRequired && <span>This field is required</span>}
      </div>
      <div className="flex flex-col gap-4">
        <label className="font-bold text-gray-800 text-lg" htmlFor="content">
          Content
        </label>
        <textarea
          className="border-2 border-rose-500 rounded-sm px-2 py-1  focus:outline-none focus:ring-2 focus:ring-rose-500/50"
          id="content"
          cols={30}
          rows={10}
          {...register("content", { required: true })}
        />
        {errors.exampleRequired && <span>This field is required</span>}
      </div>
      <div className="flex flex-1 justify-end gap-4">
        <button
          className="transition-all duration-500 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-sm"
          onClick={() => {
            redirect("/blog");
          }}
        >
          Cancel
        </button>
        <button
          className="transition-all duration-500 bg-green-400 hover:bg-green-500 text-white px-4 py-2 rounded-sm"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
