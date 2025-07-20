import { useRouter } from "next/router";

const SlugProductPage = () => {
  // const router =  useRouter();
  // console.log(router);

  const { query } =  useRouter();

  return (
    <div>
      <h1>Slug Product Page</h1>
      {/* <p>Product : {query.id} </p> must be the same as the file name */}
      <p>Product : {query.slug} </p>
    </div>
  );
};

export default SlugProductPage;