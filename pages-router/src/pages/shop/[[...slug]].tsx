import { useRouter } from "next/router";

const SlugShopPage = () => {
  const { query } =  useRouter();
  console.log(query)

  return (
    <div>
      <h1>Slug Shop Page</h1>
      <p>Shop : {query.slug} </p>
    </div>
  );
};

export default SlugShopPage;