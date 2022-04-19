<!--
  Tailwind UI components require Tailwind CSS v1.8 and the @tailwindcss/ui plugin.
  Read the documentation to get started: https://tailwindui.com/documentation
-->
<script>
  import ProposalCard from "../../components/ProposalCard.svelte";
  import TransactionList from "../../components/TransactionList.svelte";
</script>

<main class="flex-1 relative pb-8 z-0 overflow-y-auto">
  <!-- Page header -->

  <div class="mt-8">
    <div class="flex flex-col lg:flex-row w-full">
      <div class="bg-white shadow overflow-hidden sm:rounded-lg">
        <div class="px-4 py-5 border-b border-gray-200 sm:px-6">
          <h3 class="text-lg leading-6 font-medium text-gray-900">
            Applicant Information
          </h3>
          <p class="mt-1 max-w-2xl text-sm leading-5 text-gray-500">
            Personal details and application.
          </p>
        </div>
        <div class="px-4 py-5 sm:px-6">
          <dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
            <div class="sm:col-span-1">
              <dt class="text-sm leading-5 font-medium text-gray-500">
                Full name
              </dt>
              <dd class="mt-1 text-sm leading-5 text-gray-900">
                Margot Foster
              </dd>
            </div>
            <div class="sm:col-span-1">
              <dt class="text-sm leading-5 font-medium text-gray-500">
                Application for
              </dt>
              <dd class="mt-1 text-sm leading-5 text-gray-900">
                Backend Developer
              </dd>
            </div>
            <div class="sm:col-span-1">
              <dt class="text-sm leading-5 font-medium text-gray-500">
                Email address
              </dt>
              <dd class="mt-1 text-sm leading-5 text-gray-900">
                margotfoster@example.com
              </dd>
            </div>
            <div class="sm:col-span-1">
              <dt class="text-sm leading-5 font-medium text-gray-500">
                Salary expectation
              </dt>
              <dd class="mt-1 text-sm leading-5 text-gray-900">$120,000</dd>
            </div>
            <div class="sm:col-span-2">
              <dt class="text-sm leading-5 font-medium text-gray-500">About</dt>
              <dd class="mt-1 text-sm leading-5 text-gray-900">
                Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim
                incididunt cillum culpa consequat. Excepteur qui ipsum aliquip
                consequat sint. Sit id mollit nulla mollit nostrud in ea officia
                proident. Irure nostrud pariatur mollit ad adipisicing
                reprehenderit deserunt qui eu.
              </dd>
            </div>
          </dl>
        </div>
      </div>

      <div class="flex flex-col w-full">
        <ProposalCard />
        <ProposalCard />
        <ProposalCard />
      </div>
    </div>
    <div>
      <h3 class="text-lg leading-6 font-medium text-gray-900">Last 30 days</h3>
      <div
        class="mt-5 grid grid-cols-1 rounded-lg bg-white overflow-hidden shadow md:grid-cols-3"
      >
        <div>
          <div class="px-4 py-5 sm:p-6">
            <dl>
              <dt class="text-base leading-6 font-normal text-gray-900">
                Total Subscribers
              </dt>
              <dd
                class="mt-1 flex justify-between items-baseline md:block lg:flex"
              >
                <div
                  class="flex items-baseline text-2xl leading-8 font-semibold text-indigo-600"
                >
                  71,897
                  <span
                    class="ml-2 text-sm leading-5 font-medium text-gray-500"
                  >
                    from 70,946
                  </span>
                </div>
                <div
                  class="inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium leading-5 bg-green-100 text-green-800 md:mt-2 lg:mt-0"
                >
                  <svg
                    class="-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span class="sr-only"> Increased by </span>
                  12%
                </div>
              </dd>
            </dl>
          </div>
        </div>
        <div class="border-t border-gray-200 md:border-0 md:border-l">
          <div class="px-4 py-5 sm:p-6">
            <dl>
              <dt class="text-base leading-6 font-normal text-gray-900">
                Avg. Open Rate
              </dt>
              <dd
                class="mt-1 flex justify-between items-baseline md:block lg:flex"
              >
                <div
                  class="flex items-baseline text-2xl leading-8 font-semibold text-indigo-600"
                >
                  58.16%
                  <span
                    class="ml-2 text-sm leading-5 font-medium text-gray-500"
                  >
                    from 56.14%
                  </span>
                </div>
                <div
                  class="inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium leading-5 bg-green-100 text-green-800 md:mt-2 lg:mt-0"
                >
                  <svg
                    class="-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span class="sr-only"> Increased by </span>
                  2.02%
                </div>
              </dd>
            </dl>
          </div>
        </div>
        <div class="border-t border-gray-200 md:border-0 md:border-l">
          <div class="px-4 py-5 sm:p-6">
            <dl>
              <dt class="text-base leading-6 font-normal text-gray-900">
                Avg. Click Rate
              </dt>
              <dd
                class="mt-1 flex justify-between items-baseline md:block lg:flex"
              >
                <div
                  class="flex items-baseline text-2xl leading-8 font-semibold text-indigo-600"
                >
                  24.57%
                  <span
                    class="ml-2 text-sm leading-5 font-medium text-gray-500"
                  >
                    from 28.62
                  </span>
                </div>
                <div
                  class="inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium leading-5 bg-red-100 text-red-800 md:mt-2 lg:mt-0"
                >
                  <svg
                    class="-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-red-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span class="sr-only"> Decreased by </span>
                  4.05%
                </div>
              </dd>
            </dl>
          </div>
        </div>
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

    <TransactionList />
  </div>
</main>
