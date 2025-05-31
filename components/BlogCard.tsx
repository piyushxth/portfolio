import Link from "next/link";
import Image from "next/image";
import { CalendarIcon, Clock } from "lucide-react";
import { formatDate } from "@/lib/utils";
import type { BlogPost } from "@/types/blog";

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

export default function BlogCard({ post, featured = false }: BlogCardProps) {
  return (
    <article
      className={`glass-card border rounded-xl overflow-hidden group animate-fade-in ${
        featured ? "md:col-span-2 md:row-span-2" : ""
      }`}
    >
      <Link href={`/blog/${post.slug}`} className="block h-full">
        <div className="relative">
          <div className="aspect-video overflow-hidden">
            <Image
              src={post.coverImage || "/placeholder.svg"}
              alt={post.title}
              width={800}
              height={450}
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          {post.category && (
            <div className="absolute top-4 right-4">
              <span className="px-3 py-1 text-xs font-medium rounded-full bg-red/90 text-white backdrop-blur-sm">
                {post.category}
              </span>
            </div>
          )}
        </div>
        <div className="p-5 md:p-6 bg-card/50 space-y-5">
          <div className="flex items-center text-sm text-muted-foreground space-x-4 mb-3">
            <div className="flex items-center">
              <CalendarIcon className="mr-1 h-4 w-4" />
              <time dateTime={post.date}>{formatDate(post.date)}</time>
            </div>
            <div className="flex items-center">
              <Clock className="mr-1 h-4 w-4" />
              <span>{post.readingTime} min read</span>
            </div>
          </div>
          <h3
            className={`font-semibold text-foreground group-hover:text-red transition-colors ${
              featured ? "text-2xl md:text-3xl mb-3" : "text-xl mb-2"
            }`}
          >
            {post.title}
          </h3>
          <p className="text-muted-foreground line-clamp-2 mb-4">
            {post.excerpt}
          </p>
          <div className="flex items-center">
            <Image
              //   src={post.author.avatar || "/about-profile1.png"}
              src={"/about-profile1.png"}
              alt={post.author.name}
              width={32}
              height={32}
              className="rounded-full mr-3 border"
            />
            <span className="text-sm font-medium">{post.author.name}</span>
          </div>
        </div>
      </Link>
    </article>
  );
}
