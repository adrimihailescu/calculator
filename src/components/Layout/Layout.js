import "./Layout.scss";

const Layout = (props) => {
	return <main {...props}>{props.children}</main>;
};

export default Layout;
