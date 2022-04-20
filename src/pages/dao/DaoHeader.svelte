<script>
  import { Link } from "svelte-navigator";
</script>

<div class="border-2 rounded-lg px-4">
  <div class="mt-2 md:flex md:items-center md:justify-between w-full ">
    <div class="flex min-w-0 items-center">
      <img
        class="w-20 h-20 flex-shrink-0 mx-auto bg-black rounded-full border-2 border-gray-200"
        src="/assets/OW-dao.png"
        alt=""
      />
      <div class="px-2 mx-2 p-2 w-full">
        <h2
          class="text-xl font-thin leading-7 text-gray-900 sm:text-3xl sm:leading-9 sm:truncate"
        >
          OurWorld DAO
        </h2>
        <div class="text-sm leading-5 font-medium text-cool-gray-500 my-2 ">
          The OurWorld DAO is the governance arm of OurWorld, the internet of
          internets.
        </div>
      </div>
    </div>
    <div class="mt-4 flex-shrink-0 flex md:mt-0 md:ml-4">
      <span class="shadow-sm rounded-md">
        <button
          type="button"
          class="inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:text-gray-800 active:bg-gray-50 transition duration-150 ease-in-out"
        >
          Edit
        </button>
      </span>
      <span class="ml-3 shadow-sm rounded-md">
        <button
          type="button"
          class="inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-700 active:bg-indigo-700 transition duration-150 ease-in-out"
        >
          Publish
        </button>
      </span>
    </div>
  </div>

  <div class="my-4 border-2 rounded-lg">
    <div class="sm:hidden">
      <select aria-label="Selected tab" class="form-select block w-full">
        <option selected>Dashboard</option>
        <option>About</option>
        <option>Members</option>
        <option>Proposals</option>
      </select>
    </div>
    <div class="hidden sm:block">
      <div class="border-gray-200">
        <nav class="-mb-px flex">
          <Link
            to=""
            class="w-1/4 py-4 px-1 text-center border-b-2 border-indigo-500 font-medium text-sm leading-5 text-indigo-600 focus:outline-none focus:text-indigo-800 focus:border-indigo-700"
          >
            Dashboard
          </Link>

          <Link
            to="#"
            class="w-1/4 py-4 px-1 text-center border-b-2 border-transparent font-medium text-sm leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300"
          >
            About
          </Link>
          <Link
            to="members"
            class="w-1/4 py-4 px-1 text-center border-b-2 border-transparent font-medium text-sm leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300"
            aria-current="page"
          >
            Members
          </Link>
          <Link
            to="#"
            class="w-1/4 py-4 px-1 text-center border-b-2 border-transparent font-medium text-sm leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300"
          >
            Proposals
          </Link>
        </nav>
      </div>
    </div>
  </div>
</div>
