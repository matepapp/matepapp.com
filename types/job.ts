export type JobMeta = {
  title: string;
  date: string;
  company: string;
  slug: string;
};

export type Job = {
  meta: JobMeta;
  content?: string;
};
