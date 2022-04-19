<script>
  import { Router, Route, Link } from "svelte-navigator";
  import { user } from "./stores";
  import Header from "./components/Header.svelte";

  import Home from "./pages/Home.svelte";
  import Sidebar from "./components/Sidebar.svelte";
  import Dao from "./pages/dao/DAO.svelte";
</script>

<html lang="EN">
  <head />
  <Router>
    <body>
      <div class="h-screen flex overflow-hidden bg-cool-gray-100">
        <!-- Off-canvas menu for mobile, show/hide based on off-canvas menu state. -->
        <Sidebar />
        <div class="flex-1 overflow-auto focus:outline-none" tabindex="0">
          <Header />
          <Route path="/">
            <Home />
          </Route>
          <Route path="dao/*">
            <Dao />
          </Route>
        </div>
      </div>
    </body>
  </Router>
</html>

<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  /* purgecss end ignore */
  @tailwind utilities;

  @layer utilities {
    .ml-55 {
      margin-left: 55%;
    }
  }
</style>
