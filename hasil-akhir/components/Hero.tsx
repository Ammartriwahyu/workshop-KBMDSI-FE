export default function Hero() {
  return (
    <section className="bg-linear-to-b from-pink-100 to-sky-100">
      {/* Container: lebar maksimal 1170px, posisi di tengah */}
      <div className="mx-auto max-w-fcc px-4 py-16 md:py-24">
        <div className="max-w-2xl">
          <h1 className="text-5xl leading-tight font-bold md:text-7xl">
            Build Your Skills for Free.
          </h1>

          <p className="mt-6 text-xl leading-relaxed md:text-2xl">
            Advance your career by learning in-demand skills in Programming,
            DevOps, Cybersecurity, AI Engineering, and English for Developers.
          </p>

          {/* Tombol kuning: lebar penuh di HP, selebar isinya mulai md */}
          <a
            href="#"
            className="mt-8 block w-full border-2 border-fcc-yellow bg-linear-to-b from-fcc-yellow-light to-fcc-yellow-dark px-10 py-3 text-center text-2xl text-fcc-navy md:inline-block md:w-auto"
          >
            Get started (it&apos;s free)
          </a>
        </div>
      </div>
    </section>
  );
}
