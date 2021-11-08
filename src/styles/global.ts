import { createGlobalStyle } from "styled-components";

import { CONFIGS } from "./configs";

import { COLORS } from "./colors";
import { FONTS } from "./fonts";
import { SIZES } from "./sizes";

export const GlobalStyle = createGlobalStyle`
	* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
		user-select: none;

		&:focus-visible {
			outline: var(--alternative-outline);
		 	box-shadow: var(--outline);
		}
  }

	html, body {
		min-height: 100%;
		background: #0a1119;
	}

  html {
    font-size: 62.5%;
		scroll-behavior: smooth;
  }

  body {
    background: var(--background);
    color: var(--secondary);
    font-family: "Roboto", Arial, Helvetica, sans-serif;
		${FONTS.text1}
  }

	a {
		color: var(--secondary);
		text-decoration: none;
	}

	button, input, textarea {
		background: transparent;
    color: var(--secondary);
		${FONTS.text1}
		border: transparent;
	}

	ul {
		list-style: none;
	}

	/* width */
	::-webkit-scrollbar {
		width: 10px;
	}

	/* Track */
	::-webkit-scrollbar-track {
		background: #111921;
	}

	/* Handle */
	::-webkit-scrollbar-thumb {
		background: #16bfbf;
		border-radius: 5px;
	}

	/* Handle on hover */
	::-webkit-scrollbar-thumb:hover {
		background: #16bfbf;
	}

	:root {
		${COLORS.root}
		${CONFIGS}
		${SIZES}
	}

	[data-theme='dark'] {
		${COLORS.dark}
	}

	@media (max-width: 768px) {
    html {
      font-size: 57.5%;
    }
  }

	@media (max-width: 320px) {
    html {
      font-size: 55.5%;
    }
  }

	@media (max-width: 280px) {
    html {
      font-size: 52.5%;
    }
  }
`;
