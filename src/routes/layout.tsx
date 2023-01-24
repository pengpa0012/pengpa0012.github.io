import { component$, Slot, useStore } from '@builder.io/qwik';
import Footer from '~/components/footer';
import Header from '~/components/header';

export default component$(() => {
  const store = useStore({toggle: false})

  return (
    <div class={`duration-200 ${store.toggle ? "text-white bg-gray-800" : "text-black bg-white"}`}>
      <Header store={store} />
      <main>
        <Slot />
      </main>
      <Footer />
    </div>
  );
});
