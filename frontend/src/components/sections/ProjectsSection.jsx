import React, { useState } from "react";
import { ExternalLink, Github, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const ProjectsSection = () => {
  const [visibleProjects, setVisibleProjects] = useState(6);

  const projects = [
    {
      id: 0,
      title: "eCommerce-Website",
      codeUrl: "https://github.com/naveengupta09/eCommerce-Website",
      description: "",
      image: "/projects/ECommerce.png",
      demoUrl: "",
      technologies: [
        {
          label: "Next.js",
          icon: "/icons/next-js.svg",
          className: "dark:invert-0 invert",
        },
        { label: "Node.js", icon: "/icons/node-js.svg" },
        { label: "TypeScript", icon: "/icons/typescript.svg" },
        { label: "Tailwind", icon: "/icons/tailwind.svg" },
        {
          label: "Shadcn UI",
          icon: "/icons/shadcn.svg",
          className: "dark:invert-0 invert",
        },
      ],
    },
    {
      id: 1,
      title: "naveen-portfolio-react",
      codeUrl: "https://github.com/naveengupta09/naveen-portfolio-react",
      description: "",
      image: "/projects/portfolio.png",
      demoUrl: "",
      technologies: [
        {
          label: "Next.js",
          icon: "/icons/next-js.svg",
          className: "dark:invert-0 invert",
        },
        { label: "Node.js", icon: "/icons/node-js.svg" },
        { label: "TypeScript", icon: "/icons/typescript.svg" },
        { label: "Tailwind", icon: "/icons/tailwind.svg" },
        {
          label: "Shadcn UI",
          icon: "/icons/shadcn.svg",
          className: "dark:invert-0 invert",
        },
      ],
    },
    {
      id: 18,
      title: "CryptoCurrency_website",
      codeUrl: "https://github.com/naveengupta09/CryptoCurrency_website",
      description: "",
      image: "/projects/CryptoCurrency.png",
      demoUrl: "",
      technologies: [
        {
          label: "Next.js",
          icon: "/icons/next-js.svg",
          className: "dark:invert-0 invert",
        },
        { label: "Node.js", icon: "/icons/node-js.svg" },
        { label: "TypeScript", icon: "/icons/typescript.svg" },
        { label: "Tailwind", icon: "/icons/tailwind.svg" },
        {
          label: "Shadcn UI",
          icon: "/icons/shadcn.svg",
          className: "dark:invert-0 invert",
        },
      ],
    },
    {
      id: 4,
      title: "Agency.ai",
      codeUrl: "https://github.com/naveengupta09/Agency_AI",
      description: "",
      image: "/projects/Agency.png",
      demoUrl: "",
      technologies: [
        { label: "React.js", icon: "/icons/react.svg" },
        { label: "Tailwind", icon: "/icons/tailwind.svg" },
        {
          label: "Shadcn UI",
          icon: "/icons/shadcn.svg",
          className: "dark:invert-0 invert",
        },
      ],
    },
    {
      id: 10,
      title: "Recipe-App",
      codeUrl: "https://github.com/naveengupta09/Recipe-App",
      description: "",
      image: "/projects/RecipeApp.png",
      demoUrl: "",
      technologies: [
        {
          label: "Next.js",
          icon: "/icons/next-js.svg",
          className: "dark:invert-0 invert",
        },
        { label: "Node.js", icon: "/icons/node-js.svg" },
        { label: "TypeScript", icon: "/icons/typescript.svg" },
        { label: "Tailwind", icon: "/icons/tailwind.svg" },
        {
          label: "Shadcn UI",
          icon: "/icons/shadcn.svg",
          className: "dark:invert-0 invert",
        },
      ],
    },
    {
      id: 17,
      title: "Digital_Clock",
      codeUrl: "https://github.com/naveengupta09/Digital_Clock",
      description: "",
      image: "/projects/DigitalClock.png",
      demoUrl: "",
      technologies: [
        {
          label: "Next.js",
          icon: "/icons/next-js.svg",
          className: "dark:invert-0 invert",
        },
        { label: "Node.js", icon: "/icons/node-js.svg" },
        { label: "TypeScript", icon: "/icons/typescript.svg" },
        { label: "Tailwind", icon: "/icons/tailwind.svg" },
        {
          label: "Shadcn UI",
          icon: "/icons/shadcn.svg",
          className: "dark:invert-0 invert",
        },
      ],
    },
    {
      id: 2,
      title: "Testimonials-Slider",
      codeUrl: "https://github.com/naveengupta09/Testimonials-Slider",
      description: "",
      image: "/projects/Testimonial.png",
      demoUrl: "",
      technologies: [
        {
          label: "Next.js",
          icon: "/icons/next-js.svg",
          className: "dark:invert-0 invert",
        },
        { label: "Node.js", icon: "/icons/node-js.svg" },
        { label: "TypeScript", icon: "/icons/typescript.svg" },
        { label: "Tailwind", icon: "/icons/tailwind.svg" },
        {
          label: "Shadcn UI",
          icon: "/icons/shadcn.svg",
          className: "dark:invert-0 invert",
        },
      ],
    },
    {
      id: 3,
      title: "Filterable-Image-Gallery",
      codeUrl: "https://github.com/naveengupta09/Filterable-Image-Gallery",
      description: "",
      image: "/projects/ImageGallery.png",
      demoUrl: "",
      technologies: [
        {
          label: "Next.js",
          icon: "/icons/next-js.svg",
          className: "dark:invert-0 invert",
        },
        { label: "Node.js", icon: "/icons/node-js.svg" },
        { label: "TypeScript", icon: "/icons/typescript.svg" },
        { label: "Tailwind", icon: "/icons/tailwind.svg" },
        {
          label: "Shadcn UI",
          icon: "/icons/shadcn.svg",
          className: "dark:invert-0 invert",
        },
      ],
    },
    {
      id: 5,
      title: "Notes-App-Update",
      codeUrl: "https://github.com/naveengupta09/Notes-App-Update",
      description: "",
      image: "/projects/NotesApp.png",
      demoUrl: "",
      technologies: [
        {
          label: "Next.js",
          icon: "/icons/next-js.svg",
          className: "dark:invert-0 invert",
        },
        { label: "Node.js", icon: "/icons/node-js.svg" },
        { label: "TypeScript", icon: "/icons/typescript.svg" },
        { label: "Tailwind", icon: "/icons/tailwind.svg" },
        {
          label: "Shadcn UI",
          icon: "/icons/shadcn.svg",
          className: "dark:invert-0 invert",
        },
      ],
    },
    {
      id: 6,
      title: "Form-Validator",
      codeUrl: "https://github.com/naveengupta09/Form-Validator",
      description: "",
      image: "projects/FormValidator.png",
      demoUrl: "",
      technologies: [
        {
          label: "Next.js",
          icon: "/icons/next-js.svg",
          className: "dark:invert-0 invert",
        },
        { label: "Node.js", icon: "/icons/node-js.svg" },
        { label: "TypeScript", icon: "/icons/typescript.svg" },
        { label: "Tailwind", icon: "/icons/tailwind.svg" },
        {
          label: "Shadcn UI",
          icon: "/icons/shadcn.svg",
          className: "dark:invert-0 invert",
        },
      ],
    },
    {
      id: 7,
      title: "Bookmark_saver",
      codeUrl: "https://github.com/naveengupta09/Bookmark_saver",
      description: "",
      image: "projects/BookMarkSaver.png",
      demoUrl: "",
      technologies: [
        {
          label: "Next.js",
          icon: "/icons/next-js.svg",
          className: "dark:invert-0 invert",
        },
        { label: "Node.js", icon: "/icons/node-js.svg" },
        { label: "TypeScript", icon: "/icons/typescript.svg" },
        { label: "Tailwind", icon: "/icons/tailwind.svg" },
        {
          label: "Shadcn UI",
          icon: "/icons/shadcn.svg",
          className: "dark:invert-0 invert",
        },
      ],
    },
    {
      id: 8,
      title: "Movie-App",
      codeUrl: "https://github.com/naveengupta09/Movie-App",
      description: "",
      image: "/projects/MovieApp.png",
      demoUrl: "",
      technologies: [
        {
          label: "Next.js",
          icon: "/icons/next-js.svg",
          className: "dark:invert-0 invert",
        },
        { label: "Node.js", icon: "/icons/node-js.svg" },
        { label: "TypeScript", icon: "/icons/typescript.svg" },
        { label: "Tailwind", icon: "/icons/tailwind.svg" },
        {
          label: "Shadcn UI",
          icon: "/icons/shadcn.svg",
          className: "dark:invert-0 invert",
        },
      ],
    },
    {
      id: 9,
      title: "Dictionary-App",
      codeUrl: "https://github.com/naveengupta09/Dictionary-App",
      description: "",
      image: "/projects/DictionaryApp.png",
      demoUrl: "",
      technologies: [
        {
          label: "Next.js",
          icon: "/icons/next-js.svg",
          className: "dark:invert-0 invert",
        },
        { label: "Node.js", icon: "/icons/node-js.svg" },
        { label: "TypeScript", icon: "/icons/typescript.svg" },
        { label: "Tailwind", icon: "/icons/tailwind.svg" },
        {
          label: "Shadcn UI",
          icon: "/icons/shadcn.svg",
          className: "dark:invert-0 invert",
        },
      ],
    },
    {
      id: 11,
      title: "Currency-Converter",
      codeUrl: "https://github.com/naveengupta09/Currency-Converter",
      description: "",
      image: "/projects/CurrencyUpdate.png",
      demoUrl: "",
      technologies: [
        {
          label: "Next.js",
          icon: "/icons/next-js.svg",
          className: "dark:invert-0 invert",
        },
        { label: "Node.js", icon: "/icons/node-js.svg" },
        { label: "TypeScript", icon: "/icons/typescript.svg" },
        { label: "Tailwind", icon: "/icons/tailwind.svg" },
        {
          label: "Shadcn UI",
          icon: "/icons/shadcn.svg",
          className: "dark:invert-0 invert",
        },
      ],
    },
    {
      id: 12,
      title: "Authentication",
      codeUrl: "https://github.com/naveengupta09/Authentication",
      description: "",
      image: "/projects/Authentication.png",
      demoUrl: "",
      technologies: [
        {
          label: "Next.js",
          icon: "/icons/next-js.svg",
          className: "dark:invert-0 invert",
        },
        { label: "Node.js", icon: "/icons/node-js.svg" },
        { label: "TypeScript", icon: "/icons/typescript.svg" },
        { label: "Tailwind", icon: "/icons/tailwind.svg" },
        {
          label: "Shadcn UI",
          icon: "/icons/shadcn.svg",
          className: "dark:invert-0 invert",
        },
      ],
    },
    // {
    //   id: 13,
    //   title: "Build_AI_Chatbot",
    //   codeUrl: "https://github.com/naveengupta09/Build_AI_Chatbot",
    //   description: "",
    //   image: "",
    //   demoUrl: "",
    //   technologies: [
    //     {
    //       label: "Next.js",
    //       icon: "/icons/next-js.svg",
    //       className: "dark:invert-0 invert",
    //     },
    //     { label: "Node.js", icon: "/icons/node-js.svg" },
    //     { label: "TypeScript", icon: "/icons/typescript.svg" },
    //     { label: "Tailwind", icon: "/icons/tailwind.svg" },
    //     {
    //       label: "Shadcn UI",
    //       icon: "/icons/shadcn.svg",
    //       className: "dark:invert-0 invert",
    //     },
    //   ],
    // },
    {
      id: 14,
      title: "Build-AI-Image-Generator",
      codeUrl: "https://github.com/naveengupta09/Build-AI-Image-Generator",
      description: "",
      image: "/projects/AiImageGenerator.png",
      demoUrl: "",
      technologies: [
        {
          label: "Next.js",
          icon: "/icons/next-js.svg",
          className: "dark:invert-0 invert",
        },
        { label: "Node.js", icon: "/icons/node-js.svg" },
        { label: "TypeScript", icon: "/icons/typescript.svg" },
        { label: "Tailwind", icon: "/icons/tailwind.svg" },
        {
          label: "Shadcn UI",
          icon: "/icons/shadcn.svg",
          className: "dark:invert-0 invert",
        },
      ],
    },
    {
      id: 15,
      title: "Image_Search_Engine",
      codeUrl: "https://github.com/naveengupta09/Image_Search_Engine",
      description: "",
      image: "/projects/ImageSearchEngine.png",
      demoUrl: "",
      technologies: [
        {
          label: "Next.js",
          icon: "/icons/next-js.svg",
          className: "dark:invert-0 invert",
        },
        { label: "Node.js", icon: "/icons/node-js.svg" },
        { label: "TypeScript", icon: "/icons/typescript.svg" },
        { label: "Tailwind", icon: "/icons/tailwind.svg" },
        {
          label: "Shadcn UI",
          icon: "/icons/shadcn.svg",
          className: "dark:invert-0 invert",
        },
      ],
    },
    {
      id: 16,
      title: "Drag---Drop",
      codeUrl: "https://github.com/naveengupta09/Drag---Drop",
      description: "",
      image: "/projects/Drag&Drop.png",
      demoUrl: "",
      technologies: [
        {
          label: "Next.js",
          icon: "/icons/next-js.svg",
          className: "dark:invert-0 invert",
        },
        { label: "Node.js", icon: "/icons/node-js.svg" },
        { label: "TypeScript", icon: "/icons/typescript.svg" },
        { label: "Tailwind", icon: "/icons/tailwind.svg" },
        {
          label: "Shadcn UI",
          icon: "/icons/shadcn.svg",
          className: "dark:invert-0 invert",
        },
      ],
    },
    {
      id: 19,
      title: "product_page_esign",
      codeUrl: "https://github.com/naveengupta09/product_page_esign",
      description: "",
      image: "",
      demoUrl: "",
      technologies: [
        {
          label: "Next.js",
          icon: "/icons/next-js.svg",
          className: "dark:invert-0 invert",
        },
        { label: "Node.js", icon: "/icons/node-js.svg" },
        { label: "TypeScript", icon: "/icons/typescript.svg" },
        { label: "Tailwind", icon: "/icons/tailwind.svg" },
        {
          label: "Shadcn UI",
          icon: "/icons/shadcn.svg",
          className: "dark:invert-0 invert",
        },
      ],
    },
    {
      id: 20,
      title: "Music-Player",
      codeUrl: "https://github.com/naveengupta09/Music-Player",
      description: "",
      image: "",
      demoUrl: "",
      technologies: [
        {
          label: "Next.js",
          icon: "/icons/next-js.svg",
          className: "dark:invert-0 invert",
        },
        { label: "Node.js", icon: "/icons/node-js.svg" },
        { label: "TypeScript", icon: "/icons/typescript.svg" },
        { label: "Tailwind", icon: "/icons/tailwind.svg" },
        {
          label: "Shadcn UI",
          icon: "/icons/shadcn.svg",
          className: "dark:invert-0 invert",
        },
      ],
    },
    {
      id: 21,
      title: "QR_-Code_Generator",
      codeUrl: "https://github.com/naveengupta09/QR_-Code_Generator",
      description: "",
      image: "",
      demoUrl: "",
      technologies: [
        {
          label: "Next.js",
          icon: "/icons/next-js.svg",
          className: "dark:invert-0 invert",
        },
        { label: "Node.js", icon: "/icons/node-js.svg" },
        { label: "TypeScript", icon: "/icons/typescript.svg" },
        { label: "Tailwind", icon: "/icons/tailwind.svg" },
        {
          label: "Shadcn UI",
          icon: "/icons/shadcn.svg",
          className: "dark:invert-0 invert",
        },
      ],
    },
    {
      id: 22,
      title: "Quote-Generator",
      codeUrl: "https://github.com/naveengupta09/Quote-Generator",
      description: "",
      image: "",
      demoUrl: "",
      technologies: [
        {
          label: "Next.js",
          icon: "/icons/next-js.svg",
          className: "dark:invert-0 invert",
        },
        { label: "Node.js", icon: "/icons/node-js.svg" },
        { label: "TypeScript", icon: "/icons/typescript.svg" },
        { label: "Tailwind", icon: "/icons/tailwind.svg" },
        {
          label: "Shadcn UI",
          icon: "/icons/shadcn.svg",
          className: "dark:invert-0 invert",
        },
      ],
    },
    {
      id: 23,
      title: "Age-Calculator",
      codeUrl: "https://github.com/naveengupta09/Age-Calculator",
      description: "",
      image: "",
      demoUrl: "",
      technologies: [
        {
          label: "Next.js",
          icon: "/icons/next-js.svg",
          className: "dark:invert-0 invert",
        },
        { label: "Node.js", icon: "/icons/node-js.svg" },
        { label: "TypeScript", icon: "/icons/typescript.svg" },
        { label: "Tailwind", icon: "/icons/tailwind.svg" },
        {
          label: "Shadcn UI",
          icon: "/icons/shadcn.svg",
          className: "dark:invert-0 invert",
        },
      ],
    },
    {
      id: 24,
      title: "Notes-App",
      codeUrl: "https://github.com/naveengupta09/Notes-App",
      description: "",
      image: "",
      demoUrl: "",
      technologies: [
        {
          label: "Next.js",
          icon: "/icons/next-js.svg",
          className: "dark:invert-0 invert",
        },
        { label: "Node.js", icon: "/icons/node-js.svg" },
        { label: "TypeScript", icon: "/icons/typescript.svg" },
        { label: "Tailwind", icon: "/icons/tailwind.svg" },
        {
          label: "Shadcn UI",
          icon: "/icons/shadcn.svg",
          className: "dark:invert-0 invert",
        },
      ],
    },
    {
      id: 25,
      title: "Random-Password-Generator",
      codeUrl: "https://github.com/naveengupta09/Random-Password-Generator",
      description: "",
      image: "",
      demoUrl: "",
      technologies: [
        {
          label: "Next.js",
          icon: "/icons/next-js.svg",
          className: "dark:invert-0 invert",
        },
        { label: "Node.js", icon: "/icons/node-js.svg" },
        { label: "TypeScript", icon: "/icons/typescript.svg" },
        { label: "Tailwind", icon: "/icons/tailwind.svg" },
        {
          label: "Shadcn UI",
          icon: "/icons/shadcn.svg",
          className: "dark:invert-0 invert",
        },
      ],
    },
    {
      id: 26,
      title: "Quiz-App",
      codeUrl: "https://github.com/naveengupta09/Quiz-App",
      description: "",
      image: "",
      demoUrl: "",
      technologies: [
        {
          label: "Next.js",
          icon: "/icons/next-js.svg",
          className: "dark:invert-0 invert",
        },
        { label: "Node.js", icon: "/icons/node-js.svg" },
        { label: "TypeScript", icon: "/icons/typescript.svg" },
        { label: "Tailwind", icon: "/icons/tailwind.svg" },
        {
          label: "Shadcn UI",
          icon: "/icons/shadcn.svg",
          className: "dark:invert-0 invert",
        },
      ],
    },
    {
      id: 27,
      title: "Coffee-Website",
      codeUrl: "https://github.com/naveengupta09/Coffee-Website",
      description: "",
      image: "",
      demoUrl: "",
      technologies: [
        {
          label: "Next.js",
          icon: "/icons/next-js.svg",
          className: "dark:invert-0 invert",
        },
        { label: "Node.js", icon: "/icons/node-js.svg" },
        { label: "TypeScript", icon: "/icons/typescript.svg" },
        { label: "Tailwind", icon: "/icons/tailwind.svg" },
        {
          label: "Shadcn UI",
          icon: "/icons/shadcn.svg",
          className: "dark:invert-0 invert",
        },
      ],
    },
    {
      id: 28,
      title: "crypto_price_tracker",
      codeUrl: "https://github.com/naveengupta09/crypto_price_tracker",
      description: "",
      image: "",
      demoUrl: "",
      technologies: [
        {
          label: "Next.js",
          icon: "/icons/next-js.svg",
          className: "dark:invert-0 invert",
        },
        { label: "Node.js", icon: "/icons/node-js.svg" },
        { label: "TypeScript", icon: "/icons/typescript.svg" },
        { label: "Tailwind", icon: "/icons/tailwind.svg" },
        {
          label: "Shadcn UI",
          icon: "/icons/shadcn.svg",
          className: "dark:invert-0 invert",
        },
      ],
    },
  ];

  const handleLoadMore = () => {
    setVisibleProjects((prev) => Math.min(prev + 3, projects.length));
  };

  const displayedProjects = projects.slice(0, visibleProjects);
  const hasMoreProjects = visibleProjects < projects.length;

  return (
    <section
      id="projects"
      className="animate-in fade-in slide-in-from-bottom duration-700"
    >
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
                <Avatar className="rounded-none w-full h-full aspect-video">
                  <AvatarImage
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    onErrorCapture={() => console.log("captured first")}
                    onError={() => console.log("bubbled later")}
                  />
                  <AvatarFallback>
                    <img
                      className="w-full h-full object-cover opacity-20"
                      src="https://placehold.net/400x400.png"
                      alt={`${project.title} placeholder`}
                    />
                  </AvatarFallback>
                </Avatar>
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  onErrorCapture={() => console.log("captured first")}
                  onError={() => console.log("bubbled later")}
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
                        className={cn(
                          "w-3.5 h-3.5 object-contain",
                          tech.className,
                        )}
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
