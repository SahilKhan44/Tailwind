import React from "react";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Alper Kamu",
      role: "UI Developer",
      description:
        "DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
      imgSrc:
        "data:image/jpeg;base64,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",
    },
    {
      name: "Holden Caulfield",
      role: "UI Developer",
      description:
        "DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
      imgSrc:
        "data:image/jpeg;base64,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",
    },
    {
      name: "Atticus Finch",
      role: "UI Developer",
      description:
        "DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
      imgSrc:
        "data:image/jpeg;base64,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",
    },
    {
      name: "Henry Letham",
      role: "UI Developer",
      description:
        "DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
      imgSrc:
        "data:image/jpeg;base64,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",
    },
  ];

  return (
    <section className="text-gray-600 body-font w-full h-full">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="text-2xl font-medium title-font mb-4 text-gray-900">
            OUR TEAM
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify, subway tile poke farm-to-table. Franzen you probably
            haven't heard of them.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {teamMembers.map((member, index) => (
            <div key={index} className="p-4 lg:w-1/4 md:w-1/2">
              <div className="h-full flex flex-col items-center text-center">
                <img
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                  src={member.imgSrc}
                />
                <div className="w-full">
                  <h2 className="title-font font-medium text-lg text-gray-900">
                    {member.name}
                  </h2>
                  <h3 className="text-gray-500 mb-3">{member.role}</h3>
                  <p className="mb-4">{member.description}</p>
                  <span className="inline-flex">
                    <a
                      href="https://www.youtube.com/watch?v=GagbzZ52Pp8&sttick=0"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500"
                    >
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                      </svg>
                    </a>
                    <a className="ml-2 text-gray-500">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                      </svg>
                    </a>
                    <a className="ml-2 text-gray-500">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
