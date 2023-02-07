import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  const images = [
    "html5",
    "css3",
    "javascript",
    "react",
    "nextjs",
    "express",
    "mongodb",
    "vuejs",
    "nuxtjs",
    "tailwindcss"
  ]
  return (
    <div class="container pt-12">
      <div class="flex justify-between items-center py-64">
        <div class="py-12">
          <h1 class="text-7xl font-light">Godfrey Patricio</h1>
          <p class="text-lg mt-2 mb-4">Front end Developer</p>
          <div class="flex">
            <button class="mr-4 btn-primary">My Projects</button>
            <button>Something</button>
          </div>
        </div>
        <h1 class="text-7xl">Illustration</h1>
      </div>
      <div class="py-36">
        <div class="text-center mb-32">
          <h2 class="text-3xl mb-12">ABOUT ME</h2>
          <p class="text-xl max-w-4xl mx-auto">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium quas assumenda mollitia iste numquam esse voluptas consectetur, necessitatibus delectus aliquam possimus non soluta dignissimos quaerat deserunt, ipsa quos error eum?</p>
        </div>
        <div class="text-center">
          <h2 class="text-3xl mb-12">Things that i use</h2>
          <div class="max-w-5xl mx-auto flex flex-wrap gap-12 justify-center">
            {
              images.map((img, i) => (
                <img key={`img-${i}`} src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${img}/${img}-original${img == "tailwindcss" ? "-wordmark" : ""}.svg`} class="w-24 grayscale hover:grayscale-0 duration-200" /> 
              ))
            }
           
          </div>
        </div>
      </div>
      <div class="py-36">
        <h2 class="text-3xl text-center mb-32">SOME OF MY WORKS</h2>
        {
          [1,2,3].map((item, i) => (
            <div class="flex max-w-4xl mx-auto my-32" key={`${item}-${i}`}>
              <img src="https://via.placeholder.com/300x250" class="mr-20"/>
              <div>
                <h1 class="text-2xl">TITLE</h1>
                <p class="my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi maiores ratione illum animi dolore autem sapiente ullam distinctio laboriosam pariatur?</p>
                <ul class="flex gap-4">
                  <li>ICON</li>
                  <li>ICON</li>
                  <li>ICON</li>
                  <li>ICON</li>
                </ul>
                <div class="flex mt-10">
                  <button class="mr-4 btn-primary">DEMO</button>
                  <button>VIEW CODE</button>
                </div>
              </div>
            </div>
          ))
        }
        <div class="text-center">
          <button class="btn-black">View my Github</button>
        </div>
      </div>
      <div class="py-36">
        <div class="text-center mb-32">
          <h2 class="text-3xl mb-12">REACH ME ON</h2>
          <p class="text-xl max-w-4xl mx-auto">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium quas assumenda mollitia iste numquam esse voluptas consectetur, necessitatibus delectus aliquam possimus non soluta dignissimos quaerat deserunt, ipsa quos error eum?</p>
        </div>
        <ul class="flex justify-center gap-4">
          <li>ICON</li>
          <li>ICON</li>
          <li>ICON</li>
        </ul>
      </div>
    </div>
  );
});
  
export const head: DocumentHead = {
  title: "Godfrey Patricio",
};
