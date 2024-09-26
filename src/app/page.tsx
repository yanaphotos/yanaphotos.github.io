import About from "@/components/About";
import BlogPosts from "@/components/BlogPosts";
import Carousel from "@/components/Carousel";
import ContactForm from "@/components/ContactForm";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Portfolio from "@/components/Portfolio";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <main>
        <Carousel />
        <About />
        <Portfolio />
        <Features />
        <ContactForm />
        <BlogPosts />
      </main>
      <Footer />
    </div>
  );
}
