<script>
  import { Router, Route, Link } from "svelte-navigator";
  import Members from "./Members.svelte";
  import Dashboard from "./Dashboard.svelte";
  import DaoHeader from "./DaoHeader.svelte";
</script>

<div class="p-10">
  <DaoHeader />
  <Route path="/" component={Dashboard} />
  <Route path="/members" component={Members} />
</div>
