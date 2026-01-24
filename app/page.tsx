import Link from "next/link";
export default function Page() {
  return (
    <>
      <section id="home" className="min-h-screen">
        <h1>Home</h1>
      </section>

      <section id="projects" className="min-h-screen">
        <h1>Projects</h1>
      </section>

      <section id="blog" className="min-h-screen">
        <Link href="/#blog">Blog</Link>
      </section>

      <section id="contact" className="min-h-screen">
        <h1>Contact</h1>
      </section>
    </>
  );
}
