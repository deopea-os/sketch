import { cva } from "@deopea.sketch/styled-system/css";
import { styled } from "@deopea.sketch/styled-system/jsx";

const buttonRecipe = cva({
  base: {
    cursor: "pointer",
    textTransform: "uppercase",

    transitionProperty: "box-shadow, filter, background-color",
    transitionDuration: "normal",
    transitionTimingFunction: "ease-in-out",

    shadow: "lg",
    _hover: {
      shadow: "xl",
    },
    _active: {
      transitionDuration: "faster",
      shadow: "none",
    },
  },

  variants: {
    color: {
      primary: {
        bgColor: "primary",
        borderColor: "primary",
      },
      secondary: {
        bgColor: "secondary",
        borderColor: "secondary",
      },
      tertiary: {
        bgColor: "tertiary",
        borderColor: "tertiary",
      },

      error: {
        bgColor: "error",
        borderColor: "error",
      },
      warn: {
        bgColor: "warn",
        borderColor: "warn",
      },
      info: {
        bgColor: "info",
        borderColor: "info",
      },
      success: {
        bgColor: "success",
        borderColor: "success",
      },
    },

    size: {
      xs: { px: "xs", py: "xs" },
      sm: { px: "sm", py: "xs" },
      md: { px: "md", py: "sm" },
      lg: { px: "lg", py: "md" },
      xl: { px: "xl", py: "lg" },
    },

    variant: {
      filled: {
        _hover: {
          filter: "brightness(1.1)",
        },
      },
      outlined: {
        bgColor: "unset",
        borderWidth: "1px",
        _hover: {
          bgColor: "neutral.200",
        },
        _active: {
          bgColor: "neutral.300",
        },
      },
      text: {
        bgColor: "unset",
        shadow: "none",
        _hover: {
          shadow: "none",
          bgColor: "neutral.200",
        },
        _active: {
          bgColor: "neutral.300",
        },
      },
    },

    shape: {
      rounded: {
        rounded: "md",
      },
      square: {
        rounded: "0",
      },
      pill: {
        rounded: "full",
      },
    },
  },

  defaultVariants: {
    color: "primary",
    size: "md",
    variant: "filled",
    shape: "rounded",
  },
});

export const Button = styled("button", buttonRecipe);
