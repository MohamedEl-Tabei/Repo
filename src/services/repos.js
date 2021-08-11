import { client } from "./client";

export async function getAllRepos(pageNumber = 1) {
  try {
    const response = await client.get("/search/repositories", {
      params: {
        q: "created:>2021-01-01",
        sort: "stars",
        order: "desc",
        page: pageNumber,
      },
    });
    if (response) {
      return response.data.items;
    } else {
      return [];
    }
  } catch (error) {
    console.log("GET REPOS ERR", error);
  }
}