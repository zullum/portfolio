"use client";
import React from "react";
import { projects } from "@/data";
import { FaArrowLeft, FaLocationArrow } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";
import MagicButton from "@/components/ui/MagicButton";

const ProjectDetails = ({ params }: { params: { id: string } }) => {
  const project = projects.find((p) => p.id === Number(params.id));

  if (!project) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-black-100 text-white">
        <h1>Project not found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 relative">
      <div className="max-w-7xl w-full pt-36 pb-20">
        <Link href="/#projects" className="inline-block mb-10">
          <MagicButton
            title="Back to Projects"
            icon={<FaArrowLeft />}
            position="left"
            otherClasses="!bg-[#161a31]"
          />
        </Link>

        <div className="flex flex-col lg:flex-row gap-10">
          <div className="w-full lg:w-1/2 relative aspect-video rounded-3xl overflow-hidden border border-white/[0.1]">
            <div className="absolute inset-0 bg-[#13162D]" />
            <Image
              src="/bg.png"
              alt="bg-img"
              fill
              className="absolute inset-0 w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 z-10 w-full h-full p-0 flex items-center justify-center">
               <Image
                src={project.img}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium w-fit mb-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
              Private Access / VPN Protected
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              {project.title}
            </h1>

            <p className="text-white-100 text-lg mb-8 leading-relaxed">
              {project.des}
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              {project.iconLists.map((icon, index) => (
                <div
                  key={index}
                  className="border border-white/[.2] rounded-full bg-black w-12 h-12 flex justify-center items-center relative"
                >
                  <Image src={icon} alt="icon" width={24} height={24} className="p-2" />
                </div>
              ))}
            </div>
            
             <div className="text-gray-300 space-y-4 markdown-content whitespace-pre-line leading-relaxed">
                {project.content?.split('\n').map((line, i) => {
                  const trimmed = line.trim();
                   if (trimmed.startsWith('###')) {
                    return <h3 key={i} className="text-xl font-bold text-purple mt-6 mb-2">{trimmed.replace('###', '').trim()}</h3>;
                  }
                  if (trimmed.startsWith('**')) {
                     // Simple bold parsing for the specific format we added
                     const content = trimmed.replace(/\*\*/g, '');
                     return <p key={i} className="font-semibold text-white mb-2">{content}</p>
                  }
                  return <p key={i}>{trimmed}</p>
                })}
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
