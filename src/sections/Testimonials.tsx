import Image from "next/image";
import React from "react";
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
    Text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi dignissimos doloremque fuga amet id veritatis soluta modi dicta debitis architecto.",
    avator: JhankarBhai,
  },
  {
    name: "Abu sadek Jabed",
    position: "General manager in sales department",
    Text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi dignissimos doloremque fuga amet id veritatis soluta modi dicta debitis architecto.",
    avator: JabedBhai,
  },
  {
    name: "Rakibul Islam",
    position: "Software Engineer",
    Text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi dignissimos doloremque fuga amet id veritatis soluta modi dicta debitis architecto.",
    avator: RakibulBhai,
  },
  {
    name: "Rokeya Sultana",
    position: " Web development instructor",
    Text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi dignissimos doloremque fuga amet id veritatis soluta modi dicta debitis architecto.",
    avator: RabeyaApu,
  },
];

const Testimonials = () => {
  return (
    <div className="p-6 md:p-6">
      <SectionHeader
        eyebrow="Happy Clients"
        title="What colleague says about me"
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius nemo animi temporibus officia pariatur neque! Eius nemo animi temporibus officia pariatur neque!"
      />
     <div
  className="mt-16 md:mt-20 flex overflow-x-clip"
  style={{
    maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
    WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)"
  }}
>
        <div className="flex gap-8 flex-none">
        {testimonials.map((testimonial, i) => (
          <Card key={i} className="max-w-xs md:p-8">
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
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
