import MeetupItem from "./MeetupItem";
import classes from "./MeetupList.module.css";

interface IProps {
  meetups: {
    id: string;
    image: string;
    title: string;
    address: string;
  }[];
}

const MeetupList: React.FC<IProps> = ({ meetups }) => {
  return (
    <ul className={classes.list}>
      {meetups ? (
        meetups.map((meetup) => {
          return (
            <MeetupItem
              key={meetup.id}
              id={meetup.id}
              image={meetup.image}
              title={meetup.title}
              address={meetup.address}
            />
          );
        })
      ) : (
        <div>Nothing to show</div>
      )}
    </ul>
  );
};

export default MeetupList;
