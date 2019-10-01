<template>
  <Page>
    <article class="post-full post page" :class="pageClass">

      <header class="post-full-header">
        <h1 class="post-full-title">There's no wrong answer to the right question.</h1>
      </header>

      <figure v-if="image" class="post-full-image">
        <g-image v-bind="image" src="" alt="" />
      </figure>

      <section class="post-full-content">
        <div class="post-content">
          <p>
            <strong>We are a newly formed Universal conglomerate with partners in various industries. Today's innovators were yesterday's instigators. Working together, imagine what we'll accomplish tomorrow. 
              <br/>
              Our management team and capitilization experts are looking for new ideas across most major industries, so tell us what's on your mind. We're open for business.</strong>
            <br/>
             Many so-called experts in the venture capital world have been one basic approach to how they do business: Inject lots of capital into the enterprise, pile on the debt, and then take over the board and squeeze the original innovator out. <strong>That model is broken.</strong> 
             <br/>
            
             <br/>
             Let's make magic happen together 😉.</p>
        </div>
      </section>

    </article>
  </Page>
</template>

<script>
import Page from "../layouts/Page";

export default {
  metaInfo() {
    return {
      title: 'About',
      bodyAttrs: {
        class: `page-about`
      }
    };
  },
  data() {
    return {
      image: ''
    }
  },
  computed: {
    pageClass() {
      if (this.image === '') {
        return 'no-image'
      }
    }
  },
  components: {
    Page
  }
};
</script>