import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    custom: {
      bg: string;
      headingText: string;
      listTitle: string;
      listDivider1: string;
      listText: string;
      listDivider2: string;
      header: string;
      buttonBorder: string;
      buttonText: string;
      buttonTextFocused: string;
      buttonBg: string;
      buttonBgFocused: string;
      modalText: string;
      modalTitle: string;
      modalLabels: string;
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
      listDivider1?: string;
      listText?: string;
      listDivider2?: string;
      header?: string;
      buttonBorder?: string;
      buttonText?: string;
      buttonTextFocused?: string;
      buttonBg?: string;
      buttonBgFocused?: string;
      modalText?: string;
      modalTitle?: string;
      modalLabels?: string;
      modalNames?: string;
      modalCloseButton?: string;
      dropdownTitle?: string;
      dropdownItems?: string;
    };
  }
}
