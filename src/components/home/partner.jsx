"use client";
const card_data = [
  {
    img: "https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-6f9d852/www.magicmen.com.au/wp-content/uploads/mtvnew.jpg",
  },
  {
    img: "https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-6f9d852/www.magicmen.com.au/wp-content/uploads/womens-weeklynew.jpg",
  },
  {
    img: "https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-6f9d852/www.magicmen.com.au/wp-content/uploads/tvweeknew.jpg",
  },
  {
    img: "https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-6f9d852/www.magicmen.com.au/wp-content/uploads/thevoicenew.jpg",
  },
  {
    img: "https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-6f9d852/www.magicmen.com.au/wp-content/uploads/novanew.jpg",
  },
  {
    img: "https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-6f9d852/www.magicmen.com.au/wp-content/uploads/heraldsonnew.jpg",
  },
  {
    img: "https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-6f9d852/www.magicmen.com.au/wp-content/uploads/foxnew.jpg",
  }, // Fixed line
  {
    img: "https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-6f9d852/www.magicmen.com.au/wp-content/uploads/ninenew.jpg",
  },
  {
    img: "https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-6f9d852/www.magicmen.com.au/wp-content/uploads/sevennew.jpg",
  },
  {
    img: "https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-6f9d852/www.magicmen.com.au/wp-content/uploads/Panda.jpeg",
  },
];

export default function Partner() {
  return (
    <div className="text-white hidden md:block">
      <h1 className="text-center text-7xl font-alex-brush">Who We Work With</h1>
      <p className="text-yellow-600 text-center my-6">
        We work with the leading brands and clubs in the market
      </p>
      <div className="grid w-4/5 grid-cols-5 gap-4 mx-auto p-6">
        {card_data.map((d, i) => {
          return <Card img={d.img} key={i} />;
        })}
      </div>
    </div>
  );
}

function Card({ img }) {
  return (
    <div>
      <img src={img} className="bg-black" />
    </div>
  );
}
