import Image from "next/image";
import Link from "next/link";

const blogPosts = [
  {
    title: "The Magic of Golden Hour: Tips for Stunning Sunset Portraits",
    image: "https://placehold.co/400x250/000000/FFFFFF.png",
    slug: "art-of-composition",
  },
  {
    title: "Capturing Kyiv: A Photographer's Guide to the City's Hidden Gems",
    image: "https://placehold.co/400x250/000000/FFFFFF.png",
    slug: "mastering-natural-light",
  },
  {
    title: "From RAW to Remarkable: My Post-Processing Workflow Revealed",
    image: "https://placehold.co/400x250/000000/FFFFFF.png",
    slug: "post-processing-tips",
  },
];

export default function BlogPosts() {
  return (
    <section id="blog" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Latest Blog Posts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="block">
              <div className="bg-gray-700 rounded-lg overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={400}
                  height={250}
                  className="w-full"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                  <p className="text-gray-300">Read more →</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
