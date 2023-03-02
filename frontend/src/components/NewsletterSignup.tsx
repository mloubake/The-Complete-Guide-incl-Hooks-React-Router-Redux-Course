import { useEffect } from "react";
import { useFetcher } from "react-router-dom";
import classes from "./NewsletterSignup.module.css";

interface IData {
  data: { message: string };
  state: string;
}

function NewsletterSignup() {
  const fetcher = useFetcher();
  const { data, state }: IData = fetcher;

  useEffect(() => {
    if (state === "idle" && data && data.message) {
      window.alert(data.message);
    }
  }, [data, state]);

  return (
    <fetcher.Form
      method="post"
      action="/newsletter"
      className={classes.newsletter}
    >
      <input
        type="email"
        placeholder="Sign up for newslette...r"
        aria-label="Sign up for newsletter"
      />
      <button>Sign Up</button>
    </fetcher.Form>
  );
}

export default NewsletterSignup;
