import { component$, Slot, useStore } from '@builder.io/qwik';
import Footer from '~/components/footer';
import Header from '~/components/header';

export default component$(() => {
  const store = useStore({toggle: false})

  return (
    <div>
      <main>
        <Slot/>
      </main>
    </div>
  );
});
