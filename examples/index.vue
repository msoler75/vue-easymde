<template>
  <div>
    <!-- use v-model control value -->
    <vue-easyemde v-model="content" ref="markdownEditor"/>

    <!-- use event control value -->
    <vue-easyemde :value="content" @input="handleInput"/>

    <!-- add config -->
    <vue-easyemde :configs="configs"/>

    <!-- disable auto init -->
    <vue-easyemde :autoinit="false"/>
  </div>
</template>

<script>
import VueEasymde from 'vue-easymde';

// Complete example
export default {
  components: {
    VueEasymde,
  },
  data() {
    return {
      content: '',
      configs: {
        status: false, // disable the status bar at the bottom
        spellChecker: false // disable spell check
      },
    };
  },
  computed: {
    easymde() {
      return this.$refs.markdownEditor.easymde;
    },
  },
  mounted() {
    console.log(this.easymde);
    this.easymde.togglePreview();

    // 'change' event has bound, via @input attache an event listener
    // You can attache events in this [list](https://codemirror.net/doc/manual.html#events) yourself if necessary
    this.easymde.codemirror.on('beforeChange', (instance, changeObj) => {
      // do some things
    });

    // remove EasyMDE, when component destroy will invoke
    this.easymde = null;

    // some useful methods
    this.$refs.markdownEditor.initialize(); // init
    this.easymde.toTextArea();
    this.easymde.isPreviewActive(); // returns boolean
    this.easymde.isSideBySideActive(); // returns boolean
    this.easymde.isFullscreenActive(); // returns boolean
    this.easymde.clearAutosavedValue(); // no returned value
    this.easymde.markdown(this.content); // returns parsed html
    this.easymde.codemirror.refresh(); // refresh codemirror
  },
  methods: {
    handleInput() {
      // do some things
    },
  },
};
</script>

<style>
  @import '~easymde/dist/easymde.min.css';
</style>
