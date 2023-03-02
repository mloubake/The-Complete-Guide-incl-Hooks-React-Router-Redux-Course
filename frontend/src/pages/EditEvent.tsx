import { useRouteLoaderData } from "react-router-dom";
import EventForm from "../components/EventForm";

interface IData {
  event: any;
}

function EditEventPage() {
  const data: IData = useRouteLoaderData("event-detail") as IData;

  return <EventForm method="patch" event={data.event} />;
}

export default EditEventPage;
