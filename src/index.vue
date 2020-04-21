<template>
  <div class="vue-easymde">
    <textarea
      class="vue-simplemde-textarea"
      :name="name"
      :value="modelVal"
      @input="handleInput($event.target.value)"
    />
  </div>
</template>

<script>
// eslint-disable-next-line import/extensions
import EasyMDE from 'easymde';
// eslint-disable-next-line import/extensions
import marked from 'marked';

export default {
  name: 'vue-easymde',
  props: {
    value: String,
    name: String,
    previewClass: String,
    autoinit: {
      type: Boolean,
      default() {
        return true;
      },
    },
    highlight: {
      type: Boolean,
      default() {
        return false;
      },
    },
    sanitize: {
      type: Boolean,
      default() {
        return false;
      },
    },
    configs: {
      type: Object,
      default() {
        return {};
      },
    },
    previewRender: {
      type: Function,
    },
  },
  data() {
    return {
      modelVal: '',
    };
  },
  mounted() {
    if (this.autoinit) this.initialize();
  },
  deactivated() {
    const editor = this.easymde;
    if (!editor) return;
    const isFullScreen = editor.codemirror.getOption('fullScreen');
    if (isFullScreen) editor.toggleFullScreen();
  },
  methods: {
    initialize() {
      const configs = {
        element: this.$el.firstElementChild,
        initialValue: this.value,
        previewRender: this.previewRender,
        renderingConfig: {},
        ...this.configs,
      };

      // 同步 value 和 initialValue 的值 \ Synchronize the values of value and initialValue
      if (configs.initialValue) {
        this.$emit('input', configs.initialValue);
      }

      // 判断是否开启代码高亮 \ Determine whether to enable code highlighting
      if (this.highlight) {
        configs.renderingConfig.codeSyntaxHighlighting = true;
      }

      // 设置是否渲染输入的html \ Set whether to render the input html
      marked.setOptions({ sanitize: this.sanitize });

      // 实例化编辑器 \ Instantiated editor
      this.easymde = new EasyMDE(configs);

      // 添加自定义 previewClass \ Add a custom previewClass
      const className = this.previewClass || '';
      this.addPreviewClass(className);

      // 绑定事件 \ Binding event
      this.bindingEvents();
    },
    bindingEvents() {
      this.easymde.codemirror.on('change', () => {
        const val = this.easymde.value();
        this.handleInput(val);
      });
    },
    addPreviewClass(className) {
      const wrapper = this.easymde.codemirror.getWrapperElement();
      const preview = document.createElement('div');
      wrapper.nextSibling.className += ` ${className}`;
      preview.className = `editor-preview ${className}`;
      wrapper.appendChild(preview);
    },
    handleInput(val) {
      this.isValueUpdateFromInner = true;
      this.$emit('input', val);
    },
  },
  destroyed() {
    this.easymde = null;
  },
  watch: {
    value(val) {
      if (this.isValueUpdateFromInner) {
        this.isValueUpdateFromInner = false;
        return;
      }
      this.easymde.value(val);
      this.modelVal = val;
    },
  },
};
</script>

<style>
  .vue-easymde .markdown-body {
    padding: 0.5em
  }

  .vue-easymde .editor-preview-active, .vue-easymde .editor-preview-active-side {
    display: block;
  }
</style>
