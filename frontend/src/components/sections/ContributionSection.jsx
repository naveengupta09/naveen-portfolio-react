import React, { useEffect, useRef } from "react";
import { useGithubStore } from "@/stores/useGithubStore";
import { RefreshCcw } from "lucide-react";
import TooltipWrapper from "../TooltipWrapper";
import { Button } from "../ui/button";

const ContributionSection = () => {
  const {
    contributions,
    fetchContributions,
    totalContributions,
    loading,
    error,
  } = useGithubStore();
  const scrollContainerRef = useRef(null);
  useEffect(() => {
    scrollContainerRef.current.scrollLeft =
      scrollContainerRef.current.scrollWidth;
  }, [loading, contributions]);

  const getContributionColor = (count) => {
    if (count === 0) return "hsl(var(--github-100))"; // level 0
    if (count < 2) return "hsl(var(--github-200))"; // level 4
    if (count < 5) return "hsl(var(--github-300))"; // level 3
    if (count < 8) return "hsl(var(--github-400))"; // level 2
    return "hsl(var(--github-500))"; // level 1
  };

  const monthLabels = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const dayLabels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const generateSkeletonWeeks = () => {
    const weeks = [];
    for (let i = 0; i < 53; i++) {
      const days = [];
      for (let j = 0; j < 7; j++) {
        days.push({
          contributionCount: 0,
          date: "",
        });
      }
      weeks.push({ contributionDays: days });
    }
    return weeks;
  };

  const getMonthData = (weeks) => {
    const months = weeks.map((week) => {
      const firstDay = new Date(week.contributionDays[0].date);
      return firstDay.getMonth();
    });

    const fr = [];
    const monthNames = [];
    let count = 1;

    for (let i = 1; i < months.length; ++i) {
      if (months[i - 1] === months[i]) {
        count++;
      } else {
        fr.push(count);
        monthNames.push(monthLabels[months[i - 1]]);
        count = 1;
      }
    }
    fr.push(count);
    monthNames.push(monthLabels[months[months.length - 1]]);

    const gridTemplate = fr.map((f) => `${f}fr`).join(" ");

    return { gridTemplate, monthNames };
  };

  const skeletonWeeks = generateSkeletonWeeks();
  const displayWeeks = loading ? skeletonWeeks : contributions?.weeks || [];
  const monthData = loading
    ? { gridTemplate: "", monthNames: monthLabels }
    : contributions?.weeks
    ? getMonthData(contributions?.weeks)
    : { gridTemplate: "", monthNames: [] };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="p-0">
        <header className="mb-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Github contributions
          </h2>
        </header>
        <div className="border relative overflow-hidden p-6 rounded-3xl bg-muted/15">
          {!loading && error && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/50 p-4 backdrop-blur-[1px]">
              <div className="flex flex-col items-center gap-2">
                <p className="text-red-600 font-semibold">{error}</p>
                <Button
                  variant="secondary"
                  onClick={() => fetchContributions("naveengupta09")}
                >
                  Reload <RefreshCcw />
                </Button>
              </div>
            </div>
          )}
          <p className="text-muted-foreground mb-2">
            <span className="text-primary font-semibold">
              {totalContributions}
            </span>{" "}
            contributions in the last year
          </p>
          <div
            ref={scrollContainerRef}
            className={`scroll-pretty overflow-x-auto w-full inline-block pb-1 ${
              loading ? "animate-pulse" : ""
            }`}
          >
            <div className="flex gap-1 font-mono">
              <div className="flex mt-[26px] flex-col justify-around text-xs text-muted-foreground mr-2">
                {dayLabels
                  .filter((_, i) => i % 2 === 1)
                  .map((day, i) => (
                    <div key={i} className="h-3 flex items-center">
                      {day}
                    </div>
                  ))}
              </div>

              <div>
                {monthData.monthNames.length > 0 && (
                  <div
                    className={`flex mb-2 text-xs font-semibold text-muted-foreground ${
                      loading ? "gap-1" : ""
                    }`}
                    style={
                      loading
                        ? {}
                        : {
                            display: "grid",
                            gridTemplateColumns: monthData.gridTemplate,
                            gap: "3px",
                          }
                    }
                  >
                    {monthData.monthNames.map((month, i) => (
                      <div key={i} className={loading ? "flex-1" : ""}>
                        {month}
                      </div>
                    ))}
                  </div>
                )}

                <div className="flex gap-[3px] pr-1">
                  {displayWeeks.map((week, weekIdx) => (
                    <div key={weekIdx} className="flex flex-col gap-1">
                      {week.contributionDays.map((day, dayIdx) =>
                        loading ? (
                          <div
                            key={dayIdx}
                            className="w-3 h-3 rounded-[2px]"
                            style={{
                              backgroundColor: getContributionColor(0),
                            }}
                          />
                        ) : (
                          <TooltipWrapper
                            key={dayIdx}
                            content={`${day.date}: ${day.contributionCount} contributions`}
                          >
                            <div
                              className="w-3 h-3 rounded-[2px] hover:ring-2 ring-ring cursor-pointer transition-all"
                              style={{
                                backgroundColor: getContributionColor(
                                  day.contributionCount
                                ),
                              }}
                            />
                          </TooltipWrapper>
                        )
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="ml-auto flex items-center gap-2 text-xs text-muted-foreground">
              <span>Less</span>
              <div className="flex gap-[3px]">
                {[0, 1, 4, 7, 10].map((count, i) => (
                  <div
                    key={i}
                    className="w-3 h-3 rounded-[2px]"
                    style={{ backgroundColor: getContributionColor(count) }}
                  />
                ))}
              </div>
              <span>More</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContributionSection;
