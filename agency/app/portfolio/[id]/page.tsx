import Title from "@/Components/Title/Title";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import portfolios from "@/utils/portfolio";

interface Props {
  params: {
    id: string;
  };
}

function page({ params }: Props) {
  const { id } = params;

  const portfolio = portfolios.find((portfolio) => portfolio.link === id);
  const imagesLength = portfolio?.details?.images?.length || 0;

  if (!portfolio) {
    return (
      <div className="text-4xl font-bold text-center mt-20">
        Portfolio not found
      </div>
    );
  }

  return (

      <section className="py-[5rem] mq-sections">
        <Title title={portfolio.title} label={portfolio.category} />
        <div className="mt-[5rem]">
          <Image
            src={portfolio.previewImage}
            alt={portfolio.title}
            className="rounded-md object-cover"
          />
        </div>

        <div className="mt-[5rem]">
          <div className="flex flex-col gap-8">
            <p className="uppercase text-gray-300 font-medium">
              {portfolio.date}
            </p>
            <p className="text-5xl font-bold text-gray-200">
              {portfolio.subtitle}
            </p>

            <div className="py-6 grid grid-cols-1 md:grid-cols-[320px_1fr] border-b-2">
              <div>
                <h3>What Did I learn:</h3>
                <ul className="text-gray-300 list-disc list-inside">
                    {portfolio.lessonsLearned?.map((challenge, index) => (
                      <li key={index}>{challenge}</li>
                    ))}
                  </ul>
              </div>
              <div className="mt-8 md:mt-0 md:pl-16 md:border-l-2">
                <h3 className="mt-8 md:mt-0 text-gray-300 font-medium">Project Details</h3>
                <div className="mt-2 md:mt-8 flex flex-col gap-4">
                  {portfolio.details.paragraphs.map((detail, index) => (
                    <p key={index} className="text-gray-300">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <div className="py-6 grid grid-cols-1 md:grid-cols-[320px_1fr] border-b-2">
                <div>
                  <h3>Technologies Used:</h3>
                  <ul className="text-gray-300 list-disc list-inside">
                    {portfolio.technologiesUsed?.map((challenge, index) => (
                      <li key={index}>{challenge}</li>
                    ))}
                  </ul>
                </div>
                <div className="md:mt-0 md:pl-16 md:border-l-2">
                  <h3 className="mt-8 md:mt-0 text-gray-300 font-medium">Project Features</h3>
                  <ul className="mt-8 flex flex-col gap-4">
                    {portfolio.details.bulletPoints.map((bullet, index) => (
                      <li
                        key={index} // Added key here
                        className="flex items-center gap-4 text-gray-300"
                      >
                        <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <Link href={portfolio.details.footer} className="text-blue-400">
                Check out the website
              </Link>
            </div>

            <div className="flex flex-col">
              <div className="flex gap-8">
                {portfolio.details.images
                  .slice(0, imagesLength - 1)
                  .map((image, index) => (
                    <div key={index}> {/* Added key here */}
                      <Image
                        src={image}
                        alt={portfolio.title}
                        className="rounded-md object-cover"
                      />
                    </div>
                  ))}
              </div>
              <div className="mt-8">
                <Image
                  src={portfolio.details.images[imagesLength - 1]}
                  alt={portfolio.title}
                  className="rounded-md object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}

export default page;
