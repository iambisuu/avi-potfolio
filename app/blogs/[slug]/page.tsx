import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { blogs, getBlogBySlug } from "@/lib/blogs";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props) {
  const resolvedParams = await params;
  const blog = getBlogBySlug(resolvedParams.slug);
  
  if (!blog) {
    return {
      title: "Blog Not Found",
    };
  }

  return {
    title: blog.title,
    description: blog.description,
    keywords: blog.tags,
    openGraph: {
      title: blog.title,
      description: blog.description,
      type: "article",
      publishedTime: blog.date,
      authors: ["Avi Srivastava"],
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.description,
    },
  };
}

export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export default async function BlogDetail({ params }: Props) {
  const resolvedParams = await params;
  const blog = getBlogBySlug(resolvedParams.slug);

  if (!blog) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-foreground selection:text-background">
      <Navigation />
      
      <main className="pt-32 pb-24 lg:pt-40 lg:pb-32 px-6 lg:px-12 max-w-[800px] mx-auto min-h-screen">
        <header className="mb-12 border-b border-foreground/10 pb-12">
          <div className="flex gap-3 mb-8 flex-wrap">
            {blog.tags.map(tag => (
              <span key={tag} className="text-xs font-mono px-3 py-1 bg-foreground/5 rounded-full">
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-4xl lg:text-6xl font-display tracking-tight mb-6 leading-tight">
            {blog.title}
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            {blog.description}
          </p>
          <div className="text-sm font-mono text-muted-foreground flex items-center gap-4">
            <span>By Avi Srivastava</span>
            <span>•</span>
            <span>{blog.date}</span>
          </div>
        </header>

        <article className="prose prose-lg dark:prose-invert prose-headings:font-display max-w-none">
          <ReactMarkdown>{blog.content}</ReactMarkdown>
        </article>
      </main>

      <FooterSection />
    </div>
  );
}
