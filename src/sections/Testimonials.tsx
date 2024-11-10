import Image from "next/image";
import React, { Fragment } from "react";
import JhankarBhai from "@/assets/images/download (1).jpeg";
import JabedBhai from "@/assets/images/1710335960217.jpeg";
import RakibulBhai from "@/assets/images/1686227783555.jpeg";
import RabeyaApu from "@/assets/images/1727146109336.jpeg";
import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";

const testimonials = [
  {
    name: "Jhankar Mahmub",
    position: " Web development instructor",
    Text: "Rukunul, always keep learning and exploring new things in technology. Build connections with others to learn from them and find new opportunities. Lastly, always ask for feedback so you can improve and grow.",
    avator: JhankarBhai,
  },
  {
    name: "Abu sadek Jabed",
    position: "General manager in sales department",
    Text: "Rukunul, you have great potential. Keep pushing yourself to learn and grow. Never shy away from challenges—embrace them, Remember to maintain a balance between work and personal life, as both are important for long-term success.",
    avator: JabedBhai,
  },
  {
    name: "Rakibul Islam",
    position: "Software Engineer",
    Text: "Rukunul Joy is an experienced, talented MERN Stack Developer, but more than that he understands where web development sits within the whole scheme of a company or project, he would be a good choose as your employee.",
    avator: RakibulBhai,
  },
  {
    name: "Rokeya Sultana",
    position: " Web development instructor",
    Text: "Rukunul is one of the most dedicated and skilled full stack web developer I have ever met.Rukunul has impressive technical skills in full stack web development is top-notch, and he is always up-to-date with the latest web development trends and technologies.",
    avator: RabeyaApu,
  },
];

const Testimonials = () => {
  return (
    <div className="p-6 md:p-6">
      <SectionHeader
        eyebrow="Happy Clients"
        title="What colleague says about me"
        desc="Always give people more than what they expect to get.There is a big difference between a satisfied customer and a loyal customer."
      />
     <div
  className="mt-12 md:mt-16 flex overflow-x-clip py-4 -my-4"
  style={{
    maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
    WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)"
  }}
>
        <div className="flex gap-8 flex-none pr-8 animate-move-left [animation-duration:90s] hover:[animation-play-state:paused]">
        {[...new Array(2)].fill(0).map((_, idx) =>(
          <Fragment key={idx}>
             {testimonials.map((testimonial, i) => (
          <Card key={i} className="max-w-xs md:p-8 md:max-w-md p-6 hover:-rotate-3 transition duration-300">
            <div className="flex gap-4">
                <div className="inline-flex rounded-full items-center justify-center">
              <Image
                src={testimonial.avator}
                alt={testimonial.name}
                width={50}
                height={50}
                className="rounded-full"
              />
              </div>
              <div>
                <div className="font-semibold">{testimonial.name}</div>
                <div className="text-sm text-white/40">{testimonial.position}</div>
              </div>
            </div>
            <p className="mt-4 md:mt-6 text-sm">{testimonial.Text}</p>
          </Card>
        ))}
          </Fragment>
        ))
      }
        </div>
       
      </div>
    </div>
  );
};

export default Testimonials;
