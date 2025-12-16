import React, { useState } from "react";
import { ExternalLink, Github, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const ProjectsSection = () => {
  const [visibleProjects, setVisibleProjects] = useState(6);

  const projects = [
    {
      id: 1,
      title: "GEU ERP Redesign",
      description:
        "A modern, fast, and student-friendly redesign of the GEU Legacy Portal with optimized UI, faster navigation, and easy access to academics, attendance, results, and more.",
      image:
        "https://mrcodium.netlify.app/assets/project-preview/geu-preview.webp",
      demoUrl: "https://geu-erp.onrender.com/login",
      codeUrl: "https://github.com/abhijeetsinghrajput/geu-erp.git",
      technologies: [
        { label: "Next.js", icon: "/icons/next-js.svg", className: "dark:invert-0 invert" },
        { label: "Node.js", icon: "/icons/node-js.svg" },
        { label: "TypeScript", icon: "/icons/typescript.svg" },
        { label: "Tailwind", icon: "/icons/tailwind.svg" },
        { label: "Shadcn UI", icon: "/icons/shadcn.svg", className: "dark:invert-0 invert" },
      ],
    },
    {
      id: 2,
      title: "Notehub",
      description:
        "A clean and collaborative note-management platform to write, organize, and share notes. Supports smart formatting, LaTeX, real-time collaboration, and distraction-free UI.",
      image:
        "https://mrcodium.netlify.app/assets/project-preview/notehub-preview.webp",
      demoUrl: "https://notehub-38kp.onrender.com/",
      codeUrl: "https://github.com/abhijeetSinghRajput/notehub-production.git",
      technologies: [
        { label: "React", icon: "/icons/react.svg" },
        { label: "Express", icon: "/icons/express.svg", className: "dark:invert-0 invert"  },
        { label: "Node.js", icon: "/icons/node-js.svg" },
        { label: "MongoDB", icon: "/icons/mongo-db.svg" },
        { label: "Socket IO", icon: "/icons/socket-io.svg", className: "dark:invert-0 invert"  },
      ],
    },
    {
      id: 3,
      title: "Chess Engine",
      description:
        "A strong chess engine built with advanced algorithms capable of defeating experienced players. Features strategic move evaluation and smart decision-making.",
      image:
        "https://mrcodium.netlify.app/assets/project-preview/chess-preview1.webp",
      demoUrl: "https://chessleague.netlify.app",
      codeUrl: "https://github.com/abhijeetSinghRajput/ChessEngine.git",
      technologies: [
        { label: "HTML", icon: "/icons/html.svg" },
        { label: "CSS", icon: "/icons/css.svg" },
        { label: "JavaScript", icon: "/icons/javascript.svg" },
      ],
    },
    {
      id: 4,
      title: "Path Finder Visualizer",
      description:
        "An interactive visualizer that demonstrates popular pathfinding algorithms like A*, BFS, DFS, and Dijkstra in real-time for clearer understanding.",
      image:
        "https://mrcodium.netlify.app/assets/project-preview/pathfinder-preview.webp",
      demoUrl: "https://path-explorer.netlify.app",
      codeUrl:
        "https://github.com/abhijeetSinghRajput/pathFinderVisualizer.git",
      technologies: [
        { label: "HTML", icon: "/icons/html.svg" },
        { label: "CSS", icon: "/icons/css.svg" },
        { label: "JavaScript", icon: "/icons/javascript.svg" },
      ],
    },
    {
      id: 5,
      title: "Whisper Chat App",
      description:
        "A fast and secure real-time chat application with typing indicators, live messaging, authentication, and smooth UI built using MERN stack.",
      image:
        "https://mrcodium.netlify.app/assets/project-preview/whisper-preview.webp",
      demoUrl: "https://whisper-chat-app-m4ks.onrender.com",
      codeUrl: "https://github.com/abhijeetSinghRajput/whisper",
      technologies: [
        { label: "React", icon: "/icons/react.svg" },
        { label: "Express", icon: "/icons/express.svg", className: "dark:invert-0 invert"  },
        { label: "Node.js", icon: "/icons/node-js.svg" },
        { label: "MongoDB", icon: "/icons/mongo-db.svg" },
        { label: "Socket IO", icon: "/icons/socket-io.svg" },
      ],
    },
    {
      id: 6,
      title: "Sorting Simulator",
      description:
        "A real-time visualization tool to learn how sorting algorithms work with step-by-step animations for Bubble, Selection, Insertion, Merge, and Quick Sort.",
      image:
        "https://mrcodium.netlify.app/assets/project-preview/sorting-preview.webp",
      demoUrl: "https://sortsimulator.netlify.app",
      codeUrl: "https://github.com/abhijeetSinghRajput/sorting-simulation.git",
      technologies: [
        { label: "HTML", icon: "/icons/html.svg" },
        { label: "CSS", icon: "/icons/css.svg" },
        { label: "JavaScript", icon: "/icons/javascript.svg" },
      ],
    },
  ];

  const handleLoadMore = () => {
    setVisibleProjects((prev) => Math.min(prev + 3, projects.length));
  };

  const displayedProjects = projects.slice(0, visibleProjects);
  const hasMoreProjects = visibleProjects < projects.length;

  return (
    <section id="projects" className="animate-in fade-in slide-in-from-bottom duration-700">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-12">Projects</h2>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {displayedProjects.map((project, index) => (
            <div
              key={project.id}
              className="group rounded-2xl border bg-muted/30 overflow-hidden hover:shadow-lg transition-all duration-300 animate-in fade-in slide-in-from-bottom"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Project Image */}
              <div className="relative aspect-video overflow-hidden bg-muted">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech.label}
                      variant="secondary"
                      className="text-xs bg-muted/50 flex items-center gap-1.5 px-2.5 py-1"
                    >
                      <img
                        src={tech.icon}
                        alt={`${tech.label} icon`}
                        className={cn("w-3.5 h-3.5 object-contain", tech.className)}
                      />
                      <span>{tech.label}</span>
                    </Badge>
                  ))}
                </div>

                {/* Project Links */}
                <div className="grid grid-cols-2 gap-4 pt-2">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary text-primary-foreground rounded-xl hover:brightness-90 transition-all h-11 flex items-center justify-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-secondary text-secondary-foreground rounded-xl hover:brightness-90 transition-all h-11 flex items-center justify-center gap-2"
                  >
                    <Github className="w-4 h-4" />
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {hasMoreProjects && (
          <div className="flex justify-center">
            <Button
              variant="outline"
              onClick={handleLoadMore}
              className="h-12 rounded-full px-8"
            >
              <span>Load More Projects</span>
              <ChevronDown className="ml-2 h-5 w-5" />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;