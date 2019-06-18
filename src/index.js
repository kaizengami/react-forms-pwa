import { h, render } from "preact";
import "./style";
import App from "./components/App";

if (typeof window !== "undefined") {
  render(<App />, document.body);
}
