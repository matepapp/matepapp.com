import { NextPage } from "next";
import { useRouter } from "next/router";

const JobPage: NextPage = () => {
  const router = useRouter();

  return <h1>Job slug{router.query.slug}</h1>;
};

export default JobPage;
