import { ChevronsRight } from "lucide-react";
import CourseCard, { type Course } from "@/components/CourseCard";

// Data kursus. Course[] artinya "array berisi data bertipe Course"
const courses: Course[] = [
  {
    category: "Python",
    title: "Learn Python for Beginners",
    description:
      "Learn the fundamentals of Python programming from the ground up by practicing foundational concepts and building small projects.",
    level: "Beginner",
    duration: "5 hours",
  },
  {
    category: "Computer Fundamentals",
    title: "Learn Computer Basics",
    description:
      "Build a foundation in computer, internet, and tooling basics for web development.",
    level: "Beginner",
    duration: "2 hours",
  },
  {
    category: "HTML",
    title: "Learn Basic HTML",
    description:
      "Learn how to build simple webpages using HTML tags to add text, images, and links.",
    level: "Beginner",
    duration: "3 hours",
  },
];

export default function CourseCatalog() {
  return (
    <section className="bg-white py-14">
      <div className="mx-auto max-w-fcc px-4">
        <h2 className="text-center text-3xl font-bold md:text-4xl">
          Explore Course Catalog
        </h2>

        {/* Grid: 1 kolom di HP, 3 kolom mulai lg */}
        <div className="mt-10 grid gap-8 lg:grid-cols-3">
          {courses.map((course) => (
            <CourseCard
              key={course.title}
              category={course.category}
              title={course.title}
              description={course.description}
              level={course.level}
              duration={course.duration}
            />
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-1 text-xl font-bold hover:underline"
          >
            See All Courses
            <ChevronsRight className="size-5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
