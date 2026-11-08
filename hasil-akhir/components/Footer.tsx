const trendingGuides = [
  "REST APIs",
  "Clean Code",
  "TypeScript",
  "JavaScript",
  "Command Line",
  "GraphQL APIs",
  "Linux",
  "React",
  "Docker",
  "Python",
  "Node.js",
  "CSS Transforms",
];

const charityLinks = [
  "About",
  "Alumni Network",
  "Open Source",
  "Shop",
  "Support",
  "Sponsors",
  "Academic Honesty",
  "Code of Conduct",
  "Privacy Policy",
  "Terms of Service",
  "Copyright Policy",
];

export default function Footer() {
  return (
    <footer className="bg-fcc-light py-10 text-base text-fcc-footer-text">
      <div className="mx-auto max-w-fcc px-4">
        {/* Dua kolom: bertumpuk di HP, berdampingan mulai lg */}
        <div className="grid gap-10 lg:grid-cols-2">
          {/* KOLOM KIRI: tentang freeCodeCamp */}
          <div className="space-y-4 leading-relaxed">
            <p>
              freeCodeCamp is a donor-supported tax-exempt 501(c)(3) charitable
              organization.
            </p>
            <p>
              Our mission: to help people learn to code for free. We do this by
              creating thousands of videos, articles, and interactive coding
              lessons, all freely available to the public.
            </p>
            <p>
              Donations to freeCodeCamp go toward our education initiatives,
              and help pay for servers, services, and staff.
            </p>
            <p className="text-lg font-bold">
              You can make a tax-deductible donation{" "}
              <a href="#" className="underline">
                here
              </a>
              .
            </p>
          </div>

          {/* KOLOM KANAN: Trending Guides + Mobile App */}
          <div>
            <h2 className="text-center font-bold">Trending Guides</h2>
            {/* Grid link: 2 kolom di HP, 3 kolom mulai md */}
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-3 md:grid-cols-3">
              {trendingGuides.map((guide) => (
                <li key={guide}>
                  <a href="#" className="hover:underline">
                    {guide}
                  </a>
                </li>
              ))}
            </ul>

            <h2 className="mt-8 text-center font-bold">Mobile App</h2>
            <div className="mt-4 flex justify-center gap-4">
              <a href="#" className="bg-black px-4 py-2 text-sm text-white">
                App Store
              </a>
              <a href="#" className="bg-black px-4 py-2 text-sm text-white">
                Google Play
              </a>
            </div>
          </div>
        </div>

        {/* BARIS BAWAH: Our Charity */}
        <div className="mt-10 border-t border-fcc-border pt-6">
          <h2 className="font-bold">Our Charity</h2>
          {/* flex-wrap: link berjejer ke samping lalu turun kalau penuh */}
          <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-2">
            {charityLinks.map((link) => (
              <li key={link}>
                <a href="#" className="hover:underline">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
