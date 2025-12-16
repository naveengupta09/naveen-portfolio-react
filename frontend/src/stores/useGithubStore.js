import { create } from "zustand";

export const useGithubStore = create((set, get) => ({
  /* ---------- STATE ---------- */
  contributions: null, // full contributionCalendar
  totalContributions: 0,
  loading: false,
  error: null,
  username: null,

  /* ---------- ACTIONS ---------- */
  fetchContributions: async (username) => {
    const token = import.meta.env.VITE_GITHUB_ACCESS_TOKEN;

    if (!token) {
      set({
        error:
          "GitHub access token not found. Please set VITE_GITHUB_ACCESS_TOKEN",
        loading: false,
      });
      return;
    }

    set({
      loading: true,
      error: null,
      username,
    });

    const query = `
      query($userName: String!) {
        user(login: $userName) {
          contributionsCollection {
            contributionCalendar {
              totalContributions
              weeks {
                contributionDays {
                  contributionCount
                  date
                  color
                }
              }
            }
          }
        }
      }
    `;

    try {
      const response = await fetch("https://api.github.com/graphql", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query,
          variables: { userName: username },
        }),
      });
      const data = await response.json();

      if (data.errors) {
        throw new Error(data.errors[0].message);
      }

      const calendar =
        data.data.user.contributionsCollection.contributionCalendar;

      if(!calendar){
        throw new Error("Failed to fetch contributions");
      }
      set({
        contributions: calendar,
        totalContributions: calendar.totalContributions,
        loading: false,
      });
    } catch (err) {
      console.log(err);
      set({
        error: err.message || "Failed to fetch GitHub contributions",
        loading: false,
      });
    }
  },

  /* ---------- OPTIONAL HELPERS ---------- */
  clearContributions: () =>
    set({
      contributions: null,
      totalContributions: 0,
      error: null,
      username: null,
    }),
}));