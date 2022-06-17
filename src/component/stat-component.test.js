// import {render, screen} from `@testing-library/react`;
// import StatComponent from "./stat-component";

import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import StatComponent from "./stat-component";

it("renders without crashing", () => {
	const div = document.createElement("div");
	createRoot.render(<StatComponent />, div);
});
