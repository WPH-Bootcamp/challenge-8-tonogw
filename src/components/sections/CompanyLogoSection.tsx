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
                width={158}
                height={48}
                className="h-8 w-auto object-contain grayscale brightness-0 opacity-50 dark:invert hover:opacity-100 transition duration-300"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// export default function TestSectionCompanyLogo() {
//   return (
//     <div className="bg-white dark:bg-gray-900 py-24 sm:py-32">
//       <div className="mx-auto max-w-7xl px-6 lg:px-8">
//         <h2 className="text-center text-lg/8 font-semibold text-gray-900 dark:text-white">
//           Trusted by the world most innovative teams
//         </h2>
//         <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
//           <img
//             alt="Adobe"
//             src={AdobeLogo}
//             width={158}
//             height={48}
//             className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
//           />

//           <img
//             alt="upwork"
//             src={UpworkLogo}
//             width={158}
//             height={48}
//             className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
//           />

//           <img
//             alt="zoom"
//             src="./src/assets/Logo_zoom.png"
//             width={158}
//             height={48}
//             className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
//           />

//           <img
//             alt="postman"
//             src="/src/assets/Logo_Postman.png"
//             width={158}
//             height={48}
//             className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
//           />

//           <img
//             alt="databricks"
//             src="./src/assets/Logo_dataBricks.png"
//             width={158}
//             height={48}
//             className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
//           />

//           <img
//             alt="airbnb"
//             src="./src/assets/Logo_airBnB.png"
//             width={158}
//             height={48}
//             className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
//           />

//           <img
//             alt="dropbox"
//             src="./src/assets/Logo_Dropbox.png"
//             width={158}
//             height={48}
//             className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
//           />

//           <img
//             alt="paypal"
//             src="./src/assets/Logo_PayPal.png"
//             width={158}
//             height={48}
//             className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
//           />

//           <img
//             alt="netflix"
//             src="./src/assets/Logo_Netflix.png"
//             width={158}
//             height={48}
//             className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }
