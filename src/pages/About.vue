<template>
  <Page>
    <article class="post-full post page" :class="pageClass">

      <header class="post-full-header">
        <h1 class="post-full-title">Parker Venture Partners was originally founded in 2016 </h1>
      </header>

      <figure v-if="image" class="post-full-image">
        <g-image v-bind="image" src="" alt="" />
      </figure>

      <section class="post-full-content">
        <div class="post-content">
          <p>
            it all started when it's founder, John Parker bought his very first business at 28 years old in 1969 for 5000$ and now fifty (50) years later after owning over 180 companies during that period of 50 years. The organization has grown to a worldwide, multidimensional conglomerate involving health, wellness, car rentals, and enviornmental industries.
            
          <h2>Today's innovators were yesterday's instigators. Working together, imagine what we'll accomplish tomorrow.</h2> 
              Our management team and capitilization experts are looking for new ideas across most major industries, so tell us what's on your mind. We're open for business.
            <br/>
             Many so-called experts in the venture capital world have been one basic approach to how they do business: Inject lots of capital into the enterprise, pile on the debt, and then take over the board and squeeze the original innovator out.
             <h3>That model is broken.</h3> 
             <br/> 
             <h2>Let's make magic happen together.</h2> 
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