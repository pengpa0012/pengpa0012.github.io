import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

const About = () => {
  const router = useRouter()
  console.log(router.route)

  useEffect(() => {
    const about = document.querySelector("#about")!
    const eyes = document.querySelectorAll("#eyes path")
    about.addEventListener("mousemove", (e:any) => {
      eyes.forEach((eye: any) => {
        eye.style.transform = `translate(${e.pageX / 500}px, ${e.pageY / 500}px)`
      })
    })
  }, [])

  

  return (
    <div id="about">
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
            <svg className="w-full" viewBox="0 0 500 500" fill="none">
              <g id="Man thinking-bro 1">
              <g id="freepik--background-simple--inject-810">
              <path id="Vector" d="M437.4 314.93C437.4 314.93 488.49 257.51 472.25 157.6C456.01 57.69 372.58 20.88 317.25 40.11C261.92 59.34 249.44 92.81 204.25 111.95C159.06 131.09 73.19 117.95 30.25 182.24C-12.69 246.53 42.13 353.06 111.92 419.86C181.71 486.66 359.8 444.84 437.4 314.93Z" fill="#8D32E3"/>
              <path id="Vector_2" opacity="0.7" d="M437.4 314.93C437.4 314.93 488.49 257.51 472.25 157.6C456.01 57.69 372.58 20.88 317.25 40.11C261.92 59.34 249.44 92.81 204.25 111.95C159.06 131.09 73.19 117.95 30.25 182.24C-12.69 246.53 42.13 353.06 111.92 419.86C181.71 486.66 359.8 444.84 437.4 314.93Z" fill="white"/>
              </g>
              <g id="freepik--Line--inject-810">
              <path id="Vector_3" d="M61.5801 476.25H461.73" stroke="#263238" stroke-miterlimit="10"/>
              </g>
              <g id="freepik--Character--inject-810">
              <path id="Vector_4" d="M401.04 476.25L395.26 409.62H258.41L250.85 476.25H401.04Z" fill="#263238" stroke="#263238" stroke-miterlimit="10"/>
              <path id="Vector_5" d="M317.22 207.67C317.22 207.67 277.22 218.67 259.72 231.91C242.22 245.15 230.12 258.69 232.94 284.34C235.76 309.99 254.08 380.17 254.08 380.17C254.08 380.17 251.54 408.64 251.54 410.33C251.54 412.02 251.26 416.81 257.46 417.09C263.66 417.37 338.07 420.48 354.7 420.76C371.33 421.04 393.32 419.35 395.85 417.38C397.102 416.34 398.125 415.05 398.853 413.594C399.581 412.138 399.999 410.546 400.08 408.92C400.36 405.54 403.18 364.1 403.18 364.1L403.46 345.5C403.46 345.5 421.79 284.62 422.91 264.89C424.03 245.16 416.71 238.68 408.54 232.48C400.37 226.28 374.93 215.78 361.19 211.62C347.45 207.46 317.22 207.67 317.22 207.67Z" fill="#8D32E3" stroke="#263238" stroke-miterlimit="10"/>
              <path id="Vector_6" d="M327.09 302.27C325.09 329.72 321.43 380.27 321.75 388.98C322.2 400.98 317.31 404.53 317.31 408.98" stroke="#263238" stroke-miterlimit="10"/>
              <path id="Vector_7" d="M328.42 284.56C328.42 284.56 328.06 289.23 327.51 296.62" stroke="#263238" stroke-miterlimit="10"/>
              <path id="Vector_8" d="M346.28 319.82L348.84 350.02L363.17 349L346.28 319.82Z" fill="#263238" stroke="#263238" stroke-miterlimit="10"/>
              <path id="Vector_9" d="M332.7 372.48C332.7 372.48 367.7 366.98 370.33 367.56C372.96 368.14 390.88 376.82 393.49 377.4C395.188 377.802 396.837 378.385 398.41 379.14L402.34 382.43L401 372.48C401 372.48 395.79 366.11 384.21 361.48C372.63 356.85 366.84 359.48 364.21 360.33C361.58 361.18 332.7 372.48 332.7 372.48Z" fill="#263238" stroke="#263238" stroke-miterlimit="10"/>
              <path id="Vector_10" d="M278.88 346.07L369.88 345.78C369.88 345.78 399.2 342.97 400.32 342.68C401.44 342.39 413.01 345.5 414.14 346.35C415.27 347.2 415.26 349.73 414.7 352.27L414.14 354.8C414.552 356.944 414.833 359.112 414.98 361.29C414.98 363.29 412.73 363.82 412.44 364.67C412.15 365.52 414.14 368.61 411.88 370.59L409.63 372.59C409.63 372.59 409.34 377.95 408.22 379.36C407.1 380.77 403.71 383.3 402.3 382.46C400.89 381.62 401.45 379.36 401.45 377.95C401.45 376.54 400.89 375.13 399.2 375.13C397.51 375.13 397.2 376.54 388.49 374.28C379.78 372.02 370.17 364.42 369.32 364.13C368.47 363.84 292.09 384.43 269.54 387.25C246.99 390.07 245.02 386.97 244.17 383.25C243.32 379.53 241.92 370.85 241.92 370.85L237.92 353.66L278.88 346.07Z" fill="white" stroke="#263238" stroke-miterlimit="10"/>
              <path id="Vector_11" d="M338.05 240.71C338.05 240.71 342.76 235.71 345.73 237.98C348.7 240.25 351.42 252.09 355.13 251.1C358.84 250.11 366.27 227.1 366.27 217.94C366.27 208.78 359.83 203.34 358.35 202.84C356.87 202.34 319 201.84 314.54 203.59C310.08 205.34 308.36 220.91 306.63 230.31C304.9 239.71 308.85 241.94 311.33 240.71C313.81 239.48 323.45 235.51 325.68 235.51C327.91 235.51 338.05 240.71 338.05 240.71Z" fill="#8D32E3" stroke="#263238" stroke-miterlimit="10"/>
              <path id="Vector_12" d="M363.4 188.54C363.4 188.54 359.85 206.08 358.47 210.41C357.09 214.74 347.04 227.95 344.47 230.71C341.9 233.47 334.42 247.06 332.47 247.46C330.52 247.86 325 229.33 325 229.33C325 229.33 317.9 217.11 316.52 213.96C315.14 210.81 313 201.55 313 201.55C313 201.55 324.62 211.55 337 209.43C349.38 207.31 355.71 194.85 355.71 194.85L363.4 188.54Z" fill="white" stroke="#263238" stroke-miterlimit="10"/>
              <path id="Vector_13" d="M315.29 153.6C315.29 153.6 311.82 149.88 309.84 155.6C307.86 161.32 311.84 171.43 311.84 171.43L315.29 153.6Z" fill="white" stroke="#263238" stroke-miterlimit="10"/>
              <path id="Vector_14" d="M315.91 142C315.91 142 310.2 182.59 310.2 185C310.2 187.41 308.62 195.24 310.99 200.37C313.36 205.5 320.44 211.79 326.16 212.58C331.88 213.37 343.1 212.19 349.41 207.26C355.72 202.33 363 191.7 363 191.7C363 191.7 370.89 190.51 376 188.35C381.11 186.19 385.06 181.25 384.87 176.13C384.643 172.852 383.48 169.707 381.52 167.07L378.52 161.55L386.4 146.77C386.4 146.77 381.87 138.3 367.29 130.22C352.71 122.14 339.7 119.58 333.6 119.58C327.5 119.58 319.8 122.14 317.6 127.07C315.4 132 315.91 142 315.91 142Z" fill="white" stroke="#263238" stroke-miterlimit="10"/>
              <path id="Vector_15" d="M334.63 122.14C334.63 122.14 345.86 140.66 354.34 139.88C362.82 139.1 365.34 135.15 365.34 135.15L371.05 142.83C371.05 142.83 364.95 145.39 366.13 148.55C367.31 151.71 372.63 158.79 372.63 158.79L368.29 177.31C368.29 177.31 371.64 177.9 372.24 176.72C372.84 175.54 375.78 168.25 375.78 168.25C376.575 167.74 377.436 167.343 378.34 167.07C379.381 166.846 380.458 166.846 381.5 167.07C381.5 167.07 383.66 159.78 384.5 159.58C385.34 159.38 393.17 157.21 396.13 149.53C399.09 141.85 394.55 129.63 384.3 119.98C374.05 110.33 352.38 107.76 351.2 105.98C350.02 104.2 356.72 106.76 355.34 102.82C353.96 98.88 345.29 93.76 334.26 99.28C323.23 104.8 324.8 110.9 325.98 112.87L327.16 114.87C327.16 114.87 317.9 111.72 311.4 115.66C304.9 119.6 301.75 127.48 304.7 128.27C307.65 129.06 311.4 127.27 311.4 127.27C311.4 127.27 307.46 133.77 308.64 135.15C309.82 136.53 315.93 142.04 315.93 142.04C315.93 142.04 318.3 128.25 323.22 126.28C328.14 124.31 334.63 122.14 334.63 122.14Z" fill="#263238" stroke="#263238" stroke-miterlimit="10"/>
              <path id="Vector_16" d="M331.08 148.74L332.86 154.46L322.81 173.37L333.45 177.51" stroke="#263238" stroke-miterlimit="10"/>
              <path id="Vector_17" d="M329.11 146.57C329.11 146.57 324.39 142.83 320.44 143.82C316.49 144.81 318.87 145.39 321.63 146.38C324.39 147.37 329.9 149.92 329.11 146.57Z" fill="#263238" stroke="#263238" stroke-miterlimit="10"/>
              <path id="Vector_18" d="M343.7 145.79C343.7 145.79 339.16 146.97 341.33 147.95C343.5 148.93 350 146.95 352.56 147.95C355.12 148.95 358.47 152.29 358.28 150.71C357.989 149.351 357.349 148.092 356.423 147.055C355.497 146.019 354.318 145.242 353 144.8C349.41 143.62 343.7 145.79 343.7 145.79Z" fill="#263238" stroke="#263238" stroke-miterlimit="10"/>
              <g id="eyes">
              <path id="Vector_19" d="M324.79 156.934C324.777 158.406 324.069 159.589 323.193 159.58C322.318 159.57 321.628 158.386 321.632 156.916C321.635 155.447 322.363 154.258 323.226 154.261C324.09 154.263 324.793 155.464 324.79 156.934Z" fill="#263238"/>
              <path id="Vector_20" d="M346.996 157.484C346.98 158.946 346.263 160.132 345.399 160.129C344.536 160.127 343.832 158.926 343.827 157.417C343.821 155.909 344.548 154.762 345.423 154.772C346.299 154.781 346.99 156.016 346.996 157.484Z" fill="#263238"/>
              </g>
              <path id="Vector_21" d="M316.7 179.87L324.78 185.19" stroke="#263238" stroke-miterlimit="10"/>
              <g id="Vector_22">
              <path d="M399.8 227.68C399.8 227.68 427.7 238.4 433.06 254.46C438.42 270.52 431.65 290.82 428.83 299.28C426.01 307.74 408.54 340.71 405.72 348.6C402.9 356.49 398.67 366.08 398.67 366.08C398.67 366.08 394.73 342.4 384 327.75C373.27 313.1 370.75 299.84 370.75 299.84C370.75 299.84 390.2 265.45 395.27 254.74" fill="#8D32E3"/>
              <path d="M399.8 227.68C399.8 227.68 427.7 238.4 433.06 254.46C438.42 270.52 431.65 290.82 428.83 299.28C426.01 307.74 408.54 340.71 405.72 348.6C402.9 356.49 398.67 366.08 398.67 366.08C398.67 366.08 394.73 342.4 384 327.75C373.27 313.1 370.75 299.84 370.75 299.84C370.75 299.84 390.2 265.45 395.27 254.74" stroke="#263238" stroke-miterlimit="10"/>
              </g>
              <path id="Vector_23" d="M373.73 293.88C373.73 293.88 379.44 291.03 381.34 291.98C383.24 292.93 407.67 305.98 410.84 320.85C413.129 332.036 411.564 343.667 406.4 353.85C403.54 359.25 398.15 369.71 394.03 370.98C389.91 372.25 386.41 338.31 377.85 320.55C369.29 302.79 373.73 293.88 373.73 293.88Z" fill="#8D32E3" stroke="#263238" stroke-miterlimit="10"/>
              <path id="Vector_24" d="M383.17 277.57C383.17 277.57 388.24 260.38 390.22 253.62" stroke="#263238" stroke-miterlimit="10"/>
              <path id="Vector_25" d="M332.27 216.52C332.27 216.52 324.39 205.52 318.27 198.2C312.15 190.88 305.85 186.57 303.69 187.2C301.53 187.83 300.69 189.96 302.11 192.52C303.53 195.08 309.99 200.8 311.17 202.38C312.35 203.96 314.17 209.67 314.17 209.67C314.17 209.67 308.46 210.06 307.47 211.24C306.549 212.61 305.759 214.063 305.11 215.58C303.92 216.182 302.892 217.06 302.11 218.14C301.522 218.964 301.119 219.906 300.93 220.9C300.73 221.69 297.93 223.07 298.17 226.61C298.41 230.15 301.72 235.28 302.9 237.61C304.08 239.94 312.75 250.41 314.33 252.19C315.91 253.97 324.97 269.72 327.33 275.04C329.69 280.36 352.55 342.04 359.25 351.3C365.95 360.56 378.36 369.42 385.06 372.58C391.76 375.74 396.49 370.41 399.64 363.71C402.79 357.01 405.55 343.61 399.45 328.24C393.35 312.87 381.32 299.67 372.06 291.79C362.8 283.91 345.46 264.21 343.49 260.66C341.52 257.11 339 249.23 339 249.23C339 249.23 344.12 234.23 344.51 230.71C344.9 227.19 342.94 220.86 343.51 218.1C344.08 215.34 346.46 209.82 347.45 207.46C348.44 205.1 351.78 201.15 350.01 199.38C348.24 197.61 340.95 199.77 338.39 203.91C336.107 207.991 334.063 212.201 332.27 216.52V216.52Z" fill="white" stroke="#263238" stroke-miterlimit="10"/>
              <g id="Vector_26">
              <path d="M271.37 259.19C271.96 256.06 272.37 253.9 272.37 253.9Z" fill="#8D32E3"/>
              <path d="M271.37 259.19C271.96 256.06 272.37 253.9 272.37 253.9" stroke="#263238" stroke-miterlimit="10"/>
              </g>
              <g id="Vector_27">
              <path d="M269.58 226.84C269.58 226.84 254.64 228.84 239.14 245.44C223.64 262.04 230.4 301.53 231.81 309.71C233.22 317.89 235.48 343 235.48 343L275.22 329.75C275.22 329.75 268.74 285.5 268.17 281.55C267.89 279.55 268.97 272.55 270.11 266.05" fill="#8D32E3"/>
              <path d="M269.58 226.84C269.58 226.84 254.64 228.84 239.14 245.44C223.64 262.04 230.4 301.53 231.81 309.71C233.22 317.89 235.48 343 235.48 343L275.22 329.75C275.22 329.75 268.74 285.5 268.17 281.55C267.89 279.55 268.97 272.55 270.11 266.05" stroke="#263238" stroke-miterlimit="10"/>
              </g>
              <path id="Vector_28" d="M231.53 334.23C231.53 334.23 235.48 355.37 237.45 356.49C239.42 357.61 270.14 349.17 273.53 348.6C276.92 348.03 278.88 348.88 278.88 346.07C278.88 343.26 276.06 330 274.37 327.75C272.68 325.5 236.04 330.28 232.94 331.13C229.84 331.98 231.53 334.23 231.53 334.23Z" fill="#8D32E3" stroke="#263238" stroke-miterlimit="10"/>
              <path id="Vector_29" d="M254 317.89C261.001 320.693 267.794 323.988 274.33 327.75C274.33 327.75 264.75 309.75 260.8 306.04" stroke="#263238" stroke-miterlimit="10"/>
              <path id="Vector_30" d="M248.72 315.91C249.85 316.3 250.97 316.71 252.07 317.12" stroke="#263238" stroke-miterlimit="10"/>
              <path id="Vector_31" d="M341.16 408.18C348.45 405.58 355.16 402.72 359.16 399.9" stroke="#263238" stroke-miterlimit="10"/>
              <path id="Vector_32" d="M306.79 418.22C306.79 418.22 322.36 414.53 337.14 409.57" stroke="#263238" stroke-miterlimit="10"/>
              <path id="Vector_33" d="M372.28 398.73C364.62 402.55 352.49 408.13 342.58 410.61" stroke="#263238" stroke-miterlimit="10"/>
              <path id="Vector_34" d="M379.79 394.83C379.79 394.83 378.22 395.7 375.61 397.04" stroke="#263238" stroke-miterlimit="10"/>
              </g>
              <g id="freepik--speech-bubble--inject-810">
              <path id="Vector_35" d="M116.12 37.14C49.0499 69.45 36.3299 164.31 78.8699 221.33C87.7599 233.25 99.3799 243.33 113.15 249.14C160.15 269.07 197.82 229.44 220.73 193.02C257.31 134.89 261.88 120.52 261.23 130.31C260.58 140.1 277.56 150.56 287.36 99C299.89 33 207.53 18 160.78 24.24C145.307 26.1617 130.235 30.5153 116.12 37.14V37.14Z" fill="#FEFFFF" stroke="#263238" stroke-miterlimit="10"/>
              <path id="Vector_36" d="M281.687 157.124C285.62 150.022 285.355 142.351 281.093 139.991C276.832 137.631 270.189 141.475 266.256 148.577C262.322 155.679 262.588 163.35 266.849 165.71C271.11 168.07 277.753 164.226 281.687 157.124Z" fill="#FEFFFF" stroke="#263238" stroke-miterlimit="10"/>
              <path id="Vector_37" d="M288.69 158.58C286.37 162.77 286.53 167.31 289.04 168.7C291.55 170.09 295.49 167.82 297.81 163.63C300.13 159.44 299.98 154.9 297.46 153.51C294.94 152.12 291 154.38 288.69 158.58Z" fill="#FEFFFF" stroke="#263238" stroke-miterlimit="10"/>
              <path id="Vector_38" d="M120 31C52.9099 63.27 40.1899 158.13 82.7299 215.15C91.6199 227.07 103.25 237.15 117.01 242.96C164.01 262.89 201.68 223.26 224.59 186.84C261.17 128.71 265.75 114.34 265.09 124.13C264.43 133.92 281.42 144.38 291.22 92.78C303.75 26.78 211.39 11.78 164.64 18.02C149.169 19.969 134.104 24.3497 120 31Z" fill="white" stroke="#263238" stroke-miterlimit="10"/>
              <path id="Vector_39" d="M270.12 142.4C266.18 149.5 266.45 157.17 270.71 159.53C274.97 161.89 281.61 158.04 285.55 150.94C289.49 143.84 289.21 136.17 284.95 133.81C280.69 131.45 274.05 135.3 270.12 142.4Z" fill="white" stroke="#263238" stroke-miterlimit="10"/>
              <path id="Vector_40" d="M292.56 152.4C290.23 156.6 290.39 161.13 292.91 162.52C295.43 163.91 299.35 161.65 301.67 157.45C303.99 153.25 303.84 148.72 301.32 147.33C298.8 145.94 294.88 148.2 292.56 152.4Z" fill="white" stroke="#263238" stroke-miterlimit="10"/>
              </g>
              <g id="freepik--Gears--inject-810">
              <g id="cogs">
              <path id="Vector_41" d="M82 101.1V87.89H90C90.3822 85.7043 90.9543 83.5562 91.71 81.47L84.76 77.47L91.43 66.02L98.43 70.02C99.8588 68.3212 101.431 66.7488 103.13 65.32L99.13 58.32L110.57 51.71L114.57 58.71C116.656 57.9543 118.804 57.3822 120.99 57V49H134.2V57.05C136.386 57.4241 138.535 57.993 140.62 58.75L144.62 51.8L156.06 58.41L152.06 65.41C153.756 66.8389 155.325 68.4114 156.75 70.11L163.75 66.11L170.35 77.55L163.35 81.55C164.107 83.635 164.676 85.7836 165.05 87.97H173.05V101.18H165.05C164.667 103.369 164.094 105.52 163.34 107.61L170.29 111.61L163.69 123.05L156.69 119.05C155.264 120.748 153.691 122.317 151.99 123.74L155.99 130.74L144.55 137.34L140.55 130.34C138.461 131.096 136.309 131.665 134.12 132.04V140.04H120.91V132.04C118.724 131.658 116.576 131.086 114.49 130.33L110.49 137.33L99.03 130.65L103.03 123.65C101.331 122.221 99.7588 120.649 98.33 118.95L91.33 122.95L84.72 111.51L91.72 107.51C90.9656 105.42 90.3934 103.269 90.01 101.08L82 101.1ZM127.53 119.1C132.4 119.1 137.16 117.656 141.209 114.95C145.258 112.244 148.414 108.399 150.277 103.899C152.14 99.4001 152.627 94.4493 151.676 89.6732C150.725 84.8971 148.38 80.5103 144.935 77.0675C141.491 73.6247 137.103 71.2807 132.327 70.3318C127.551 69.383 122.6 69.872 118.101 71.737C113.603 73.6019 109.758 76.7591 107.054 80.8091C104.35 84.8592 102.908 89.6202 102.91 94.49C102.907 97.7244 103.542 100.928 104.779 103.916C106.015 106.905 107.828 109.621 110.115 111.908C112.401 114.196 115.116 116.01 118.104 117.248C121.093 118.485 124.296 119.121 127.53 119.12V119.1Z" fill="#8D32E3"/>
              <path id="Vector_42" d="M103.31 180.08V169.35H109.85C110.162 167.57 110.627 165.82 111.24 164.12L105.59 160.86L110.96 151.56L116.63 154.83C117.788 153.447 119.067 152.168 120.45 151.01L117.18 145.35L126.48 139.98L129.74 145.64C131.436 145.024 133.183 144.559 134.96 144.25V137.71H145.7V144.25C147.477 144.561 149.224 145.026 150.92 145.64L154.19 139.99L163.49 145.36L160.22 151C161.601 152.161 162.879 153.439 164.04 154.82L169.7 151.55L175.07 160.85L169.41 164.12C170.023 165.817 170.488 167.563 170.8 169.34H177.34V180.1H170.8C170.489 181.877 170.024 183.624 169.41 185.32L175.06 188.58L169.69 197.89L164 194.61C162.839 195.991 161.561 197.269 160.18 198.43L163.44 204.09L154.14 209.46L150.88 203.81C149.183 204.423 147.437 204.888 145.66 205.2V211.73H135V205.19C133.221 204.889 131.473 204.423 129.78 203.8L126.51 209.46L117.21 204.09L120.48 198.42C119.102 197.259 117.828 195.981 116.67 194.6L111 197.87L105.63 188.57L111.29 185.31C110.677 183.61 110.212 181.86 109.9 180.08H103.31ZM140.31 194.73C144.266 194.73 148.132 193.557 151.421 191.359C154.71 189.162 157.274 186.038 158.788 182.384C160.301 178.729 160.697 174.708 159.926 170.828C159.154 166.949 157.249 163.385 154.452 160.588C151.655 157.791 148.091 155.886 144.212 155.114C140.332 154.343 136.311 154.739 132.656 156.252C129.002 157.766 125.878 160.33 123.681 163.619C121.483 166.908 120.31 170.774 120.31 174.73C120.31 177.358 120.828 179.96 121.834 182.388C122.841 184.816 124.316 187.022 126.175 188.879C128.034 190.737 130.241 192.209 132.67 193.213C135.099 194.217 137.702 194.733 140.33 194.73H140.31Z" fill="#8D32E3"/>
              <path id="Vector_43" d="M171.55 155.54V147.36H176.55C176.783 145.998 177.138 144.659 177.61 143.36L173.3 140.87L177.39 133.79L181.71 136.28C182.593 135.227 183.567 134.253 184.62 133.37L182.13 129.06L189.21 124.97L191.7 129.28C192.999 128.808 194.338 128.453 195.7 128.22V123.22H203.88V128.22C205.242 128.456 206.58 128.811 207.88 129.28L210.37 124.98L217.45 129.07L214.96 133.38C216.013 134.263 216.987 135.237 217.87 136.29L222.18 133.8L226.27 140.88L221.97 143.37C222.418 144.672 222.752 146.01 222.97 147.37H227.97V155.55H222.97C222.737 156.912 222.382 158.251 221.91 159.55L226.2 162L222.11 169.09L217.79 166.6C216.907 167.65 215.933 168.62 214.88 169.5L217.37 173.82L210.29 177.91L207.8 173.6C206.5 174.068 205.161 174.422 203.8 174.66V179.66H195.62V174.66C194.26 174.444 192.922 174.109 191.62 173.66L189.13 177.96L182.05 173.87L184.54 169.56C183.489 168.674 182.516 167.701 181.63 166.65L177.32 169.14L173.28 162L177.58 159.52C177.116 158.219 176.764 156.881 176.53 155.52L171.55 155.54ZM199.74 166.69C202.754 166.69 205.701 165.796 208.207 164.122C210.713 162.447 212.666 160.067 213.82 157.282C214.973 154.497 215.275 151.433 214.687 148.477C214.099 145.521 212.648 142.805 210.516 140.674C208.385 138.542 205.669 137.091 202.713 136.503C199.757 135.915 196.693 136.217 193.908 137.37C191.123 138.524 188.743 140.477 187.068 142.983C185.394 145.489 184.5 148.436 184.5 151.45C184.5 155.492 186.106 159.368 188.964 162.226C191.822 165.084 195.698 166.69 199.74 166.69V166.69Z" fill="#8D32E3"/>
              <path id="Vector_44" d="M191 103.32V95.14H196C196.237 93.7786 196.592 92.4403 197.06 91.14L192.76 88.66L196.85 81.57L201.16 84.06C202.048 83.0117 203.022 82.0384 204.07 81.15L201.58 76.84L208.67 72.75L211.15 77.06C212.449 76.5877 213.788 76.2329 215.15 76V71H223.32V76C224.681 76.2375 226.02 76.5922 227.32 77.06L229.8 72.76L236.89 76.85L234.32 81.18C235.368 82.0659 236.338 83.0394 237.22 84.09L241.54 81.6L245.63 88.69L241.32 91.17C241.788 92.4703 242.142 93.8086 242.38 95.17H247.38V103.35H242.38C242.146 104.711 241.794 106.049 241.33 107.35L245.63 109.83L241.54 116.92L237.23 114.43C236.344 115.478 235.371 116.448 234.32 117.33L236.81 121.65L229.72 125.74L227.24 121.43C225.964 121.88 224.653 122.221 223.32 122.45V127.45H215.14V122.45C213.78 122.232 212.442 121.897 211.14 121.45L208.66 125.75L201.57 121.66L204.06 117.35C203.012 116.462 202.038 115.488 201.15 114.44L196.84 116.93L192.75 109.84L197.06 107.36C196.588 106.061 196.233 104.722 196 103.36L191 103.32ZM219.19 114.45C222.207 114.452 225.156 113.559 227.665 111.885C230.174 110.21 232.13 107.829 233.286 105.043C234.442 102.256 234.745 99.1899 234.158 96.231C233.571 93.2721 232.119 90.5539 229.987 88.4202C227.855 86.2864 225.137 84.833 222.179 84.2438C219.22 83.6545 216.153 83.9559 213.366 85.1099C210.579 86.2638 208.197 88.2184 206.521 90.7265C204.845 93.2346 203.95 96.1834 203.95 99.2C203.95 103.243 205.555 107.12 208.413 109.98C211.271 112.839 215.147 114.447 219.19 114.45Z" fill="#8D32E3"/>
              </g>
              </g>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About