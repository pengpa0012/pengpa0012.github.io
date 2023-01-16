import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <h1 class="text-4xl text-red-900">Yello</h1>      
  );
});

export const head: DocumentHead = {
  title: "Homepage",
};
