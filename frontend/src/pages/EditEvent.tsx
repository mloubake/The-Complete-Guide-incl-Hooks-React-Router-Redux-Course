import { useRouteLoaderData } from "react-router-dom";

import EventForm from "../components/EventForm";

interface IData {
  event: {
    title: string;
    image: string;
    date: string;
    description: string;
  };
}

const EditEventPage = () => {
  const data: IData = useRouteLoaderData("event-detail") as IData;

  return <EventForm method="patch" event={data.event} />;
};

export default EditEventPage;
