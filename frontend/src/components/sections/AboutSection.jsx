import { cn } from "@/lib/utils";
import React from "react";

const AboutSection = () => {
  const technologies = [
    { name: "React.js", icon: "icons/react.svg" },
    { name: "Next.js", icon: "icons/next-js.svg", className: "dark:invert-0 invert" },
    { name: "Node.js", icon: "icons/node-js.svg" },
    { name: "Express.js", icon: "icons/express.svg", className: "dark:invert-0 invert"  },
    { name: "MongoDB", icon: "icons/mongo-db.svg" },
    { name: "Tailwind", icon: "icons/tailwind.svg" },
    { name: "TypeScript", icon: "icons/typescript.svg" },
    { name: "Git", icon: "icons/git.svg" },
  ];

  return (
    <section id="about" className="animate-in fade-in slide-in-from-bottom duration-700">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-12">About Me</h2>

        <div className="flex flex-col md:flex-row gap-12 items-start">
          {/* About Image */}
          <div className="w-full md:w-1/3 flex justify-center">
            <div>
              <div className="w-52 h-52 rounded-2xl overflow-hidden bg-muted">
                <img
                  src="./naveen.jpg"
                  alt="Naveen Kumar"
                  className="w-full h-full object-cover"
                />
              </div>
              <img
                className="invert dark:invert-0 h-12 mx-auto mt-2 -rotate-12"
                src="/naveen-signature.svg"
                alt="naveen signature"
              />
            </div>
          </div>

          {/* About Text */}
          <div className="flex-1 space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Hey! I'm <strong className="text-foreground">Naveen Kumar</strong>
              , a passionate{" "}
              <span className="text-foreground font-medium">
                MERN stack developer
              </span>{" "}
              who loves building smooth, fast, and enjoyable full-stack
              applications. I've worked on{" "}
              <span className="text-foreground font-medium">10+ projects</span>{" "}
              — from UI ideas to end-to-end products — always experimenting and
              adding my own touch.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              A bit of a DSA nerd 😅 — solved{" "}
              <span className="text-foreground font-medium">250+ problems</span>{" "}
              on LeetCode. This helps me write clean, scalable code where great
              UX meets strong logic.
            </p>
          </div>
        </div>
        {/* Technologies */}
        <div className="pt-6">
          <h3 className="text-xl font-semibold mb-4">Technologies & Tools</h3>
          <div className="flex gap-2 flex-wrap">
            {technologies.map((tech) => (
              <div
                key={tech.name}
                className="flex items-center gap-2 p-3 py-1.5 rounded-lg bg-muted/50 hover:bg-muted transition-all hover:scale-105 duration-300"
              >
                <img src={tech.icon} alt={tech.name} className={cn("size-6", tech.className)} />
                <span className="text-sm font-medium text-center">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
