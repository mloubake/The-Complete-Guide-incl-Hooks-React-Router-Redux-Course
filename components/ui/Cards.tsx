import classes from "./Card.module.css";

interface IProps {
  children: React.ReactNode;
}

const Card: React.FC<IProps> = ({ children }) => {
  return <div className={classes.card}>{children}</div>;
};

export default Card;
