import { component$, useStyles$ } from '@builder.io/qwik';
import { useLocation } from '@builder.io/qwik-city';

export default component$(() => {

  const { pathname } = useLocation();

  return (
    <header class="container flex justify-between py-6">
      <h1 class="text-xl">LOGO</h1>
      <nav> 
        <ul class="flex">
          <li class="text-xl cursor-pointer">Projects</li>
          <li class="ml-4 text-xl cursor-pointer">About</li>
          <li class="ml-4 text-xl cursor-pointer">Toggle</li>
        </ul>
      </nav>
    </header>
  );
});
