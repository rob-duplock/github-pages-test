import ColourPalette from './colour-palette-core.html.twig';
import Readme from './readme.md'

ColourPalette.data = {
  name: "Colour Palette",
  parameters: {
    colors: [
      {name: "primary-dark", hex: "#1F5788"},
      {name: "primary-light", hex: "#2A6998"},
      {name: "primary-tint", hex: "#F1F6F9"},
      {name: "secondary-dark", hex: "#867E70"},
      {name: "secondary-light", hex: "#F8F3F2"},
      {name: "secondary-tint", hex: "#FBF8F7"},
      {name: "brand-grey-1", hex: "#30302F"},
      {name: "brand-grey-2", hex: "#40403F"},
      {name: "grey-tint-25", hex: "#CFCFCF"},
      {name: "accent", hex: "#43838C"},
      {name: "white", hex: "#FFFFFF"},
      {name: "gradient-overlay-start", hex: "#204560"},
      {name: "gradient-overlay-end", hex: "#2A6998"},
      {name: "grey-stroke", hex: "#E6EAED"},
      {name: "success", hex: "#206C49"},
      {name: "warning", hex: "#FF7900"},
      {name: "danger", hex: "#AF272F"},
      {name: "success-tint", hex: "#EFF5F2"},
      {name: "warning-tint", hex: "#FFF5ED"},
      {name: "danger-tint", hex: "#F9F0F0"},
      {name: "shadow", hex: "#867E70"},
      {name: "auxiliary-blue", hex: "#DCEAF5"},
      {name: "auxiliary-green", hex: "#ECF2E6"},
    ],
  },
  other: {
    notes: { Readme }
  }
};

export default ColourPalette;
