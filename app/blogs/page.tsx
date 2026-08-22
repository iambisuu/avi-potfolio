import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { blogs } from "@/lib/blogs";
import Link from "next/link";

export const metadata = {
  title: "Case Studies & Insights",
  description: "Detailed case studies and insights on frontend architecture, scalable systems, and web design.",
};

export default function BlogsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-foreground selection:text-background">
      <Navigation />
      
      <main className="pt-32 pb-24 lg:pt-40 lg:pb-32 px-6 lg:px-12 max-w-[1400px] mx-auto min-h-screen">
        <div className="mb-16">
          <h1 className="text-4xl lg:text-6xl font-display tracking-tight mb-6">Case Studies</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            A deep dive into my process, technical decisions, and the outcomes of my recent projects.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {blogs.map((blog) => (
            <Link 
              key={blog.slug} 
              href={`/blogs/${blog.slug}`}
              className="group block border border-foreground/10 rounded-2xl p-8 hover:bg-foreground/5 transition-colors"
            >
              <div className="flex gap-3 mb-6 flex-wrap">
                {blog.tags.map(tag => (
                  <span key={tag} className="text-xs font-mono px-3 py-1 bg-foreground/5 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              <h2 className="text-2xl lg:text-3xl font-display mb-4 group-hover:underline">
                {blog.title}
              </h2>
              <p className="text-muted-foreground mb-6 line-clamp-3">
                {blog.description}
              </p>
              <div className="text-sm font-mono text-muted-foreground">
                {blog.date}
              </div>
            </Link>
          ))}
        </div>
      </main>

      <FooterSection />
    </div>
  );
}
