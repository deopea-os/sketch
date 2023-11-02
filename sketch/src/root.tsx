import { css } from "@deopea.sketch/styled-system/css";
import { stack, wrap } from "@deopea.sketch/styled-system/patterns";
import Button from "components/button/index.js";
import "./global.css";

export default () => {
  return (
    <>
      <head>
        <meta charSet="utf-8" />
        <title>Qwik Blank App</title>
      </head>
      <body class={stack({ p: 2, gap: 2 })}>
        <div>
          <h2 class={css({ textStyle: "md" })}>Filled Buttons</h2>
          <div class={stack({ direction: "row", gap: 2 })}>
            <Button shape="rounded">Here is a rounded button</Button>
            <Button shape="pill">Here is a pill button</Button>
            <Button shape="square">Here is a square button</Button>
          </div>
        </div>
        <div>
          <h2 class={css({ textStyle: "md" })}>Outlined Buttons</h2>
          <div class={stack({ direction: "row", gap: 2 })}>
            <Button variant="outlined" shape="rounded">
              Here is a rounded button
            </Button>
            <Button variant="outlined" shape="pill">
              Here is a pill button
            </Button>
            <Button variant="outlined" shape="square">
              Here is a square button
            </Button>
          </div>
        </div>
        <div>
          <h2 class={css({ textStyle: "md" })}>Text Buttons</h2>
          <div class={stack({ direction: "row", gap: 2 })}>
            <Button variant="text" shape="rounded">
              Here is a rounded button
            </Button>
            <Button variant="text" shape="pill">
              Here is a pill button
            </Button>
            <Button variant="text" shape="square">
              Here is a square button
            </Button>
          </div>
        </div>
        <div>
          <h2 class={css({ textStyle: "md" })}>Button Colors</h2>
          <div class={stack({ direction: "row", gap: 2 })}>
            {["primary", "secondary", "tertiary"].map((color) => (
              <Button key={color} color={color}>
                Here is a {color} button
              </Button>
            ))}
          </div>
        </div>
        <div>
          <h2 class={css({ textStyle: "md" })}>Button Sizes</h2>
          <div class={wrap({ gap: 2 })}>
            {["xs", "sm", "md", "lg", "xl"].map((size) => (
              <Button key={size} size={size}>
                Here is a {size} button
              </Button>
            ))}
          </div>
        </div>
      </body>
    </>
  );
};
