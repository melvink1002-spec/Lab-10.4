import * as React from "react";
import { useParams } from "react-router";
import { posts } from "../mockData/data";

const BlogDetail: React.FC = () => {
  const { slug } = useParams();

  const [data, setData] = React.useState<{
    id: number;
    slug: string;
    title: string;
    content: string;
  }>();

  React.useEffect(() => {
    setData(posts.find((item) => item.slug === slug));
  }, [slug]);

  return (
    <>
      {data ? (
        <div>
          <h5>{data?.title}</h5>
          <p>{data?.slug}</p>
          <p>{data?.content}</p>
        </div>
      ) : (
        <h2>404- Page Not Found</h2>
      )}
    </>
  );
};

export default BlogDetail;
