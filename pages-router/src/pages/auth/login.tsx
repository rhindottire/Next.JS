import Link from "next/link";
import { useRouter } from "next/router";

const LoginPage = () => {
  const { push } = useRouter();
  const handlerLogin = () => {
    push('/product');
  };

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={() => handlerLogin()}>Login</button>
      <p>Don&#39;t have an account? <Link href={"/auth/register"}>here</Link></p>
    </div>
  );
};

export default LoginPage;