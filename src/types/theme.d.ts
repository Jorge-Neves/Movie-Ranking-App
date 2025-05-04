import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    custom: {
      bg: string;
      headingText: string;
      listTitle: string;
      listDivider: string;
      listText: string;
      header: string;
      buttonBorder: string;
      buttonText: string;
      buttonTextFocused: string;
      buttonBg: string;
      buttonBgFocused: string;
      modalText: string;
      modalTextCredits: string;
      modalTitle: string;
      modalLabels: string;
      modalDivider;
      modalNames: string;
      modalCloseButton: string;
      dropdownTitle: string;
      dropdownItems: string;
    };
  }

  interface PaletteOptions {
    custom?: {
      bg?: string;
      headingText?: string;
      listTitle?: string;
      listDivider?: string;
      listText?: string;
      header?: string;
      buttonBorder?: string;
      buttonText?: string;
      buttonTextFocused?: string;
      buttonBg?: string;
      buttonBgFocused?: string;
      modalText?: string;
      modalTextCredits?: string;
      modalTitle?: string;
      modalDivider?: string;
      modalLabels?: string;
      modalNames?: string;
      modalCloseButton?: string;
      dropdownTitle?: string;
      dropdownItems?: string;
    };
  }
}
