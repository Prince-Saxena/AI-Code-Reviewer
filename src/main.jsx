import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { MarkdownProvider } from "./context/Markdown.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<MarkdownProvider>
		<App />
	</MarkdownProvider>
);
