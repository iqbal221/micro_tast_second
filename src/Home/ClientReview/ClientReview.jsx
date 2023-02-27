import React from "react";

const ClientReview = () => {
  return (
    <div className="carousel w-full  mb-16  ">
      <div
        id="slide1"
        className="carousel-item relative w-full h-96 grid place-items-center bg-green-500"
      >
        <div className="absolute w-[800px] text-center text-white">
          <p className="font-semibold text-lg mb-6 ">
            The counselors and staff are simply amazing. They are fun and full
            of energy and love and compassion. I could not recommend this camp
            more highly. It is truly magnificent.
          </p>
          <h4 className="text-2xl font-bold underline ">Stephanie </h4>
          <p className="text-lg italic">Camper Mom</p>
        </div>

        <div className="absolute flex justify-between transform -translate-y-1/2 left-20 right-20 top-1/2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div
        id="slide2"
        className="carousel-item relative w-full h-96  grid place-items-center bg-green-500"
      >
        <div className="absolute w-[800px] text-center text-white">
          <p className="font-semibold text-lg mb-6 ">
            The staff is excellent and pour God's word into the kids in a "fun"
            way. Zip lining, rappelling, tubing in Carters lake, field games,
            are just some of the week-long activities. My son even says the food
            is the best ever! 5 stars
          </p>
          <h4 className="text-2xl font-bold underline ">Shannon </h4>
          <p className="text-lg italic">Camper Mom</p>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-20 right-20 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div
        id="slide3"
        className="carousel-item relative w-full h-96 grid place-items-center bg-green-500"
      >
        <div className="absolute w-[800px] text-center text-white">
          <p className="font-semibold text-lg mb-6 ">
            Sixteen years after being a counselor for Camp Highland, God
            continues to positively impact me and now the lives of my kids with
            this ministry. Camper Dad
          </p>
          <h4 className="text-2xl font-bold underline ">Greg </h4>
          <p className="text-lg italic">Camper Dad</p>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-20 right-20 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div
        id="slide4"
        className="carousel-item relative w-full h-96 grid place-items-center bg-green-500"
      >
        <div className="absolute w-[800px] text-center text-white">
          <p className="font-semibold text-lg mb-6 ">
            This camp is amazing. My child has attended 2 years in a row and he
            loves it. He enjoys the activities, loves the staff, and comes home
            with renewed energy to serve the Lord. The staff is awesome and the
            camp is beautiful.
          </p>

          <p className="text-lg italic">Camper Mom</p>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-20 right-20 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default ClientReview;
