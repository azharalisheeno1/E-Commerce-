import React from "react";
import post1 from "../assets/Post1.jpg";
import post2 from "../assets/post2.jpg";
import post3 from "../assets/post3.webp";

function BlogSection() {
  const lists = [
    {
      id: 1,
      image: post1,
      name: "30% discount on grocery",
      date: "Till 25 May 2024",
    },
    {
      id: 2,
      image: post2,
      name: "20% discount on vegetables",
      date: "Till 25 May 2024",
    },
    {
      id: 3,
      image: post3,
      name: "40% discount on baby products",
      date: "Till 25 May 2024",
    },
  ];
  return (
    <>
      <div className="w-full  h-full my-10 px-10 ">
        <div className="md:flex justify-between items-center  ">
          <div className="mb-5">
            <h1 className="text-2xl mb-2 font-bold md:text-3xl">Latest News</h1>
            <p>
              Present posts in a best way to highlight interesting moments of
              your blog.
            </p>
          </div>
        </div>
        <div>
          <div className="md:flex gap-5  ">
            {lists.map((list) => (
              <div key={list.id} className="md:w-[500px] my-5    ">
                <img
                  src={list.image}
                  className="rounded-lg hover:scale-105 h-[350px]"
                  alt=""
                />

                <h1 className="text-2xl mt-3">{list.name}</h1>
                <p className="mt-2 mb-1 text-lg text-green-600 font-semibold ">
                  {list.date}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogSection;
