import { component$, useStyles$ } from '@builder.io/qwik';
import { useLocation } from '@builder.io/qwik-city';

export default component$(() => {

  const { pathname } = useLocation();

  return (
    <header>
      <nav class="text-center"> 
        nav here
      </nav>
    </header>
  );
});
