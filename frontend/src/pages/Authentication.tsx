import { json, redirect } from "react-router-dom";
import AuthForm from "../components/AuthForm";

const AuthenticationPage = () => {
  return <AuthForm />;
};

export default AuthenticationPage;

interface IActiom {
  request: Request;
}

interface IAuthData {
  email: string | null | FormDataEntryValue;
  password: string | null | FormDataEntryValue;
}

export async function action({ request }: IActiom) {
  const searchParams = new URL(request.url).searchParams;
  const mode = searchParams.get("mode") || "login";

  if (mode !== "login" && mode !== "signup") {
    throw json({ message: "Unsupported mode." }, { status: 422 });
  }

  const data = await request.formData();
  const authenticateData: IAuthData = {
    email: data.get("email"),
    password: data.get("password"),
  };

  const response = await fetch("http://localhost:8080/" + mode, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(authenticateData),
  });

  if (response.status === 422 || response.status === 401) {
    return response;
  }

  if (!response.ok) {
    throw json({ message: "Could not authenticate user." }, { status: 500 });
  }

  const responseData = await response.json();
  const token = responseData.token;

  localStorage.setItem("token", token);

  const expiration = new Date();
  expiration.setHours(expiration.getHours() + 1);
  localStorage.setItem("expiration", expiration.toISOString());

  return redirect("/");
}
