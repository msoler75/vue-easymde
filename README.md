# Vue-EasyMDE

> Markdown Editor component for Vue.js. Support only vue2.x.

[![npm package](https://img.shields.io/npm/v/vue-easymde.svg)](https://npmjs.org/package/vue-easymde)
[![npm downloads](http://img.shields.io/npm/dm/vue-easymde.svg)](https://npmjs.org/package/vue-easymde)

# Use Setup

> No longer support Vue1.x, you can modify to use

## Install

```bash
npm install vue-easymde --save

yarn add vue-easymde
```

## Use

- Internal reference in a single component

```vue
<template>
 <markdown-editor v-model="content" ref="markdownEditor"></markdown-editor>
</template>

<script>
 import markdownEditor from "vue-easymde/src/markdown-editor";

 export default {
  components: {
    markdownEditor
  }
 };
</script>

<style>
 @import "~easymde/dist/easymde.min.css";
</style>
```

- Global reference

```javascript
import Vue from "vue";
import VueEasymde from "vue-easymde";
import "easymde/dist/easymde.min.css";

Vue.use(VueEasymde);
```

## Props

| property      | type    | default | describe                                      |
| ------------- | ------- | ------- | --------------------------------------------- |
| value         | String  | None    | Initial value, v-model binding can be used    |
| name          | String  | None    | The name of the control.                      |
| preview-class | String  | None    | Custom preview style class                    |
| autoinit      | Boolean | true    | Automatic initialization                      |
| highlight     | Boolean | false   | Is it open to highlight                       |
| sanitize      | Boolean | false   | HTML that does not render input after opening |
| configs       | Object  | {}      | [EasyMDE's config](#configuration)          |

## Markdown style
> e.g. use Github's markdown style

[github-markdown-css](https://github.com/sindresorhus/github-markdown-css)

### install
```bash
$ npm install --save github-markdown-css

$ yarn add github-markdown-css
```

### use
```vue
<template>
 <markdown-editor preview-class="markdown-body"></markdown-editor>
</template>

<style>
 @import "~easymde/dist/easymde.min.css";
 @import "~github-markdown-css";
</style>
```

## Highlight

### install
```
$ npm install --save highlight.js

$ yarn add highlight.js
```

### use
```vue
<template>
 <markdown-editor :highlight="true"></markdown-editor>
</template>

<script>
 import hljs from "highlight.js";

 window.hljs = hljs;
</script>

<style>
 @import "~easymde/dist/easymde.min.css";
 @import "~highlight.js/styles/atom-one-dark.css";
 /* Highlight theme list: https://github.com/isagalaev/highlight.js/tree/master/src/styles */
</style>
```

## Editor Theme ([simplemde-theme-base](https://github.com/xcatliu/simplemde-theme-base/wiki/List-of-themes))

> e.g. use simplemde-theme-base theme

### install
```
$ npm install --save simplemde-theme-base

$ yarn add simplemde-theme-base
```

### use
```vue
<style>
  @import "~simplemde-theme-base/dist/simplemde-theme-base.min.css";
  /* no need import simplemde.min.css */
</style>
```

## Configuration
> Configuration is based on EasyMDE [config](https://github.com/Ionaru/easy-markdown-editor)

- [English](doc/configuration_en.md)
- [中文](doc/configuration_zh.md)

## Examples

- [Simple Example](./examples/index.vue)
- [Nuxt Example](./examples/nuxt)
- [Demo Page](https://f-loat.github.io/vue-simplemde/)
- [Demo Source](https://github.com/F-loat/vue-simplemde/tree/gh-pages)

## Dependencies

- [EasyMDE](https://github.com/Ionaru/easy-markdown-editor)

## Licence

vue-easymde is open source and released under the MIT Licence.

Copyright (c) 2018 F-loat

Copyright (c) 2019 Ilya Nikulin
