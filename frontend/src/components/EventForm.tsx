import {
  Form,
  json,
  redirect,
  useActionData,
  useNavigate,
  useNavigation,
} from "react-router-dom";
import { getAuthToken } from "../util/auth";

import classes from "./EventForm.module.css";

interface IProps {
  method: "put" | "patch" | "post" | "delete" | "get";
  event?: {
    title: string;
    image: string;
    date: string;
    description: string;
  };
}

interface IData {
  errors: any[];
}

const EventForm: React.FC<IProps> = ({ method, event }) => {
  const data: IData = useActionData() as IData;
  const navigate = useNavigate();
  const navigation = useNavigation();

  const isSubmitting = navigation.state === "submitting";

  function cancelHandler() {
    navigate("..");
  }

  return (
    <Form method={method} className={classes.form}>
      {data && data.errors && (
        <ul>
          {Object.values(data.errors).map((error) => (
            <li key={error}>{error}</li>
          ))}
        </ul>
      )}
      <p>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          name="title"
          required
          defaultValue={event ? event.title : ""}
        />
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input
          id="image"
          type="url"
          name="image"
          required
          defaultValue={event ? event.image : ""}
        />
      </p>
      <p>
        <label htmlFor="date">Date</label>
        <input
          id="date"
          type="date"
          name="date"
          defaultValue={event ? event.date : ""}
        />
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          rows={10}
          required
          defaultValue={event ? event.description : ""}
        ></textarea>
      </p>
      <div className={classes.actions}>
        <button type="button" onClick={cancelHandler} disabled={isSubmitting}>
          Cancel
        </button>
        <button disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Save"}
        </button>
      </div>
    </Form>
  );
};

export default EventForm;

interface IAction {
  request: Request;
  params: { eventId: string };
}

export async function action({ request, params }: IAction) {
  const method = request.method;
  const data = await request.formData();

  const eventData = {
    title: data.get("title"),
    image: data.get("image"),
    date: data.get("date"),
    description: data.get("description"),
  };

  let url: string = "http://localhost:8080/events";

  if (method === "PATCH") {
    const eventId = params.eventId;

    url = "http://localhost:8080/events/" + eventId;
  }

  const token = getAuthToken();

  const response = await fetch(url, {
    method: method,
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify(eventData),
  });

  if (response.status === 422) {
    return response;
  }

  if (!response.ok) {
    throw json({ message: "Could not save event." }, { status: 500 });
  }

  return redirect("/events");
}
