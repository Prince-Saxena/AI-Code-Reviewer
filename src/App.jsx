import React, { useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { useMarkdown } from "./context/Markdown.context";
import { marked } from "marked";
import Code from "./components/Code";

function App() {
	const { markdownContent, setMarkdownContent, loading,setLoading } = useMarkdown();

	useEffect(() => {
		setLoading(true)
		fetch("/AI-Code-Reviewer/start.md")
			.then((response) => response.text())
			.then((data) => {
				setMarkdownContent(data);
			})
			.catch((error) => {
				console.error("Error fetching text file:", error);
			})
			.finally(()=>{ setLoading(false) });
	}, []);

	const SkeletonScreen = () => (
		<div className="w-1/2 h-full mx-auto p-6 bg-gray-900 text-white rounded-lg shadow-lg border border-gray-700 sm:w-11/12 md:w-4/5 lg:w-3/4 xl:w-2/3">
			<div className="space-y-4">
				<div className="h-6 bg-gray-700 rounded w-3/4"></div>
				<div className="h-4 bg-gray-700 rounded w-5/6"></div>
				<div className="h-4 bg-gray-700 rounded w-4/5"></div>
				<div className="h-4 bg-gray-700 rounded w-3/4"></div>
				<div className="h-4 bg-gray-700 rounded w-5/6"></div>
			</div>
		</div>
	);

	return (
		<div className="h-screen w-full bg-gray-800 text-white flex flex-row items-center justify-center p-4">
			<Code />
			{loading && <SkeletonScreen />}
			{!loading && (
				<div
					className="w-1/2 h-full mx-auto p-6 bg-gray-900 text-white rounded-lg shadow-lg border border-gray-700 sm:w-11/12 md:w-4/5 lg:w-3/4 xl:w-2/3 overflow-y-auto relative"
					dangerouslySetInnerHTML={{ __html: marked(markdownContent) }}
				>
					{/* <ReactMarkdown>{markdownContent}</ReactMarkdown> */}
					{/* {marked(markdownContent)} */}
				</div>
			)}
		</div>
	);
}

export default App;
