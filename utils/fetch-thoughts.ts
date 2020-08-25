import { ThoughtMeta } from "../types/thought";

export const fetchThoughtMetaList = async (): Promise<ThoughtMeta[]> => {
  const data = await fetch(
    "https://notion-api.splitbee.io/v1/table/8366ab8e7ed646b39b7683cc4b330a8f?v=2dd61e39a5e649c2ba1d4f0690353c76"
  );

  const thoughts = (await data.json()) as ThoughtMeta[];
  return thoughts.filter((thought) => thought.Published);
};

export const fetchThought = async (id: string) => {
  const data = await fetch(`https://notion-api.splitbee.io/v1/page/${id}`);
  return await data.json();
};
