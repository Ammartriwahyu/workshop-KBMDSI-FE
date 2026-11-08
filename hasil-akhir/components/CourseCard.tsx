import { Clock, Signal } from "lucide-react";

// Type = "cetakan" bentuk data satu kursus.
// Di-export supaya bisa dipakai juga di CourseCatalog.tsx
export type Course = {
  category: string;
  title: string;
  description: string;
  level: string;
  duration: string;
};

// Props komponen ini bertipe Course, lalu langsung dibongkar (destructuring)
export default function CourseCard({
  category,
  title,
  description,
  level,
  duration,
}: Course) {
  return (
    <a
      href="#"
      className="flex flex-col justify-between gap-6 border border-fcc-border bg-white p-4.5 hover:border-fcc-gray"
    >
      {/* Bagian atas: label, judul, deskripsi */}
      <div>
        <span className="inline-block border border-fcc-gray px-1.5 text-sm">
          {category}
        </span>
        <h3 className="mt-3 text-xl font-bold">{title}</h3>
        <p className="mt-2 text-lg leading-relaxed">{description}</p>
      </div>

      {/* Bagian bawah: level di kiri, durasi di kanan */}
      <div className="flex items-center justify-between text-base text-fcc-gray">
        <span className="flex items-center gap-2">
          <Signal className="size-4" aria-hidden="true" />
          {level}
        </span>
        <span className="flex items-center gap-2">
          <Clock className="size-4" aria-hidden="true" />
          {duration}
        </span>
      </div>
    </a>
  );
}
