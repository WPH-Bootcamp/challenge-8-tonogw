import { companyLogos } from "../../data/companyLogo";

export default function CompanyLogoSection() {
  return (
    <section className="min-h-99 bg-white dark:bg-gray-900 flex items-center justify-center">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center gap-12">
          <h2 className="text-center text-lg font-semibold text-gray-900 dark:text-white">
            Trusted by Global Innovators & Leading Brands
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-10  sm:gap-x-10 lg:max-w-none lg:flex">
            {companyLogos.map((logo) => (
              <img
                key={logo.name}
                src={logo.image}
                alt={logo.name}
                width={120}
                height={40}
                // HOVER TO RETURN BACK COLOR INTO ITS ORIGINAL
                className="object-contain saturate-0   hover:saturate-100 hover:brightness-120"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
