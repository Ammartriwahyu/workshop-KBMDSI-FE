import { BookOpen, GraduationCap, PiggyBank, Users } from "lucide-react";

// Setiap item punya ikon, judul, dan deskripsi
const benefits = [
  {
    icon: <Users className="size-14" aria-hidden="true" />,
    title: "Large Community",
    description:
      "Join our vibrant learning community of students, alumni, and educators.",
  },
  {
    icon: <PiggyBank className="size-14" aria-hidden="true" />,
    title: "Free Education",
    description:
      "Learn from our charity and save money on your education. This is made possible by the generous support of our monthly donors.",
  },
  {
    icon: <GraduationCap className="size-14" aria-hidden="true" />,
    title: "Extensive Certifications",
    description:
      "Earn industry-recognized, verifiable certifications in high-demand technologies.",
  },
  {
    icon: <BookOpen className="size-14" aria-hidden="true" />,
    title: "Comprehensive Curriculum",
    description:
      "Enhance your technical skills with our linear, world-class, project-based curriculum.",
  },
];

export default function WhyLearn() {
  return (
    <section className="bg-fcc-gray py-14 text-fcc-light">
      <div className="mx-auto max-w-fcc px-4">
        <h2 className="text-center text-3xl font-bold md:text-4xl">
          Why learn with freeCodeCamp:
        </h2>

        {/* Grid: 1 kolom di HP, 2 kolom mulai md */}
        <div className="mt-10 grid gap-10 md:grid-cols-2">
          {benefits.map((benefit) => (
            <div key={benefit.title}>
              {benefit.icon}
              <h3 className="mt-3 text-xl font-bold">{benefit.title}</h3>
              <p className="mt-2 text-lg leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <a
          href="#"
          className="mx-auto mt-12 block w-full max-w-md border-2 border-fcc-yellow bg-linear-to-b from-fcc-yellow-light to-fcc-yellow-dark px-4 py-2 text-center text-2xl text-fcc-navy"
        >
          Start Learning Now (it&apos;s free)
        </a>
      </div>
    </section>
  );
}
