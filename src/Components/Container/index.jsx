
import classes from "./Container.module.scss";

const Container = ({children}) => {
  return (
    <>
      <main className={classes.wrapper}>{children}</main>
    </>
  );
}


export default Container;
