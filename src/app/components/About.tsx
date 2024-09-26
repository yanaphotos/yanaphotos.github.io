import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <Image
            src="https://placehold.co/400x400/000000/FFFFFF.png"
            alt="Photographer"
            width={400}
            height={400}
            className="rounded-full"
          />
        </div>
        <div className="md:w-1/2 md:pl-8">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-lg mb-4">
            I&apos;m Yana, a professional photographer with more than 10 years
            of experience behind the camera. My journey in photography began as
            a passion and has blossomed into a fulfilling career that allows me
            to capture the essence of life&apos;s most precious moments.
          </p>
          <p className="text-lg mb-4">
            Based in the vibrant city of Kyiv, Ukraine, I&apos;ve had the
            privilege of documenting everything from intimate family gatherings
            to grand cultural events. My work is inspired by the rich history
            and dynamic energy of my homeland, as well as the unique stories of
            every individual I photograph.
          </p>
          <p className="text-lg">
            Whether I&apos;m shooting portraits that reveal the soul behind the
            eyes, or landscapes that showcase the breathtaking beauty of
            Ukraine, my goal is always the same: to create images that resonate
            with emotion and stand the test of time.
          </p>
        </div>
      </div>
    </section>
  );
}
