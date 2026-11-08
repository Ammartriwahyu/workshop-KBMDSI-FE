"use client"; // wajib, karena memakai useState dan onClick

import { useState } from "react";
import { ChevronDown } from "lucide-react";

type FaqItem = {
  question: string;
  answer: string;
};

const faqs: FaqItem[] = [
  {
    question: "What exactly is freeCodeCamp?",
    answer:
      "freeCodeCamp is a community of people from all around the world who are learning to code together. We're a 501(c)(3) public charity.",
  },
  {
    question: "Is freeCodeCamp really free?",
    answer:
      "Yes. Every aspect of freeCodeCamp is 100% free. The courses, the projects, and even the certifications.",
  },
  {
    question: "What skills will I learn?",
    answer:
      "You will learn the skills most developers use on the job: HTML, CSS, JavaScript, Python, Linux, Git, and SQL, and more.",
  },
  {
    question: "How do I get started?",
    answer:
      "If you're a beginner, you should start at the beginning of the freeCodeCamp core curriculum.",
  },
];

export default function Faq() {
  // Menyimpan nomor (index) pertanyaan yang sedang terbuka.
  // null = tidak ada yang terbuka.
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function handleToggle(index: number) {
    // Klik pertanyaan yang sama -> tutup. Klik pertanyaan lain -> buka yang itu.
    setOpenIndex(openIndex === index ? null : index);
  }

  return (
    <section className="py-14">
      <div className="mx-auto max-w-fcc px-4">
        <h2 className="text-3xl font-bold md:text-4xl">
          Frequently asked questions:
        </h2>

        <div className="mt-8 divide-y divide-fcc-border border-y border-fcc-border">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={faq.question}>
                <button
                  type="button"
                  onClick={() => handleToggle(index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 py-4 text-left text-lg font-bold md:text-xl"
                >
                  {faq.question}
                  {/* Ikon berputar 180 derajat saat terbuka */}
                  <ChevronDown
                    className={`size-5 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  />
                </button>

                {/* Jawaban hanya muncul kalau isOpen bernilai true */}
                {isOpen && (
                  <p className="pb-4 text-lg leading-relaxed text-fcc-gray">
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
