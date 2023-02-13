import classes from "./Card.module.css";

interface IProps {
  className?: string;
  children: React.ReactNode;
}

const Card: React.FC<IProps> = ({ className, children }) => {
  return (
    <section className={`${classes.card} ${className ? className : ""}`}>
      {children}
    </section>
  );
};

export default Card;
