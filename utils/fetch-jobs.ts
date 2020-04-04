import fs from "fs";
import matter from "gray-matter";
import marked from "marked";
import path from "path";
import { Job, JobMeta } from "../types/job";

export const fetchJobMetaList = (): JobMeta[] => {
  const jobsDirectory = path.join(process.cwd(), "/data/jobs");
  const filenames = fs.readdirSync(jobsDirectory);

  const jobMetaList: JobMeta[] = filenames.reverse().map(filename => {
    const filePath = path.join(jobsDirectory, filename);
    const fileContents = fs.readFileSync(filePath).toString();
    const parsedMarkdown = matter(fileContents);
    const jobMeta = parsedMarkdown.data as JobMeta;

    return {
      ...jobMeta,
      slug: filename.substring(2, filename.length - 3)
    };
  });

  return jobMetaList;
};

export const fetchJob = (slug: string): Job => {
  const jobsDirectory = path.join(process.cwd(), "/data/jobs");
  const filenames = fs.readdirSync(jobsDirectory);

  const jobs: Job[] = filenames.reverse().map(filename => {
    const filePath = path.join(jobsDirectory, filename);
    const fileContents = fs.readFileSync(filePath).toString();
    const parsedMarkdown = matter(fileContents);
    const jobMeta = parsedMarkdown.data as JobMeta;

    return {
      meta: {
        ...jobMeta,
        slug: filename.substring(2, filename.length - 3)
      },
      content: marked(parsedMarkdown.content)
    };
  });

  return jobs.find(job => job.meta.slug === slug);
};
