import React, { useState } from "react";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { LayoutTextFlip } from "../ui/layout-text-flip";
import TooltipWrapper from "../TooltipWrapper";
import resume from "../../assets/Naveen_KUMAR.pdf";

const HeroSection = () => {
  const [showDownloadDialog, setShowDownloadDialog] = useState(false);

  const typingTexts = [
    "Full Stack Developer",
    "Problem Solver",
    "MERN Developer",
    "Algorithm Enthusiast",
  ];

  const techStack = [
    { name: "React", icon: "icons/react.svg" },
    { name: "Node.js", icon: "icons/node-js.svg" },
    { name: "MongoDB", icon: "icons/mongo-db.svg" },
    { name: "Express", icon: "icons/express.svg" },
  ];

  const socialLinks = [
    {
      href: "https://github.com/naveengupta09",
      icon: "icons/github.svg",
      label: "GitHub",
    },
    {
      href: "https://www.linkedin.com/in/naveengupta13/",
      icon: "icons/linkedin.svg",
      label: "LinkedIn",
    },
    {
      href: "https://www.geeksforgeeks.org/user/naveenkumdrdn/",
      icon: "icons/gfg.svg",
      label: "GeeksforGeeks",
    },
    {
      href: "https://leetcode.com/u/naveengupta09/",
      icon: "icons/leetcode.svg",
      label: "LeetCode",
    },
    {
      href: "https://www.instagram.com/im.naveengupta/",
      icon: "icons/insta.svg",
      label: "Instagram",
    },
  ];

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resume;
    link.download = "Naveen_KUMAR.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setShowDownloadDialog(false);
  };

  return (
    <section className="flex items-center">
      <div className="py-8 w-full">
        <div>
          {/* Hero Content */}
          <div className="flex gap-8 flex-col-reverse sm:flex-row mb-12">
            {/* Text Content */}
            <div className="flex-1 space-y-6 animate-in fade-in slide-in-from-left duration-700">
              <h1 className="text-3xl md:text-5xl font-bold">Naveen Kumar</h1>

              <div className="my-4">
                <LayoutTextFlip text="I'm a " words={typingTexts} />
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
                I build interactive web apps using modern technologies and solve
                complex problems through efficient algorithms.
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-3">
                {techStack.map((tech) => (
                  <Badge
                    key={tech.name}
                    variant={"outline"}
                    className="rounded-full bg-muted/30 gap-2 py-1.5"
                  >
                    <span>{tech.name}</span>
                    <img className="size-5" src={tech.icon} alt={tech.icon} />
                  </Badge>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <Button 
                  className="h-12 rounded-full"
                  onClick={() => setShowDownloadDialog(true)}
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </Button>

                <Button
                  variant="outline"
                  className="h-12 rounded-full bg-muted/30 border-2"
                  asChild
                >
                  <a href="#projects">View Projects</a>
                </Button>
              </div>
            </div>

            {/* Profile Image */}
            <div className="flex-1 flex items-center justify-center">
              <div className="aspect-square size-52 sm:size-80 rounded-full bg-muted overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src="/naveen-profile.png"
                  alt=""
                />
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4 flex-wrap animate-in fade-in slide-in-from-bottom duration-700">
            {socialLinks.map((link) => (
              <TooltipWrapper key={link.label} content={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="size-12 rounded-full flex items-center justify-center border bg-muted/50 hover:bg-muted transition-all"
                  aria-label={link.label}
                >
                  <img src={link.icon} alt={link.label} className="w-6 h-6 dark:invert-0 invert" />
                </a>
              </TooltipWrapper>
            ))}
          </div>
        </div>
      </div>

      {/* Download Alert Dialog */}
      <AlertDialog open={showDownloadDialog} onOpenChange={setShowDownloadDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Download Resume</AlertDialogTitle>
            <AlertDialogDescription>
              You're about to download Naveen Kumar's resume. This PDF contains professional experience, skills, and contact information.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDownload}>
              Download
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </section>
  );
};

export default HeroSection;