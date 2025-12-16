import { cn } from "@/lib/utils";
import React from "react";

const EducationSection = () => {
  const educationData = [
    {
      id: 1,
      degree: "Master of Computer Applications (MCA)",
      institution: "Graphic Era University, Dehradun",
      duration: "2024 - 2026 (Currently pursuing)",
      grade: "CGPA: 7.46/10",
    },
    {
      id: 2,
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Babasaheb Bhimrao Ambedkar Bihar University (BRABU), Bihar",
      duration: "2021 - 2024",
      grade: "Graduated with 75.35%",
    },
    {
      id: 3,
      degree: "Higher Secondary (12th)",
      institution: "Maharaja Harendra Kishore Singh College, Motihari (Bihar)",
      duration: "Completed in 2020",
      grade: "Percentage: 60.6%",
    },
    {
      id: 4,
      degree: "High School (10th)",
      institution:
        "Mahadev Sah High School, Chiraiya Kothi, East Champaran (Bihar)",
      duration: "Completed in 2018",
      grade: "Percentage: 56.8%",
    },
  ];

  return (
    <section
      id="education"
      className="animate-in fade-in slide-in-from-bottom duration-700"
    >
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-12">Education</h2>


        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4  top-0 bottom-0 w-0.5 bg-border"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {educationData.map((edu, index) => (
              <div
                key={edu.id}
                className="relative animate-in fade-in slide-in-from-bottom duration-700"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Timeline Marker */}
                <div className={cn("absolute left-4  w-3 h-3 bg-secondary rounded-full -ml-1.5 mt-1.5 ring-4 ring-background", index === 0 && "bg-primary")}></div>

                {/* Timeline Content */}
                <div className="ml-12">
                  <div className="p-6 rounded-lg bg-muted/50 border hover:bg-muted transition-all duration-300 hover:shadow-lg">
                    <h3 className="text-xl font-semibold mb-2">{edu.degree}</h3>
                    <p className="text-muted-foreground mb-1">
                      {edu.institution}
                    </p>
                    <p className="text-sm text-muted-foreground mb-2">
                      {edu.duration}
                    </p>
                    <p className="text-sm font-medium text-foreground">
                      {edu.grade}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
