import { createGlobalStyle, css } from 'styled-components';
import { normalize } from 'styled-normalize';

import InterBoldTTF from '@assets/fonts/Inter-Bold.ttf';
import InterMediumTTF from '@assets/fonts/Inter-Medium.ttf';
import InterRegularTTF from '@assets/fonts/Inter-Regular.ttf';

export const fonts = css`
  @font-face {
    font-weight: 200;
    font-family: 'Inter';
    font-style: normal;
    src: url('${InterRegularTTF}') format('ttf');
  }
  @font-face {
    font-weight: 300;
    font-family: 'Inter';
    font-style: normal;
    src: url('${InterMediumTTF}') format('ttf');
  }
  @font-face {
    font-weight: 700;
    font-family: 'Inter';
    font-style: normal;
    src: url('${InterBoldTTF}') format('ttf');
  }
`;

const colors = css`
  --primary-color: #277874;
  --dark-primary-color: #1e5f5c;
  --white-color: #fff;
  --black-color: #000;
  --silver-light-color: #bbbbbb;
  --silver-dark-color: #909090;
  --grey-color: #f7f7f7;

  --primary-color-opac-1: rgb(39, 120, 116, 0.52);

  --color-opac-b-1: rgba(0, 0, 0, 0.05);
  --color-opac-b-2: rgba(0, 0, 0, 0.1);
  --color-opac-b-3: rgba(0, 0, 0, 0.15);
  --color-opac-b-4: rgba(0, 0, 0, 0.2);
  --color-opac-b-5: rgba(0, 0, 0, 0.25);
  --color-opac-b-6: rgba(0, 0, 0, 0.3);
  --color-opac-b-7: rgba(0, 0, 0, 0.4);
  --color-opac-b-8: rgba(0, 0, 0, 0.5);
  --color-opac-b-9: rgba(0, 0, 0, 0.6);
  --color-opac-b-10: rgba(0, 0, 0, 0.7);
  --color-opac-b-11: rgba(0, 0, 0, 0.75);
  --color-opac-b-12: rgba(0, 0, 0, 0.8);
  --color-opac-b-13: rgba(0, 0, 0, 0.85);
  --color-opac-b-14: rgba(0, 0, 0, 0.9);
  --color-opac-b-15: rgba(0, 0, 0, 0.95);

  --color-opac-w-1: hsla(0, 0%, 100%, 0.05);
  --color-opac-w-2: hsla(0, 0%, 0%, 0.1);
  --color-opac-w-3: hsla(0, 0%, 15%, 0.15);
  --color-opac-w-4: hsla(0, 0%, 45%, 0.2);
  --color-opac-w-5: hsla(0, 0%, 75%, 0.25);
  --color-opac-w-6: hsla(0, 0%, 95%, 0.3);
  --color-opac-w-7: hsla(0, 0%, 100%, 0.4);
  --color-opac-w-8: hsla(0, 0%, 100%, 0.5);
  --color-opac-w-9: hsla(0, 0%, 100%, 0.6);
  --color-opac-w-10: hsla(0, 0%, 100%, 0.7);
  --color-opac-w-11: hsla(0, 0%, 100%, 0.75);
  --color-opac-w-12: hsla(0, 0%, 100%, 0.8);
  --color-opac-w-13: hsla(0, 0%, 100%, 0.85);
  --color-opac-w-14: hsla(0, 0%, 100%, 0.9);
  --color-opac-w-15: hsla(0, 0%, 100%, 0.95);
`;

const animation = css`
  --transition-sec: 0.05s;
`;

export const GlobalStyles = createGlobalStyle`
    #popup {
      display: flex;
      height: 100%;
      position: relative;
      width: 100%;
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    a {
      text-decoration: none;
    }

    body, html {
     font-family: 'Inter' , Medium, 'Open Sans', sans-serif;
     font-size: 12px;
    }
      ${normalize}
      ${fonts}

    :root {
      ${colors}
      ${animation}
    }
`;
