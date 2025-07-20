import Link from "next/link";

const RegisterPage = () => {
  return (
    <div>
      <h1>Register Page</h1>
      <p>Already have an account? <Link href={"/auth/login"}>here</Link></p>
    </div>
  );
};

export default RegisterPage;