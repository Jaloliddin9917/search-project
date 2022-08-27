import { Fragment } from "react";
import Header from "./navbar/Navbar";
import classes from "./Layout.module.scss";





const Layout = ({ children }) => {


	return (
		<Fragment>
			<Header />
			<div className={classes.layout}>{children}</div>
		</Fragment>
	);
};

export default Layout;
