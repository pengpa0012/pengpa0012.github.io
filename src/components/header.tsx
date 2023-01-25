import { component$ } from '@builder.io/qwik';

interface headerProps {
  store: {
    toggle: boolean;
  }
}

export default component$((props: headerProps) => {

  return (
    <header class={`fixed inset-x-0 border border-t-0 border-r-0 border-l-0 duration-200 ${props.store.toggle ? "bg-gray-700" : "bg-white"}`}>
      <div class="container flex justify-between py-6">
        <h1 class="text-xl">LOGO</h1>
        <nav> 
          <ul class="flex">
            <li class="text-xl cursor-pointer">Projects</li>
            <li class="ml-4 text-xl cursor-pointer">About</li>
            <li class="ml-4 text-xl cursor-pointer border rounded-full w-12 grid items-center px-1" onClick$={() => props.store.toggle = !props.store.toggle}>
              <div class="bg-gray-500 w-4 h-4 rounded-full duration-200" style={{ transform: props.store.toggle ? "translateX(140%)" : "" }}></div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
});
// Add toggler icon
// Add darkmode classes