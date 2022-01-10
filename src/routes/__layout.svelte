<script>
  import Nav from '../components/Nav.svelte'
</script>

<main class="p-8 max-w-6xl mx-auto">
  <Nav />
  <slot />
</main>

<style>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
