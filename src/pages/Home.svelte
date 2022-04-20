<!--
  Tailwind UI components require Tailwind CSS v1.8 and the @tailwindcss/ui plugin.
  Read the documentation to get started: https://tailwindui.com/documentation
-->
<script>
  import Card from "../components/Card.svelte";
  import TransactionList from "../components/TransactionList.svelte";
</script>

<main class="flex-1 relative pb-8 z-0 overflow-y-auto">
  <!-- Page header -->

  <div class="mt-8">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div
        class="mb-6 pb-5 border-b border-gray-200 space-y-3 sm:flex sm:items-center sm:justify-between sm:space-x-4 sm:space-y-0"
      >
        <h3 class="text-lg leading-6 font-medium text-gray-900">Your DAOs</h3>
        <div class="flex space-x-3">
          <span class="shadow-sm rounded-md">
            <button
              type="button"
              class="inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:text-gray-800 active:bg-gray-50 transition duration-150 ease-in-out"
            >
              View all
            </button>
          </span>
          <span class="shadow-sm rounded-md">
            <button
              type="button"
              class="inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-700 active:bg-indigo-700 transition duration-150 ease-in-out"
            >
              Create DAO
            </button>
          </span>
        </div>
      </div>

      <div class="mt-2 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <!-- Card -->

        <Card />
        <Card />

        <!-- More cards... -->
      </div>
    </div>
    <hr class="max-w-6xl mx-auto mx-4 sm:mx-6 lg:mx-12 mt-6" />
    <div
      class="pb-5 mb-6 space-y-3 sm:space-y-4 sm:pb-0 max-w-6xl mx-auto mt-4 px-4 text-lg leading-6 font-medium text-cool-gray-900 sm:px-6 lg:px-8"
    >
      <h3 class="text-lg leading-6 font-medium text-gray-900">
        Recent Activity
      </h3>
      <div />
    </div>
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <TransactionList />
    </div>
  </div>
</main>
