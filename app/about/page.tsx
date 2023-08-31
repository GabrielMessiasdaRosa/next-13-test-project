import { Metadata } from "next";

export interface AboutProps {}

export const metadata: Metadata = {
  title: "About | Test Project",
  description: "About page",
};

export default function About({}: AboutProps) {
  return (
    <div className="px-16 py-6 min-h-[85.3dvh]">
      <h1 className="text-4xl font-bold  mb-8">About</h1>
      <p className="text-lg lg:w-1/2 px-4 py-2">
        I am an example of application using NEXT.JS 13 with app/dir "new
        version", Neon DB serveless postgres database with Prisma as ORM. The
        reason for this project is to test the new features of NEXT.JS 13 and
        Neon DB with Prisma.
      </p>
    </div>
  );
}
