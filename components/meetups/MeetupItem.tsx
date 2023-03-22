import { useRouter } from "next/router";
import Card from "../ui/Cards";
import classes from "./MeetupItem.module.css";

interface IMeetupItem {
  id: string;
  image: string;
  title: string;
  address: string;
}

const MeetupItem: React.FC<IMeetupItem> = ({ id, image, title, address }) => {
  const router = useRouter();

  function showDetailsHandler() {
    router.push("/" + id);
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={image} alt={title} />
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <address>{address}</address>
        </div>
        <div className={classes.actions}>
          <button onClick={showDetailsHandler}>Show Details</button>
        </div>
      </Card>
    </li>
  );
};

export default MeetupItem;
