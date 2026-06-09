'use client';
import './styleProjectCards.css';
import { ScrollAnimation } from "../uilayouts/scroll-animation";
import { Link } from 'react-router-dom';


function ProjectCard({
  thumbnail,
  type,
  title,
  description,
  tags,
  delay = 0,
  reversed = false,
  slug
}: {
  thumbnail: string;
  type: 'research' | 'tool' | 'visualization';
  title: string;
  description: string;
  tags: string[];
  delay?: number;
  reversed?: boolean;
  slug: string;
}) {
  return (
    <ScrollAnimation animation="fade-up" duration={1} delay={delay}>
      <Link to={`/${slug}`} className={`project-card  w-full text-left`}>
       {reversed == false && <img src={`${import.meta.env.BASE_URL}${thumbnail}`} alt={title} />}


        <div className="project-copy">
          <h3 className="text-sm tracking-[0.7em] uppercase text-purple-500 font-bold">
            {type.toUpperCase()}
          </h3>
          <h2 className="project-copy-title">{title.toUpperCase()}</h2>

          <p className="description project-description ">{description}</p>
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-2">
              {tags.map((tag, index) => (
                <span key={index} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {reversed && <img src={`${import.meta.env.BASE_URL}${thumbnail}`} alt={title} />}
      </Link>
    </ScrollAnimation>
  );
}

export default ProjectCard;