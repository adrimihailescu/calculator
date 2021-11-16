import "./Layout.scss";

const Layout = (props) => {
	return (
		<main className="layout" {...props}>
			{props.children}
		</main>
	);
};

export default Layout;
