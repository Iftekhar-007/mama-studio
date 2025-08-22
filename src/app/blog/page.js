import React from "react";

const blog = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?limit=4");
  const datas = await res.json();
  const data = datas.slice(0, 4);
  return (
    <div className="max-w-7xl mx-auto p-16">
      <h2 className="text-2xl font-normal md:text-3xl lg:text-4xl font-[Inter] pb-6">
        Blogs
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        {data.map((d, index) => (
          <div key={index}>
            <h2 className="text-3xl">{d.title}</h2>
            <p>{d.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default blog;
