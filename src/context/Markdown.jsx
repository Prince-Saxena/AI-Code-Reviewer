
import { createContext, useContext, useState } from "react";

const MarkdownContext = createContext();

export const MarkdownProvider = ({ children }) => {
  const [markdownContent, setMarkdownContent] = useState("");
  const [loading, setLoading] = useState(false);

	  return (
			<MarkdownContext.Provider value={{ markdownContent,loading,setLoading, setMarkdownContent }}>
				{children}
			</MarkdownContext.Provider>
		);
};

export const useMarkdown = () => {
	return useContext(MarkdownContext);
};