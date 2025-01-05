import Header from "./Header";
import Footer from "./Footer";

import classes from "./layout.module.css";

export default function Layout({ children }) {
  return (
    <div className={classes.layout}>
      <Header selectedClass={classes.header} />
      {children}
      <Footer selectedClasses={classes} />
    </div>
  );
}
