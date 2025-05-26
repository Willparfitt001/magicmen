// export default function GeneralHeroSection() {
//   return (
//     <div className="h-[35vh] ">
//       <img
//         alt="Hero image"
//         className="object-cover w-full h-full"
//         src="/images/josh_hero_2.png"
//       />
//     </div>
//   );
// }

export default function GeneralHeroSection() {
  return (
    <div className="h-[40vh] sm:h-[45vh] md:h-[50vh] lg:h-[55vh] xl:h-[60vh] relative overflow-hidden">
      <img
        alt="Hero image"
        className="object-cover object-center w-full h-full min-h-full"
        src="/images/josh_hero_2.png"
        loading="eager"
        style={{
          objectPosition: 'center center',
        }}
      />
      {/* Optional overlay for better text readability if needed */}
      {/* <div className="absolute inset-0 bg-black/20"></div> */}
    </div>
  );
}
