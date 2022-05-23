import React from "react";

const Home: React.FC = () => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-md shadow-md overflow-hidden md:max-w-2xl mt-4 p-4">
      <div className="flex items-center justify-between mb-1">
        <h1 className="text-3xl font-bold">kerron parchment</h1>
        <div>
          <span>Github:</span>
          <a
            className="ml-1 font-semibold hover:text-blue-800"
            href="https://github.com/kerron"
          >
            @<span className="underline">kerron</span>
          </a>
        </div>
      </div>
      <hr />
      <div>
        <div className="flex justify-between mt-6">
          <div className="flex flex-col">
            <span className="font-semibold">esure</span>
            <span className="italic text-xs">Senior Frontend Developer</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm">London, UK</span>
            <span className="text-xs italic">Aug. 2021 – present</span>
          </div>
        </div>
        <ul className="mt-4 marker:text-sky-900 list-disc pl-5 space-y-3 text-sm">
          <li>
            Lead the frontend team on building software and customer experiences
            that support esure's business and its digital transformation
          </li>
          <li>
            Working with the product owner and developers to design and build
            customer facing systems using React frontend, Java microservices and
            the latest cloud technologies
          </li>
          <li>
            Actively sharing technical expertise with the team both as a
            hands-on developer and mentor to both senior and junior developers
          </li>
          <li>
            Improving the engineering best practices in the squad and wider
            esure company, including code quality, and testing
          </li>
          <li>
            Working with SRE engineers to build distributed systems with a focus
            on high availability, low latency and scalability
          </li>
          <li>
            Senior member of esure's engineering community, engaging in tech
            forums and driving tech change wider than my own squad
          </li>
          <li>Ensure the squad has a clear mission and healthy backlog</li>
          <li>
            Exhibit drive and initiative to learn whatever is necessary to
            explore new and existing solutions
          </li>
          <li>
            <span className="font-semibold">Tech</span>: Typescript, React,
            Material UI, mobx-state-tree, React Testing Library, Nestjs,
            storybooks, JSS, AWS
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
