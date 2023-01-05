import Header from "../ui/header";
import Masonry from "react-masonry-css";
import ProjectCard from "../common/projectCard";
function Work({ works }: any) {
  const breakpointColumnsObj = {
    default: 3,
    900: 2,
    700: 2,
    500: 1,
  };
  return (
    <div className="py-14 space-y-8">
      <Header text="Work" />

      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {works.map((project: any) => {
          return <ProjectCard key={project.id} project={project} />;
        })}
      </Masonry>
    </div>
  );
}

export default Work;
