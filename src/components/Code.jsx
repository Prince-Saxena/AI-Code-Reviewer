import React, { useState } from "react";
import { useMarkdown } from "../context/Markdown.context";
import axios from "axios";

const Code = () => {
	const URL = import.meta.env.VITE_URL;
	const [code, setCode] = useState("");
	const [loading, setLoading] = useState(false);
	const { markdownContent, setMarkdownContent } = useMarkdown();

	const sendCodeToAPI = async () => {
		if (!code.trim()) {
			alert("Code cannot be empty!");
			return;
		}

		setLoading(true);
		try {
			setLoading(true);
			
			const response = await axios.post(
				URL,
				{ code },
				{
					headers: { "Content-Type": "application/json" },
				}
			);
			setMarkdownContent(response.data);
		} catch (err) {
			console.log(err.message);
		} finally {
			setLoading(false);
		}
	};

	const handleKeyDown = (e) => {
		if (e.key === "Enter" && !e.shiftKey) {
			e.preventDefault();
			sendCodeToAPI();
		}
	};

	return (
		<div className="w-1/2 h-full mx-auto p-6 bg-gray-900 text-white rounded-lg shadow-lg border border-gray-700 mr-2">
			<h2 className="text-2xl font-bold text-center text-cyan-400 mb-4"> AI Code Reviewer</h2>

			{/* Code Editor Style Textarea */}
			<textarea
				value={code}
				onChange={(e) => {
					setCode(e.target.value);
				}}
				onKeyDown={handleKeyDown}
				placeholder="// Write your code here..."
				className="w-full h-4/5 px-4 py-3 bg-gray-800 text-blue-100 border border-gray-600 rounded-lg focus:outline-none focus:border-cyan-400 text-sm font-mono resize-none "
			/>

			{/* Send Button */}
			<button
				onClick={sendCodeToAPI}
				disabled={loading}
				className={`mt-4 w-full py-3 text-white font-semibold rounded-lg transition duration-300 ${
					loading ? "bg-gray-600 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-700"
				}`}
			>
				{loading ? "⏳ Sending..." : "🚀 Send Code"}
			</button>
		</div>
	);
};

export default Code;
