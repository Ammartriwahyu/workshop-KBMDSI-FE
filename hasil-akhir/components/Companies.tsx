// Nama perusahaan ditulis sebagai teks biasa (bukan logo asli)
const companies = ["Apple", "Google", "Microsoft", "Spotify", "Amazon"];

export default function Companies() {
  return (
    <section className="py-12 md:py-16">
      <div className="mx-auto max-w-fcc px-4 text-center">
        <p className="text-lg text-fcc-gray md:text-xl">
          More than <strong>100,000</strong> freeCodeCamp graduates work in
          companies such as
        </p>

        {/* flex-wrap: kalau tidak muat satu baris, turun ke baris berikutnya */}
        <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 md:gap-x-16">
          {companies.map((company) => (
            <li key={company} className="text-2xl font-bold text-fcc-gray/70">
              {company}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
