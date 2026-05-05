/// <reference types="react" />

declare module 'styled-components' {
  import * as React from 'react';

  export interface ThemeProviderProps<Theme = DefaultTheme> {
    theme: Theme;
    children?: React.ReactNode;
  }

  export interface DefaultTheme {
    [key: string]: any;
  }

  export function ThemeProvider<Theme = DefaultTheme>(props: ThemeProviderProps<Theme>): React.ReactElement | null;

  export function createGlobalStyle<P = {}>(
    strings: TemplateStringsArray,
    ...interpolations: (string | number | ((props: P) => string | number))[]
  ): React.ComponentType<P>;

  export function keyframes(
    strings: TemplateStringsArray,
    ...interpolations: (string | number)[]
  ): string;

  export interface StyledInterface {
    <P = {}>(
      strings: TemplateStringsArray,
      ...interpolations: (string | number | ((props: P) => string | number))[]
    ): React.ComponentType<P & { children?: React.ReactNode }>;
  }

  interface StyledTags {
    a: StyledInterface;
    abbr: StyledInterface;
    address: StyledInterface;
    area: StyledInterface;
    article: StyledInterface;
    aside: StyledInterface;
    audio: StyledInterface;
    b: StyledInterface;
    base: StyledInterface;
    bdi: StyledInterface;
    bdo: StyledInterface;
    big: StyledInterface;
    blockquote: StyledInterface;
    body: StyledInterface;
    br: StyledInterface;
    button: StyledInterface;
    canvas: StyledInterface;
    caption: StyledInterface;
    cite: StyledInterface;
    code: StyledInterface;
    col: StyledInterface;
    colgroup: StyledInterface;
    data: StyledInterface;
    datalist: StyledInterface;
    dd: StyledInterface;
    del: StyledInterface;
    details: StyledInterface;
    dfn: StyledInterface;
    dialog: StyledInterface;
    div: StyledInterface;
    dl: StyledInterface;
    dt: StyledInterface;
    em: StyledInterface;
    embed: StyledInterface;
    fieldset: StyledInterface;
    figcaption: StyledInterface;
    figure: StyledInterface;
    footer: StyledInterface;
    form: StyledInterface;
    h1: StyledInterface;
    h2: StyledInterface;
    h3: StyledInterface;
    h4: StyledInterface;
    h5: StyledInterface;
    h6: StyledInterface;
    head: StyledInterface;
    header: StyledInterface;
    hgroup: StyledInterface;
    hr: StyledInterface;
    html: StyledInterface;
    i: StyledInterface;
    iframe: StyledInterface;
    img: StyledInterface;
    input: StyledInterface;
    ins: StyledInterface;
    kbd: StyledInterface;
    keygen: StyledInterface;
    label: StyledInterface;
    legend: StyledInterface;
    li: StyledInterface;
    link: StyledInterface;
    main: StyledInterface;
    map: StyledInterface;
    mark: StyledInterface;
    menu: StyledInterface;
    menuitem: StyledInterface;
    meta: StyledInterface;
    meter: StyledInterface;
    nav: StyledInterface;
    noscript: StyledInterface;
    object: StyledInterface;
    ol: StyledInterface;
    optgroup: StyledInterface;
    option: StyledInterface;
    output: StyledInterface;
    p: StyledInterface;
    param: StyledInterface;
    picture: StyledInterface;
    pre: StyledInterface;
    progress: StyledInterface;
    q: StyledInterface;
    rp: StyledInterface;
    rt: StyledInterface;
    ruby: StyledInterface;
    s: StyledInterface;
    samp: StyledInterface;
    script: StyledInterface;
    section: StyledInterface;
    select: StyledInterface;
    small: StyledInterface;
    source: StyledInterface;
    span: StyledInterface;
    strong: StyledInterface;
    style: StyledInterface;
    sub: StyledInterface;
    summary: StyledInterface;
    sup: StyledInterface;
    table: StyledInterface;
    tbody: StyledInterface;
    td: StyledInterface;
    textarea: StyledInterface;
    tfoot: StyledInterface;
    th: StyledInterface;
    thead: StyledInterface;
    time: StyledInterface;
    title: StyledInterface;
    tr: StyledInterface;
    track: StyledInterface;
    u: StyledInterface;
    ul: StyledInterface;
    var: StyledInterface;
    video: StyledInterface;
    wbr: StyledInterface;

    // SVG
    circle: StyledInterface;
    clipPath: StyledInterface;
    defs: StyledInterface;
    ellipse: StyledInterface;
    foreignObject: StyledInterface;
    g: StyledInterface;
    image: StyledInterface;
    line: StyledInterface;
    linearGradient: StyledInterface;
    marker: StyledInterface;
    mask: StyledInterface;
    path: StyledInterface;
    pattern: StyledInterface;
    polygon: StyledInterface;
    polyline: StyledInterface;
    radialGradient: StyledInterface;
    rect: StyledInterface;
    stop: StyledInterface;
    svg: StyledInterface;
    text: StyledInterface;
    tspan: StyledInterface;
  }

  const styled: StyledTags;

  export default styled;
}
