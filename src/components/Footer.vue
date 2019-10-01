<template>
  <!-- The footer at the very bottom of the screen -->
  <footer class="site-footer outer">
    <div class="site-footer-content inner">
      <section class="copyright">
        <a href="/">{{ Admin.site.title }}</a> &copy; {{ new Date().getFullYear() }}
        </section>
      <nav class="site-footer-nav">
          <g-link to="/">Latest Posts</g-link>

      </nav>
    </div>
  </footer>
</template>

<script>
  import Admin from '../../data/admin.yml'

  export default {
    computed: {
      Admin() {
        return Admin
      }
    }  
  }
</script>
