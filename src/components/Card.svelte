<script>
  import { Router, Route, Link } from "svelte-navigator";
  import ProposalRow from "./ProposalRow.svelte";
</script>

<Link to="dao">
  <div class="bg-white overflow-hidden shadow rounded-lg">
    <div class="p-5">
      <div class="flex items-center">
        <div class="flex-shrink-0">
          <!-- Heroicon name: scale -->
          <svg
            class="h-6 w-6 text-cool-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
            />
          </svg>
        </div>
        <div class="ml-5 w-0 flex-1">
          <dl>
            <dt class="text-lg leading-7 font-medium text-cool-gray-900">
              OurWorld DAO
            </dt>
            <dd>
              <div
                class="text-xs leading-5 font-medium text-cool-gray-500 my-2"
              >
                The OurWorld DAO is the governance arm of OurWorld, the internet
                of internets.
              </div>
            </dd>
          </dl>
        </div>
      </div>
      <hr />
      <div class="text-sm leading-5 font-medium text-cool-gray-500 mt-4">
        Recent Proposals
      </div>

      <ProposalRow />
      <ProposalRow />

      <div>
        <div class="text-sm leading-5 font-medium text-cool-gray-500 mt-4">
          Stats
        </div>
        <div
          class="mt-2 grid grid-cols-1 rounded-lg bg-white overflow-hidden shadow xl:grid-cols-2"
        >
          <div>
            <div class="px-4 py-5 sm:py-2 sm:px-3">
              <dl>
                <dt class="text-sm leading-6 font-normal text-gray-900">
                  Members
                </dt>
                <dd
                  class="mt-1 flex justify-between items-baseline md:block lg:flex"
                >
                  <div
                    class="flex items-baseline text-lg leading-8 font-semibold text-indigo-600"
                  >
                    71,897
                  </div>
                  <div
                    class="inline-flex items-baseline px-2 py-0 rounded-full text-xs font-medium leading-5 bg-green-100 text-green-800 md:mt-2 lg:mt-0"
                  >
                    <svg
                      class="-ml-1 mr-0.5 flex-shrink-0 self-center h-3 w-3 text-green-500"
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
                    12
                  </div>
                </dd>
              </dl>
            </div>
          </div>
          <div class="border-t border-gray-200 md:border-0 md:border-l">
            <div class="px-4 py-5 sm:py-2 sm:px-3">
              <dl>
                <dt class="text-sm leading-6 font-normal text-gray-900">
                  Funds
                </dt>
                <dd
                  class="mt-1 flex justify-between items-baseline md:block lg:flex"
                >
                  <div
                    class="flex items-baseline text-lg leading-8 font-semibold text-indigo-600"
                  >
                    $72K
                  </div>
                  <div
                    class="inline-flex items-baseline px-2 py-0 rounded-full text-xs font-medium leading-5 bg-green-100 text-green-800 md:mt-2 lg:mt-0"
                  >
                    <svg
                      class="-ml-1 mr-0.5 flex-shrink-0 self-center h-3 w-3 text-green-500"
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
                    3.5%
                  </div>
                </dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</Link>
