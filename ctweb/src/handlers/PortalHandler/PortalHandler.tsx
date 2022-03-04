import React from "react";
import ReactDOM from "react-dom";

import {IProps} from "./types";

export default function PortalHandler(props: IProps) {
	const [DOM, setDOM] = React.useState(false)
	React.useEffect(() => {
		setDOM(true)
	}, [])
	return DOM ? (
		ReactDOM.createPortal(
			props.children,
			document.getElementById(props.domNode)!
		)
	) : null;
}