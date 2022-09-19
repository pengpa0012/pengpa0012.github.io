import React from 'react'

const About = () => {
  return (
    <div className="container px-2 py-20 md:py-40 text-black-custom">
      <div className="flex justify-between flex-col md:flex-row pb-12">
        <div className="w-full md:w-1/2">
          <div className="mb-6">
            <h2 className="text-2xl sm:text-3xl mb-4 font-bold text-primary">ABOUT ME</h2>
            <p className="text-md sm:text-xl">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. In magnam deserunt nobis, sequi nam sed tempora molestias? Aut soluta veritatis est. Perferendis totam sunt illo temporibus pariatur dolorem perspiciatis dolores eligendi quod, placeat vel dicta, porro cum vitae commodi corrupti assumenda quaerat hic. Alias a libero, quas sequi, obcaecati voluptatum repellat illo vel accusantium soluta neque odit reiciendis velit autem hic harum quasi recusandae
            </p>
          </div>
          <div className="mb-6">
            <h2 className="text-2xl sm:text-3xl mb-4 font-bold text-primary">SKILLS</h2>
            <p className="text-md sm:text-xl">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. In magnam deserunt nobis, sequi nam sed tempora molestias? Aut soluta veritatis est. Perferendis totam sunt illo temporibus pariatur dolorem perspiciatis
            </p>
          </div>
          <div className="mb-6">
            <h2 className="text-2xl sm:text-3xl mb-4 font-bold text-primary">SOCIALS</h2>
            <p className="text-md sm:text-xl">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. In magnam deserunt nobis, sequi nam sed tempora molestias? Aut soluta veritatis est. Perferendis totam sunt illo temporibus pariatur dolorem perspiciatis
            </p>
          </div>
        </div>
        <div className="hidden md:block w-1/2">
          <h1 className="text-3xl text-center">ILLUSTRATION HERE</h1>
        </div>
      </div>
    </div>
  )
}

export default About