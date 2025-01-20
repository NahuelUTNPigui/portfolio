<script>
  import "../app.css";
  import Navbar from "$lib/Navigation/Navbar.svelte";

</script>

<Navbar>
  <slot/>
  <footer class="footer bg-gray-900 text-neutral-content p-10">
  <aside>
    <p>Copyright © {new Date().getFullYear()} - All right reserved by Nahuel Piguillem</p>
    </aside>
</footer>
</Navbar>