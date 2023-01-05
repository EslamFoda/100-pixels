import Image from "next/image";
import { useState } from "react";
interface Props {
  project: any;
}
function ProjectCard({ project }: Props) {
  console.log(project.imgs[0].height);
  const [mouseEnter, setMouseEnter] = useState(false);
  return (
    <div
      style={{ height: project.imgs[0].height }}
      onMouseLeave={() => {
        setMouseEnter(false);
      }}
      onMouseEnter={() => {
        setMouseEnter(true);
      }}
      key={project.id}
    >
      {mouseEnter ? (
        <video
          src={project.video.url}
          muted
          autoPlay
          loop
          className="object-cover h-full w-full"
        />
      ) : (
        <Image
          src={project.imgs[0].url}
          alt="work img"
          className=" w-full  h-full object-cover"
          width={400}
          height={project.imgs[0].height}
        />
      )}
    </div>
  );
}

export default ProjectCard;
