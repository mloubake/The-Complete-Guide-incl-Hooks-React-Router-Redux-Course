import classes from "./PageContent.module.css";

interface IProps {
  title: string;
  children: React.ReactNode;
}

const PageContent: React.FC<IProps> = ({ title, children }) => {
  return (
    <div className={classes.content}>
      <h1>{title}</h1>
      {children}
    </div>
  );
};

export default PageContent;
