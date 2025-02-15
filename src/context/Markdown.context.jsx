
import { createContext, useContext, useState } from "react";

const MarkdownContext = createContext();

export const MarkdownProvider = ({ children }) => {
  const [markdownContent, setMarkdownContent] = useState("");

	  return (
			<MarkdownContext.Provider value={{ markdownContent, setMarkdownContent }}>
				{children}
			</MarkdownContext.Provider>
		);
};

export const useMarkdown = () => {
	return useContext(MarkdownContext);
};