import { makeRequest } from "../requests";
import { addStartingZero } from "../Helpers";

export const getTrandings = async (lang = "javascript") => {
  const params = new URLSearchParams();
  const weekMS = 7 * 24 * 60 * 60 * 1000;
  const weekAgo = new Date(Date.now() - weekMS);
  const formattedDate = [
    weekAgo.getFullYear(),
    addStartingZero(weekAgo.getMonth() + 1),
    addStartingZero(weekAgo.getDate()),
  ].join("-");

  params.append("order", "desc");
  params.append("sort", "stars");
  params.append("q", `language:${lang} created:>${formattedDate}`);
  params.append("per_page", "10");
  return makeRequest({
    url: `/search/repositories?${params}`,
  });
};
