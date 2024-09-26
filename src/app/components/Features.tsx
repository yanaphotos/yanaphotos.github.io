import Image from "next/image";

const features = [
  {
    title: "High-Quality Equipment",
    description:
      "In photography, having the right tools can make all the difference. I invest in top-of-the-line cameras, lenses, and lighting equipment to ensure that every shot is crisp, clear, and professionally executed. From full-frame DSLRs to mirrorless systems, I have the versatility to adapt to any shooting environment. My array of prime and zoom lenses allows me to capture everything from wide-angle landscapes to intimate close-up portraits with stunning clarity. Additionally, my professional-grade editing software and color-calibrated monitors ensure that the final images you receive are polished to perfection.",
    image: "https://placehold.co/500x300/000000/FFFFFF.png",
  },
  {
    title: "Creative Vision",
    description:
      "Technical skills are important, but it's the creative eye that truly sets a photographer apart. With over a decade of experience, I've developed a unique artistic vision that goes beyond simply taking pictures – I create visual stories. I have a keen ability to find beauty in unexpected places and to capture fleeting moments that might otherwise go unnoticed. My approach involves carefully considering composition, lighting, and emotion to create images that are not just visually appealing, but also evoke deep feelings and memories. Whether it's finding the perfect natural light for a portrait or waiting hours for the ideal moment in a landscape, my passion for creative photography shines through in every image I produce.",
    image: "https://placehold.co/500x300/000000/FFFFFF.png",
  },
  {
    title: "Professional Editing",
    description:
      "Capturing the perfect shot is just the beginning. My expertise in post-processing takes your images to the next level, enhancing their impact while maintaining a natural look. I use industry-standard software to carefully adjust color balance, contrast, and sharpness, ensuring that each photo looks its absolute best. For portrait sessions, I offer subtle retouching to address any temporary blemishes while preserving your natural beauty. In landscape and event photography, I employ advanced techniques like HDR blending and selective adjustments to bring out the full dynamic range and vibrancy of the scene. Rest assured, every image I deliver is meticulously edited to meet the highest professional standards while staying true to the original moment.",
    image: "https://placehold.co/500x300/000000/FFFFFF.png",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Me</h2>
        {features.map((feature, index) => (
          <div
            key={feature.title}
            className={`flex flex-col md:flex-row items-center mb-12 ${
              index % 2 === 0 ? "" : "md:flex-row-reverse"
            }`}
          >
            <div className="md:w-1/2 mb-4 md:mb-0">
              <Image
                src={feature.image}
                alt={feature.title}
                width={500}
                height={300}
                className="rounded-lg"
              />
            </div>
            <div className="md:w-1/2 md:px-8">
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-lg">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
