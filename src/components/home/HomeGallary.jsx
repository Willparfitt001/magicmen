const card_data = [
  {
    img: `https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-6f9d852/www.magicmen.com.au/wp-content/uploads/DSC09124-400x290.jpg`,
    label: "19th Feb Melb",
    link: "/",
  },
  {
    img: `https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-6f9d852/www.magicmen.com.au/wp-content/uploads/DSC08760-400x290.jpg`,
    label: "12th Feb Melb",
    link: "/",
  },
  {
    img: `https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-6f9d852/www.magicmen.com.au/wp-content/uploads/DSC8990-400x290.jpg`,
    label: "5th Feb Melb",
    link: "/",
  },
];

export default function HomeGallary() {
  return (
    <div className="text-white ">
      <span className="flex justify-center flex-wrap items-center uppercase text-2xl font-bold my-11 font-roboto-mono gap-2">
        <h1>See photos from our </h1>
        <h1 className="text-yellow-600">Weekly Stage Shows</h1>
      </span>
      <span className="flex justify-center">
        <a
          className="flex w-fit items-center justify-center uppercase font-bold bg-fuchsia-600 text-white py-2 px-4 rounded-full hover:bg-fuchsia-800 transition-colors"
          href="hens"
        >
          Check our Show Gallaries
        </a>
      </span>

      <div className="grid grid-cols-1 md:grid-cols-3 px-2 md:px-11 py-4 my-6 gap-4">
        {card_data.map((d, i) => {
          return <Card data={d} key={i} />;
        })}
      </div>
    </div>
  );
}

function Card({ data }) {
  return (
    <a href={data?.link}>
      <img src={data?.img} className="border border-yellow-600" />
      <p className="p-4 text-center capitalize font-bold">{data?.label}</p>
    </a>
  );
}
