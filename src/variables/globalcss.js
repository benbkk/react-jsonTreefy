import { injectGlobal } from 'styled-components';
import { family, palette } from 'variables';

export default injectGlobal`
@font-face {
    font-family:'CircularStd-Bold';
    src:url('fonts/circular-bold.woff2') format('woff2'),
        url('fonts/circular-bold.woff') format('woff'),
        url('circular-bold.otf') format('opentype');
    font-style:normal;
    font-weight:400;
    font-smoothing: antialiased;
}


@font-face {
    font-family:'CircularStd-Book';
    src:url('fonts/circular-book.woff2') format('woff2'),
        url('fonts/circular-book.woff') format('woff'),
        url('fonts/circular-book.otf') format('opentype');
    font-style:normal;
    font-weight:400;
    font-smoothing: antialiased;
}


@font-face {
    font-family:'CircularStd-Medium';
    src:url('fonts/circular-medium.woff2') format('woff2'),
        url('fonts/circular-medium.woff') format('woff'),
        url('fonts/circular-medium.otf') format('opentype');
    font-style:normal;
    font-weight:400;
    font-smoothing: antialiased;
}

    * {
        box-sizing: border-box;
    }

    html {
        line-height: 1.15;
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
        min-height: 100vh;
    }
    body {
        margin: 0;
        font-family: ${family.book};
        min-height: inherit;
    }

    div#root {
        min-height: inherit;
        overflow: hidden;
        position: fixed;
        left: 0;
        top: 0;
        right: 0;

        & > div {
            min-height: inherit;
        }
    }

    article,aside,footer,header,nav,section {
        display: block
    }
    h1 {
        font-size: 2em;
        margin: 0.67em 0
    }
    figcaption,figure,main {
        display: block
    }
    figure {
        margin: 1em 40px
    }
    hr {
        box-sizing: content-box;
        height: 0;
        overflow: visible
    }
    pre {
        font-family: monospace, monospace;
        font-size: 1em
    }
    a {
        background-color: transparent;
        -webkit-text-decoration-skip: objects
    }
    abbr[title] {
        border-bottom: none;
        text-decoration: underline;
        text-decoration: underline dotted
    }
    b,strong {
        font-weight: inherit
    }
    b,strong {
        font-weight: 700er
    }
    code,kbd,samp {
        font-family: monospace, monospace;
        font-size: 1em
    }
    dfn {
        font-style: italic
    }
    mark {
        background-color: #ff0;
        color: #000
    }
    small {
        font-size: 80%
    }
    sub,sup {
        font-size: 75%;
        line-height: 0;
        position: relative;
        vertical-align: baseline
    }
    sub {
        bottom: -0.25em
    }
    sup {
        top: -0.5em
    }
    audio,video {
        display: inline-block
    }
    audio: not([controls]) {
        display: none;
        height: 0
    }
    img {
        border-style: none
    }
    svg: not(: root) {
        overflow: hidden
    }
    button,input,optgroup,select,textarea {
        font-family: ${family.book};
        font-size: 100%;
        line-height: 1.15;
        
        margin: 0;
        padding: 9px 18px;
    }

    button {
        margin: 5px 10px;
        text-transform: uppercase;
        font-size: 90%;
    }

    button,input {
        overflow: visible;
    }
    button,select {
        
        border-radius: 2px;
        color: currentColor;
        border-color: currentColor;
        cursor: pointer;
        letter-spacing: 2px;
    }

    button,html [type="button"],[type="reset"],[type="submit"] {
        -webkit-appearance: button
    }
    button: : -moz-focus-inner,[type="button"]: : -moz-focus-inner,[type="reset"]: : -moz-focus-inner,[type="submit"]: : -moz-focus-inner {
        border-style: none;
        padding: 0
    }
    button: -moz-focusring,[type="button"]: -moz-focusring,[type="reset"]: -moz-focusring,[type="submit"]: -moz-focusring {
        outline: 1px dotted ButtonText
    }
    fieldset {
        padding: 0.35em 0.75em 0.625em
    }
    legend {
        box-sizing: border-box;
        color: inherit;
        display: table;
        max-width: 100%;
        padding: 0;
        white-space: normal
    }
    progress {
        display: inline-block;
        vertical-align: baseline
    }
    textarea {
        overflow: auto;
        max-width: 100%;
        background-color: ${palette.wetAsphalt};
        border-radius: 2px;
    }
    [type="checkbox"],[type="radio"] {
        box-sizing: border-box;
        padding: 0
    }
    [type="number"]: : -webkit-inner-spin-button,[type="number"]: : -webkit-outer-spin-button {
        height: auto
    }
    [type="search"] {
        -webkit-appearance: textfield;
        outline-offset: -2px
    }
    [type="search"]: : -webkit-search-cancel-button,[type="search"]: : -webkit-search-decoration {
        -webkit-appearance: none
    }
    : : -webkit-file-upload-button {
        -webkit-appearance: button;
        font: inherit
    }
    details,menu {
        display: block
    }
    summary {
        display: list-item
    }
    canvas {
        display: inline-block
    }
    template {
        display: none
    }
    [hidden] {
        display: none
    }

    body {
        background-color: ${palette.midnightBlue};
        color: ${palette.concrete};
    }

    .SR {
        opacity: 0;
        visibility: hidden;
        position: absolute;
        left: 1000px;
        width: 0;
        height: 0;
        overflow: hidden;
        margin: 0;
        padding: 0;
        clip: 0 0 0 0;

    }

    button, input, textarea {
        &:hover,
        &:active,
        &:focus {
            outline: none;
        }
        
        border-color: transparent;
    }

    input, textarea {
        color: ${palette.concrete};
    }

    ::-webkit-input-placeholder { 
        color: ${palette.midnightBlue};
    }
    ::-moz-placeholder { 
        color: ${palette.midnightBlue};
    }
    :-ms-input-placeholder {
        color: ${palette.midnightBlue};
    }
    :-moz-placeholder { 
        color: ${palette.midnightBlue};
    }
`;