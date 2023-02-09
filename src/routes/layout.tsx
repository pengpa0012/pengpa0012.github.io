import { component$, Slot, useStore } from '@builder.io/qwik';

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
