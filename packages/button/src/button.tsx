import { Slot, component$ } from "@builder.io/qwik";
import { css } from "@deopea.sketch/styled-system/css";

export interface ButtonProps {
  size?: "small" | "medium" | "large";
}
export const Button = component$<ButtonProps>(() => {
  return (
    <button class={css({ bg: "" })}>
      <Slot />
    </button>
  );
});
