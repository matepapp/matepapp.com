export type ThoughtMeta = {
  title: string;
  createdAt: string;
  updatedAt: string;
  slug: string;
};

export type Thought = {
  meta: ThoughtMeta;
  content?: string;
};
