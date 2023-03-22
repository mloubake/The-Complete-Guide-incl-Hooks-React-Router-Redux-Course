import classes from "./MeetupDetail.module.css";

interface IProps {
  image: string;
  title: string;
  address: string;
  description: string;
}

const MeetupDetail: React.FC<IProps> = ({
  image,
  title,
  address,
  description,
}) => {
  return (
    <section className={classes.detail}>
      <img src={image} alt={title} />
      <h1>{title}</h1>
      <address>{address}</address>
      <p>{description}</p>
    </section>
  );
};

export default MeetupDetail;
