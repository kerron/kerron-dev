import React from "react";

const Home: React.FC = () => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-md shadow-md overflow-hidden md:max-w-2xl my-12 p-4">
      <div className="flex items-center justify-between mb-1">
        <h1 className="text-3xl font-bold">kerron parchment</h1>
        <div className="flex flex-col">
          <div className="text-sm mb-2">
            <span>Github:</span>
            <a
              className="font-semibold text-blue-800"
              href="https://github.com/kerron?tab=repositories"
            >
              @<span className="underline">kerron</span>
            </a>
          </div>
          <a
            className="text-sm text-blue-800"
            href="mailto:kerronparchment@gmail.com"
          >
            kerronparchment@gmail.com
          </a>
        </div>
      </div>
      <hr />
      <div className="my-6">
        <div className="flex justify-between">
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
            <span className="font-semibold">Tech</span>:{" "}
            <span className="text-slate-500 italic">
              Typescript, React, Material UI, mobx-state-tree, React Testing
              Library, Nestjs, storybooks, JSS, AWS
            </span>
          </li>
        </ul>
      </div>

      <hr />
      <div>
        <ul className="mt-4 marker:text-sky-900 list-disc pl-5 space-y-3 text-sm">
          <li>
            <a
              className="font-semibold text-blue-800"
              href="https://play.google.com/store/apps/details?id=com.neko2"
            >
              Neko
            </a>{" "}
            <span className="text-slate-500">[React Native]</span>: I actively
            develop and maintain a location-based application which allows users
            to meet and openly chat with others based on their interests.
          </li>
          <li>
            <a
              className="font-semibold text-blue-800"
              href="https://github.com/kerron/tspp"
            >
              tspp
            </a>{" "}
            <span className="text-slate-500">[typescript]</span>: rewriting the
            algorithms in the C++ standard library using TypeScript.
          </li>
          <li>
            <a
              className="font-semibold text-blue-800"
              href="https://github.com/kerron/ts-hs"
            >
              ts-hs
            </a>{" "}
            <span className="text-slate-500">[typescript]</span>: Lazy evaluated
            functions written in TypeScript and inspired by Haskell.
          </li>
          <li>
            <a
              className="font-semibold text-blue-800"
              href="https://medium.com/@riggedjs"
            >
              Medium
            </a>
            <span className="text-slate-500"> [@riggedjs]</span>: I write
            JavaScript related articles under the pseudonym @riggedjs
          </li>
          <li>
            <a className="font-semibold">Github Visualisation</a>{" "}
            <span className="text-slate-500">[Reactjs]</span>: easy way of
            consuming Github stats for a specific repository. Available by demo.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
