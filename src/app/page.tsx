"use client";

import { Button } from "@/components/ui/button";
import { Copy, Mail } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { projectData } from "@/lib/data/projectData";
import { experienceData } from "@/lib/data/experienceData";
import { socialMediaData } from "@/lib/data/socialMediaData";

export default function Home() {
  const [hoverText, setHoverText] = useState("");

  return (
    <main>
      <div className="py-6 px-4">
        <h1 className="font-semibold">Johnathon Douglass</h1>
        <p className="text-gray-500 dark:text-gray-400 font-semibold text-sm">
          Software Developer
        </p>
      </div>

      <p className="py-6 px-4">
        I work as a Junior Software Engineer at Trulioo. I like to craft
        software that feels intuitive, emphasizing seamless, fluid interfaces.
      </p>

      <div className="py-6 px-4">
        <div className="flex items-center">
          <span className="flex w-2 h-2 bg-teal-500 rounded-full" />
          <p className="ml-2 text-sm font-semibold text-teal-500">
            Currently accepting 1 new project
          </p>
        </div>
        <div className="pt-4 flex">
          <div className="flex w-20 justify-between">
            <Button
              size="icon"
              variant="outline"
              className="border rounded-md p-2"
              onMouseEnter={() => setHoverText("Shoot me an email")}
              onMouseLeave={() => setHoverText("")}
            >
              <Link href="mailto:johnathondouglass@gmail.com">
                <Mail size={15} />
              </Link>
            </Button>
            <Button
              size="icon"
              variant="outline"
              className="border rounded-md p-2"
              onMouseEnter={() => setHoverText("Copy my email address")}
              onMouseLeave={() => setHoverText("")}
              onClick={() => {
                navigator.clipboard.writeText("johnathondouglass@gmail.com");
              }}
            >
              <Copy size={15} />
            </Button>
          </div>
        </div>
        <div className="text-xs font-semibold h-1 text-gray-500 pt-2 pb-4">
          {hoverText}
        </div>
        <div className="py-4">
          <div className="font-semibold">Connect with me</div>
          <div className="flex text-sm w-1/2 justify-between pt-4">
            {socialMediaData.map((info, index) => (
              <Link
                className="no-underline bg-gradient-to-r from-black to-black underline-animation dark:from-white dark:to-white"
                href={info.url}
                target="_blank"
                key={index}
              >
                {info.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="py-6">
        <h1 className="font-semibold px-4">Projects</h1>
        <div>
          {projectData.map((project, index) => (
            <div key={index} className="p-4 rounded-lg">
              <div className="flex items-center">
                <Link
                  className="text-sm no-underline bg-gradient-to-r from-black to-black underline-animation dark:from-white dark:to-white"
                  href={project.url}
                  target="_blank"
                >
                  {project.title}
                </Link>
              </div>
              <Link
                className="text-sm text-gray-500 dark:text-gray-400"
                href={project.url}
                target="_blank"
              >
                {project.description}
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h1 className="font-semibold py-6 px-4">Experience</h1>
        <div className="relative border-s border-gray-300 dark:border-gray-700 border-dashed">
          {experienceData.map((experience, index) => (
            <div key={index} className="mb-10 ms-4 group">
              <div className="absolute w-3 h-3 bg-gray-300 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700 group-hover:bg-gray-400 group-hover:dark:bg-gray-600"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                {experience.duration}
              </time>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                {experience.role}
              </h3>
              <Link
                className="text-sm text-gray-500 dark:text-gray-400"
                href={experience.companyURL}
                target="_blank"
              >
                {experience.company}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
