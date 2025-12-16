"use client";
import { useState } from "react";
import { TrendingUp } from "lucide-react";
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const skillsData = {
  frontend: {
    skills: [
      { name: "React", percentage: 95 },
      { name: "TypeScript", percentage: 90 },
      { name: "CSS/Tailwind", percentage: 88 },
      { name: "Next.js", percentage: 85 },
      { name: "JavaScript", percentage: 92 },
      { name: "HTML", percentage: 98 },
    ],
    chartData: [
      { skill: "React", value: 95 },
      { skill: "TypeScript", value: 90 },
      { skill: "CSS/Tailwind", value: 88 },
      { skill: "Next.js", value: 85 },
      { skill: "JavaScript", value: 92 },
      { skill: "HTML", value: 98 },
    ],
    trend: "8.3%",
    description: "Frontend development expertise",
  },
  backend: {
    skills: [
      { name: "Node.js", percentage: 88 },
      { name: "Python", percentage: 85 },
      { name: "PostgreSQL", percentage: 82 },
      { name: "MongoDB", percentage: 80 },
      { name: "REST APIs", percentage: 90 },
      { name: "GraphQL", percentage: 75 },
    ],
    chartData: [
      { skill: "Node.js", value: 88 },
      { skill: "Python", value: 85 },
      { skill: "PostgreSQL", value: 82 },
      { skill: "MongoDB", value: 80 },
      { skill: "REST APIs", value: 90 },
      { skill: "GraphQL", value: 75 },
    ],
    trend: "6.7%",
    description: "Backend development expertise",
  },
};

const chartConfig = {
  value: {
    label: "Skill Level",
    color: "hsl(var(--chart-1))",
  },
};

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState("frontend");
  const currentData = skillsData[activeTab];

  return (
    <section id="skills" className="w-full">
      <h2 className="text-2xl md:text-3xl font-bold mb-12">My Skills</h2>

      <div className="grid gap-6">
        <Card className="bg-muted/30">
          <CardHeader className="items-center pb-4">
            <CardTitle>{currentData.description}</CardTitle>
          </CardHeader>

          <CardContent>
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Skills List with Progress Bars */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold mb-4">
                  Proficiency Levels
                </h3>
                <ul className="space-y-4">
                  {currentData.skills.map((skill, index) => (
                    <li key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <strong className="text-sm font-medium">
                          {skill.name}
                        </strong>
                        <data
                          value={skill.percentage}
                          className="text-sm font-semibold"
                        >
                          {skill.percentage}%
                        </data>
                      </div>
                      <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                        <div
                          className="h-full bg-primary rounded-full transition-all duration-500 ease-out"
                          style={{ width: `${skill.percentage}%` }}
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Radar Chart */}
              <div className="flex items-center justify-center">
                <ChartContainer
                  config={chartConfig}
                  className="mx-auto aspect-square max-h-[300px] w-full"
                >
                  <RadarChart data={currentData.chartData}>
                    <ChartTooltip
                      cursor={false}
                      content={<ChartTooltipContent />}
                    />
                    <PolarAngleAxis dataKey="skill" />
                    <PolarGrid />
                    <Radar
                      dataKey="value"
                      fill="var(--color-value)"
                      fillOpacity={0.6}
                      dot={{
                        r: 4,
                        fillOpacity: 1,
                      }}
                    />
                  </RadarChart>
                </ChartContainer>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tab Buttons */}
        <div className="flex justify-center gap-4">
          <button
            onClick={() => setActiveTab("frontend")}
            className={`px-6 py-2 rounded-lg font-medium transition-all ${
              activeTab === "frontend"
                ? "bg-primary text-primary-foreground shadow-lg"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
            }`}
          >
            Frontend
          </button>
          <button
            onClick={() => setActiveTab("backend")}
            className={`px-6 py-2 rounded-lg font-medium transition-all ${
              activeTab === "backend"
                ? "bg-primary text-primary-foreground shadow-lg"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
            }`}
          >
            Backend
          </button>
        </div>
      </div>
    </section>
  );
}
