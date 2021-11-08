import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { DefaultLayout } from "layouts/default";
import { GlobalStyle } from "styles/global";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const lazyLoading = (path: string) =>
	lazy(() => import(`./pages/${path}/index.tsx`));

const createComponent = (path: string) => () => {
	const Component = lazyLoading(path);

	return (
		<DefaultLayout>
			<Component />
		</DefaultLayout>
	);
};

ReactDOM.render(
	<React.StrictMode>
		<ToastContainer />
		<BrowserRouter>
			<Switch>
				<Suspense fallback={<div></div>}>
					<Route path="/" exact component={createComponent("home")} />
					<Route path="/memory" exact component={createComponent("memory")} />
				</Suspense>
			</Switch>
		</BrowserRouter>
		<GlobalStyle />
	</React.StrictMode>,
	document.getElementById("root"),
);
