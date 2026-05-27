/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      "colors": {
              "outline-variant": "#4d4635",
              "on-primary": "#3c2f00",
              "surface": "#101415",
              "surface-dim": "#101415",
              "secondary": "#b9c7e0",
              "on-background": "#e0e3e5",
              "outline": "#99907c",
              "on-surface": "#e0e3e5",
              "inverse-on-surface": "#2d3133",
              "error": "#ffb4ab",
              "primary": "#f2ca50",
              "surface-container-high": "#272a2c",
              "surface-container-highest": "#323537",
              "surface-container-low": "#191c1e",
              "inverse-surface": "#e0e3e5",
              "background": "#101415",
              "primary-container": "#d4af37",
              "on-primary-container": "#554300",
              "on-surface-variant": "#d0c5af"
      },
      "borderRadius": {
              "DEFAULT": "0.25rem",
              "lg": "0.5rem",
              "xl": "0.75rem",
              "full": "9999px"
      },
      "spacing": {
              "margin-mobile": "16px",
              "section-gap": "80px",
              "gutter": "24px",
              "container-max": "1280px",
              "stack-sm": "8px",
              "stack-lg": "32px",
              "margin-desktop": "64px",
              "stack-md": "16px"
      },
      "fontFamily": {
              "body-md": ["Inter"],
              "headline-md": ["Playfair Display"],
              "display-lg": ["Playfair Display"],
              "headline-lg": ["Playfair Display"],
              "body-lg": ["Inter"]
      },
      "fontSize": {
              "body-md": ["16px", {"lineHeight": "1.6", "fontWeight": "400"}],
              "caption": ["12px", {"lineHeight": "1.4", "fontWeight": "500"}],
              "headline-lg-mobile": ["28px", {"lineHeight": "1.3", "fontWeight": "600"}],
              "headline-md": ["24px", {"lineHeight": "1.4", "fontWeight": "600"}],
              "display-lg": ["48px", {"lineHeight": "1.2", "letterSpacing": "-0.02em", "fontWeight": "700"}],
              "headline-lg": ["32px", {"lineHeight": "1.3", "fontWeight": "600"}],
              "body-lg": ["18px", {"lineHeight": "1.6", "fontWeight": "400"}],
              "label-md": ["14px", {"lineHeight": "1.4", "letterSpacing": "0.05em", "fontWeight": "500"}]
      }
    },
  },
  plugins: [],
}
