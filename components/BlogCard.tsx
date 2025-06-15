import Link from "next/link";
import Image from "next/image";
import type { BlogPost } from "@/types/blog";

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

export default function BlogCard({ post, featured = false }: BlogCardProps) {
  return (
    <article
      className={`overflow-hidden group animate-fade-in shadow-lg dark:bg-card/50 ${
        featured ? "md:col-span-2 md:row-span-2" : ""
      }`}
    >
      <Link href={`/blog/${post.slug}`} className="flex flex-col h-full">
        <div className="relative w-full">
          <div className="relative aspect-[4/3] w-full overflow-hidden">
            <Image
              src={post.coverImage || "/placeholder.svg"}
              alt={post.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>
        <div className="flex flex-col flex-grow p-6 space-y-4 text-center">
          <h3 className="text-xl font-semibold text-foreground group-hover:text-red transition-colors">
            {post.title}
          </h3>
          <p className="text-muted-foreground line-clamp-2 flex-grow">
            {post.excerpt}
          </p>
          <button className="text-red hover:text-red/80 transition-colors inline-flex items-center justify-center gap-2 mt-2">
            Continue Reading
            <span className="group-hover:translate-x-1 transition-transform">
              →
            </span>
          </button>
        </div>
      </Link>
    </article>
  );
}
