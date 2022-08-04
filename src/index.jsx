import React from "react";
import ReactDOM from "react-dom/client";
import "@code2307/comfi-ui-kit-kit/lib/globals.css";
import "@code2307/comfi-ui-kit-kit/lib/index.css";
import { Tag } from "@code2307/comfi-ui-kit-kit/lib/components";
import "./base.scss";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div>
    <Tag variant='green'>Issue</Tag>
    <Tag variant='orange' block>
      Orange
    </Tag>
    <Tag variant='red'>Danger</Tag>
  </div>
);
