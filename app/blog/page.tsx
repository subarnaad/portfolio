// sections/BlogSection.tsx
export default function BlogSection() {
  const blogPosts = [
    { title: "Post 1", summary: "Short summary...", link: "/blog/post-1" },
    { title: "Post 2", summary: "Another summary...", link: "/blog/post-2" },
  ];

  return (
    <section id="blog" className="min-h-screen p-8 bg-yellow-100">
      <h2 className="text-4xl font-bold mb-6">Blog</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {blogPosts.map((post) => (
          <article key={post.title} className="p-4 border rounded hover:shadow transition">
            <h3 className="text-2xl font-semibold">{post.title}</h3>
            <p className="mt-2">{post.summary}</p>
            <a href={post.link} className="text-blue-500 mt-2 inline-block">
              Read More
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
