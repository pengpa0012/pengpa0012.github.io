import { component$, useStore } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { images } from '~/Content';

export default component$(() => {
  const store = useStore({
    toggle: false,  
    mouse: { x: 0, y: 0 },
    scale: 1
  })
 

  return (
    <div class={`duration-200 ${store.toggle ? "text-white bg-gray-800" : "text-[#374151] bg-white"} overflow-x-hidden`} window:onScroll$={(e) => {
      store.scale = (window.scrollY * 0.004 / 2) + 1
    }}>
      <header class={`fixed inset-x-0 shadow-md duration-200 z-20 ${store.toggle ? "bg-gray-700 text-white" : "bg-white text-black"}`}>
        <div class="container flex justify-between py-6">
          <div class="text-xl cursor-pointer" onClick$={() => window.scrollTo(0, 0)}>PENG</div>
          <nav> 
            <ul class="flex">
              <li class="text-xl cursor-pointer">Projects</li>
              <li class="ml-4 text-xl cursor-pointer">About</li>
              <li class={`ml-4 text-xl cursor-pointer border ${store.toggle ? "border-white" : "border-gray-500"} rounded-full w-12 grid items-center px-1 duration-200`} onClick$={() => store.toggle = !store.toggle}>
                <i class={`fa-regular ${store.toggle ? "fa-sun" : "fa-moon"} fa-xs duration-200`} style={{ transform: store.toggle ? "translateX(60%)" : "" }}></i>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <div class="container pt-12">
        <div class="flex justify-between items-center py-64" 
          document:onMouseMove$={(e) => {
            const { x, y } = e
            store.mouse = { x, y }
          }}
        >
          <div class="py-12 text-center lg:text-left mx-auto lg:mx-0 fade-right">
            <h1 class="text-7xl">Godfrey Patricio</h1>
            <p class="text-lg mt-2 mb-4">Front end Developer</p>
            <div class="flex justify-center lg:justify-start">
              <button class="mr-4 btn-primary">My Projects</button>
              <button>Something {Math.floor(store.mouse.x * 0.05)} {Math.floor(store.mouse.y * 0.05)}</button>
            </div>
          </div>
          <svg class="hidden lg:block fade-left" width="399" height="337" viewBox="0 0 399 337" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="illustration">
            <g id="person" clip-path="url(#clip0_3_33)" class="duration-200 origin-center" style={{ transform: `translate(${Math.floor(store.mouse.x * 0.01) - 10}px, ${Math.floor(store.mouse.y * 0.01) - 10}px) scale(${store.scale})` }}>
            <g id="Group">
            <g id="Group_2">
            <path id="Vector" d="M204.612 235.611C230.787 235.611 252.007 214.392 252.007 188.217C252.007 162.042 230.787 140.822 204.612 140.822C178.437 140.822 157.218 162.042 157.218 188.217C157.218 214.392 178.437 235.611 204.612 235.611Z" fill="#FFDDB1"/>
            <path id="Vector_2" d="M165.384 246.224L175.263 220.976L226.308 213.292L231.793 269.182L180.199 270.279L165.384 246.224Z" fill="#FFDDB1"/>
            </g>
            <path id="Vector_3" d="M252.466 196.961C251.851 199.426 250.607 205.293 248.665 205.322C247.079 205.345 245.561 179.89 247.145 175.68C248.966 170.843 244.182 164.724 240.579 161.583C234.1 155.935 219.718 168.062 205.093 162.569C204.706 162.423 204.783 162.44 200.165 160.597C185.955 154.928 185.208 154.764 184.394 154.683C177.505 154.002 169.098 159.639 165.665 166.512C162.097 173.656 165.078 179.784 161.723 197.068C161.331 199.083 160.717 201.954 159.751 201.997C157.985 202.074 156.26 192.639 155.808 190.168C153.916 179.816 152.091 169.834 155.808 158.626C156.214 157.403 158.713 152.866 163.694 143.84C170.87 130.839 174.479 124.313 175.522 123.141C183.003 114.729 196.619 107.055 208.05 110.327C213.828 111.98 212.792 114.639 219.879 117.227C232.507 121.837 243.483 116.198 245.507 120.184C246.579 122.295 243.579 124.035 243.536 128.069C243.461 134.991 252.216 136.992 257.336 143.84C260.088 147.522 264.799 147.562 252.466 196.961Z" fill="#2F2E41"/>
            </g>
            <path id="Vector_4" d="M311.182 287.937C309.272 290.083 307.29 292.185 305.237 294.238C277.662 321.813 240.997 337 202 337C168.294 337 136.333 325.655 110.476 304.77C110.459 304.76 110.448 304.748 110.432 304.732C107.001 301.966 103.681 299.024 100.475 295.917C100.535 295.434 100.601 294.957 100.673 294.484C101.123 291.301 101.622 288.266 102.182 285.472C106.765 262.573 167.07 238.533 168.64 237.907C168.661 237.901 168.672 237.896 168.672 237.896C168.672 237.896 176.434 266.503 209.69 266.135C232.342 265.888 227.951 237.896 227.951 237.896C227.951 237.896 228.225 237.951 228.741 238.06C235.284 239.449 280.708 249.428 298.629 263.045C304.09 267.195 308.009 276.032 310.825 286.57C310.946 287.02 311.061 287.481 311.182 287.937Z" fill="#0095FE"/>
            <path id="Vector_5" d="M305.237 87.7627C277.662 60.1878 240.997 45 202 45C163.003 45 126.338 60.1878 98.7626 87.7627C71.1874 115.338 56 152.003 56 191C56 226.595 68.6515 260.246 91.8359 286.817C94.0478 289.358 96.3586 291.833 98.7626 294.238C99.3279 294.803 99.8988 295.368 100.475 295.917C103.681 299.024 107.001 301.966 110.432 304.732C110.448 304.748 110.459 304.76 110.476 304.77C136.333 325.655 168.294 337 202 337C240.997 337 277.662 321.813 305.237 294.238C307.29 292.185 309.272 290.083 311.182 287.937C334.986 261.196 348 227.1 348 191C348 152.003 332.813 115.338 305.237 87.7627ZM310.825 286.57C306.505 291.482 301.862 296.104 296.922 300.391C287.553 308.541 277.124 315.501 265.878 321.045C261.931 322.993 257.886 324.766 253.748 326.352C237.671 332.522 220.222 335.902 202 335.902C184.414 335.902 167.553 332.752 151.948 326.989C145.543 324.628 139.352 321.824 133.407 318.613C132.535 318.141 131.668 317.664 130.806 317.175C126.272 314.606 121.887 311.802 117.677 308.772C111.645 304.447 105.958 299.666 100.673 294.484C97.7088 291.581 94.8766 288.557 92.1707 285.412C70.3201 260.032 57.0977 227.034 57.0977 191C57.0977 111.101 122.101 46.0977 202 46.0977C281.899 46.0977 346.902 111.101 346.902 191C346.902 227.588 333.274 261.047 310.825 286.57Z" fill={store.toggle ? "#E5E5E5" : "#424040"}/>
            </g>
            <g id="icon-5" class="icon" clip-path="url(#clip1_3_33)">
            <g id="Group_3">
            <path id="Vector_6" d="M352.55 307.537C358.443 297.531 364.335 287.525 370.228 277.519C371.664 275.08 372.808 272.909 372.55 270.004C372.421 268.546 372.475 267.083 372.069 265.658C370.966 261.778 366.947 261.801 363.756 262.844C362.638 263.209 361.496 263.486 360.457 264.085C359.409 264.689 358.513 265.607 357.725 266.514C355.895 268.617 354.125 270.774 352.313 272.894C348.621 277.214 344.899 281.508 341.196 285.819C339.292 288.037 337.393 290.26 335.506 292.492C334.58 293.588 333.795 294.375 332.614 295.19C331.489 295.966 330.183 296.681 329.233 297.675C327.184 299.821 328.095 302.558 330.259 304.154C331.429 305.018 332.616 305.86 333.796 306.709C337.042 309.044 340.295 311.371 343.537 313.712C345.379 315.042 347.584 317.091 349.962 315.638C351.34 314.796 351.642 313.259 351.898 311.796C352.18 310.188 352.461 308.58 352.743 306.972L352.153 308.104L352.184 308.061C352.962 306.959 353.101 305.515 352.016 304.529C351.111 303.707 349.268 303.588 348.484 304.697C347.695 305.814 347.63 307.205 347.399 308.527C347.286 309.17 347.174 309.813 347.061 310.456C347.005 310.778 346.951 311.1 346.892 311.421C346.712 312.409 346.693 311.482 347.479 311.262L348.807 311.198C348.14 311.139 347.133 310.18 346.383 309.639C345.219 308.8 344.053 307.962 342.887 307.124C340.414 305.348 337.94 303.574 335.47 301.793C335.193 301.592 333.158 299.823 332.906 299.909C332.777 299.954 332.927 301.172 332.827 301.135C332.824 301.134 333.271 300.811 333.332 300.769C333.799 300.443 334.269 300.122 334.738 299.798C335.761 299.092 336.941 298.442 337.792 297.533C340.996 294.109 343.899 290.338 346.961 286.782C350.086 283.152 353.219 279.529 356.33 275.886C357.859 274.095 359.381 272.298 360.899 270.496C361.446 269.847 361.991 269.126 362.668 268.607C363.347 268.086 364.143 268 364.941 267.723C365.582 267.5 366.402 267.247 366.813 267.196C366.936 267.181 367.698 267.113 367.394 267.138C367.009 267.169 367.48 267.135 367.452 267.152C367.676 267.212 367.686 267.206 367.482 267.135C367.314 267.065 367.289 267.057 367.408 267.113C367.447 267.146 367.073 266.791 367.433 267.151C367.182 266.9 367.225 266.943 367.181 266.81C367.244 267.002 367.304 267.194 367.361 267.389C367.4 267.52 367.422 267.851 367.346 267.29C367.364 267.424 367.387 267.559 367.398 267.693C367.492 268.87 367.773 270.279 367.642 271.437C367.541 272.339 366.976 273.182 366.534 273.948C365.92 275.01 365.29 276.063 364.667 277.119C359.151 286.487 353.634 295.854 348.118 305.221C346.48 308.002 350.922 310.301 352.55 307.537Z" fill={store.toggle ? "#E5E5E5" : "#424040"}/>
            <path id="Vector_7" d="M344.972 281.805C340.802 282.144 336.632 282.484 332.462 282.823C330.455 282.986 328.361 283.131 326.701 284.407C325.232 285.537 324.301 287.12 323.485 288.753C323.038 289.648 323.121 291.121 324.019 291.761C326.814 293.752 329.608 295.742 332.403 297.733C333.501 298.516 334.95 298.647 335.934 297.565C336.759 296.658 336.872 294.821 335.766 294.034C332.972 292.043 330.177 290.052 327.383 288.061L327.917 291.069C328.434 290.035 329.015 288.715 329.907 288.265C331.1 287.662 332.905 287.8 334.264 287.69C337.913 287.393 341.561 287.096 345.21 286.8C346.556 286.69 347.654 285.565 347.588 284.184C347.526 282.866 346.324 281.695 344.972 281.805Z" fill={store.toggle ? "#E5E5E5" : "#424040"}/>
            <path id="Vector_8" d="M355.631 294.071L358.343 304.308C358.56 305.129 358.778 305.951 358.995 306.772C359.174 307.45 359.461 308.24 359.352 308.959C359.199 309.971 358.073 310.999 357.338 311.761L360.87 311.593C358.061 309.623 355.252 307.652 352.443 305.682C351.339 304.908 349.9 304.763 348.911 305.85C348.092 306.752 347.968 308.602 349.08 309.382C351.888 311.352 354.697 313.322 357.506 315.292C358.639 316.087 360.002 316.198 361.038 315.124C362.355 313.759 363.63 312.258 364.129 310.384C364.678 308.32 364.025 306.261 363.497 304.268C362.459 300.35 361.421 296.432 360.384 292.514C360.038 291.208 358.459 290.514 357.229 290.916C355.882 291.356 355.284 292.761 355.631 294.071Z" fill={store.toggle ? "#E5E5E5" : "#424040"}/>
            <path id="Vector_9" d="M337.699 306.089C334.64 306.667 331.658 307.675 329.955 310.481C329.139 311.824 329.078 313.39 328.938 314.907C328.793 316.479 328.649 318.051 328.504 319.623C328.419 320.544 328.537 321.363 329.262 322.022C329.912 322.613 330.884 322.841 331.722 322.548C331.922 322.479 332.123 322.415 332.329 322.365C332.977 322.205 331.954 322.38 332.474 322.336C332.842 322.305 333.207 322.261 333.575 322.242C334.372 322.2 335.173 322.203 335.967 322.116C337.937 321.901 339.898 321.201 341.165 319.593C342.397 318.029 342.963 316.179 343.011 314.202C343.061 312.205 342.441 310.218 341.838 308.336C341.439 307.091 339.941 306.264 338.683 306.738C337.409 307.218 336.658 308.558 337.085 309.893C337.336 310.675 337.586 311.458 337.781 312.257C337.831 312.464 337.874 312.673 337.92 312.882C337.987 313.182 337.88 312.468 337.925 312.956C337.965 313.381 338.018 313.799 338.019 314.227C338.02 314.4 337.988 314.602 338.001 314.775L338.027 314.441C338.013 314.553 337.997 314.664 337.978 314.775C337.925 315.083 337.836 315.375 337.756 315.676C337.679 315.968 337.978 315.21 337.772 315.617C337.697 315.766 337.633 315.919 337.552 316.066C337.513 316.138 337.471 316.21 337.427 316.28C337.328 316.438 337.374 316.377 337.564 316.099C337.453 316.196 337.353 316.369 337.252 316.48L337.139 316.598C336.945 316.782 336.985 316.754 337.26 316.513C337.264 316.565 336.962 316.73 336.924 316.754C336.851 316.802 336.775 316.848 336.698 316.89C336.99 316.76 337.052 316.731 336.881 316.805C336.743 316.856 336.608 316.915 336.467 316.961C336.404 316.981 336.022 317.144 335.954 317.1C336.293 317.044 336.367 317.031 336.175 317.062C336.087 317.077 335.998 317.09 335.908 317.1C335.547 317.147 335.182 317.171 334.818 317.189C333.25 317.266 331.668 317.272 330.165 317.796L333.383 320.721C333.511 319.332 333.639 317.943 333.767 316.554C333.83 315.865 333.888 315.175 333.958 314.486C333.99 314.173 334.026 313.86 334.089 313.551C334.104 313.477 334.216 312.9 334.138 313.271C334.072 313.584 334.189 313.161 334.225 313.089C334.275 312.989 334.333 312.894 334.387 312.796C334.641 312.337 334.152 313.047 334.358 312.84C334.473 312.725 334.839 312.431 334.877 312.284C334.623 312.492 334.569 312.538 334.713 312.423C334.757 312.387 334.802 312.352 334.848 312.319C334.962 312.233 335.078 312.151 335.198 312.074C335.293 312.012 335.39 311.953 335.489 311.896C335.512 311.883 336 311.627 335.664 311.793C335.319 311.963 335.841 311.723 335.913 311.695C336.07 311.632 336.229 311.576 336.389 311.522C336.677 311.425 336.97 311.34 337.264 311.264C337.922 311.093 338.59 310.968 339.256 310.842C339.826 310.734 340.439 310.11 340.694 309.623C340.982 309.073 341.077 308.278 340.854 307.687C340.63 307.092 340.228 306.527 339.635 306.249C338.984 305.943 338.399 305.956 337.699 306.089Z" fill={store.toggle ? "#E5E5E5" : "#424040"}/>
            </g>
            <path id="Vector_10" d="M361.283 275.798C361.578 275.967 361.893 276.051 362.226 276.05C362.561 276.109 362.892 276.078 363.219 275.958C363.541 275.866 363.817 275.703 364.047 275.471C364.311 275.282 364.514 275.038 364.657 274.74L364.88 274.131C364.978 273.683 364.957 273.24 364.817 272.804L364.537 272.219C364.297 271.854 363.984 271.57 363.599 271.366C363.303 271.197 362.989 271.113 362.656 271.114C362.32 271.055 361.989 271.086 361.662 271.206C361.341 271.298 361.065 271.461 360.834 271.693C360.571 271.882 360.368 272.126 360.225 272.424L360.001 273.033C359.903 273.481 359.924 273.924 360.064 274.36L360.345 274.945C360.584 275.31 360.897 275.594 361.283 275.798Z" fill={store.toggle ? "#E5E5E5" : "#424040"}/>
            </g>
            <g id="icon-4" class="icon" clip-path="url(#clip2_3_33)">
            <path id="Vector_11" d="M374.083 148.802C369.361 151.422 364.289 153.148 358.847 152.881L360.278 156.371C363.461 153.484 365.75 150.148 367.218 146.086C367.612 144.994 366.765 143.919 365.804 143.572C360.35 141.6 357.176 135.016 358.18 129.392C359.343 122.881 364.622 117.736 370.791 115.897C377.736 113.827 385.403 115.633 390.357 121.052C394.879 125.998 396.291 133.202 393.637 139.436C392.135 142.963 389.469 145.773 386.055 147.445C382.731 149.074 379.216 149.193 375.642 148.596C374.565 148.415 373.464 148.88 373.153 150.023C372.887 151.001 373.482 152.357 374.567 152.538C376.447 152.853 378.284 153.16 380.2 153.052C382.336 152.932 384.461 152.496 386.452 151.699C390.382 150.128 393.691 147.414 395.932 143.78C400.312 136.677 399.961 127.346 395.141 120.563C389.925 113.225 381.161 109.875 372.392 111.335C364.441 112.659 357.219 118.441 354.769 126.296C352.153 134.684 356.391 144.5 364.728 147.514L363.315 145C362.088 148.396 360.065 151.078 357.417 153.48C356.039 154.73 357.197 156.889 358.847 156.97C364.982 157.271 370.807 155.283 376.126 152.332C378.409 151.065 376.37 147.533 374.083 148.802Z" fill={store.toggle ? "#E5E5E5" : "#424040"}/>
            </g>
            <g id="icon-3" class="icon" clip-path="url(#clip3_3_33)">
            <path id="Vector_12" d="M188.523 7.28616C185.539 10.493 182.555 13.6997 179.57 16.9065C178.478 18.0807 179.056 19.6817 180.449 20.2277C184.128 21.6697 187.455 23.9198 190.235 26.7139C192.043 28.5312 194.859 25.7213 193.051 23.9037C189.763 20.5993 185.843 18.0946 181.507 16.3955L182.386 19.7167C185.37 16.5099 188.354 13.3031 191.339 10.0963C193.081 8.22416 190.271 5.40733 188.523 7.28616Z" fill={store.toggle ? "#E5E5E5" : "#424040"}/>
            <path id="Vector_13" d="M212.661 10.0963C215.646 13.3031 218.63 16.5099 221.614 19.7167C221.907 18.6096 222.2 17.5026 222.493 16.3955C218.157 18.0946 214.237 20.5993 210.949 23.9037C209.142 25.7206 211.956 28.532 213.765 26.7138C216.545 23.9197 219.872 21.6698 223.551 20.2277C224.944 19.6817 225.522 18.0807 224.43 16.9065C221.445 13.6997 218.461 10.4929 215.477 7.28615C213.729 5.40814 210.919 8.22335 212.661 10.0963Z" fill={store.toggle ? "#E5E5E5" : "#424040"}/>
            <path id="Vector_14" d="M198.663 32.5379C202.577 22.5315 206.492 12.525 210.406 2.51862C210.797 1.51866 209.976 0.33768 209.016 0.0742904C207.888 -0.234937 206.959 0.458525 206.567 1.46214C202.652 11.4686 198.738 21.475 194.823 31.4814C194.432 32.4813 195.253 33.6623 196.214 33.9257C197.341 34.2349 198.27 33.5415 198.663 32.5379Z" fill={store.toggle ? "#E5E5E5" : "#424040"}/>
            </g>
            <g id="icon-2" class="icon" clip-path="url(#clip4_3_33)">
            <path id="Vector_15" d="M52.9508 262.016C43.9742 257.54 32.7124 259.086 25.2705 265.79C17.919 272.413 15.2343 283.975 19.0814 293.114C22.9893 302.398 32.5707 308.853 42.7171 308.427C52.7445 308.006 61.8989 301.205 65.0836 291.702C66.9486 286.137 66.7906 279.782 64.3957 274.394C61.902 268.784 57.3969 264.183 51.7256 261.77C49.0632 260.638 47.0267 264.67 49.7076 265.81C58.1216 269.39 63.1186 278.296 61.5441 287.348C60.115 295.565 53.5324 302.017 45.363 303.591C37.2292 305.159 28.9506 301.085 24.6435 294.125C20.2979 287.103 21.1921 277.612 26.3397 271.233C32.1399 264.046 42.7127 261.957 50.9328 266.056C53.5336 267.354 55.556 263.316 52.9508 262.016Z" fill={store.toggle ? "#E5E5E5" : "#424040"}/>
            <path id="Vector_16" d="M27.7599 286.017C29.083 290.108 32.0429 293.531 35.8248 295.555C39.7921 297.678 44.4429 297.939 48.6703 296.461C51.4157 295.502 49.9898 291.216 47.2399 292.177C44.073 293.284 40.7867 293.09 37.8428 291.515C35.1135 290.054 33.0037 287.554 32.0441 284.587C31.1481 281.817 26.8642 283.248 27.7599 286.017Z" fill={store.toggle ? "#E5E5E5" : "#424040"}/>
            <path id="Vector_17" d="M39.4919 271.529C39.0272 271.428 38.5875 271.478 38.1376 271.613C37.9281 271.676 37.7201 271.778 37.5397 271.903C37.4426 271.97 37.3762 272.036 37.2742 272.124C37.2015 272.186 37.0784 272.277 37.0004 272.363C36.842 272.538 36.6995 272.739 36.5983 272.95C36.588 272.972 36.5793 272.993 36.5698 273.015C36.5048 273.167 36.394 273.462 36.3638 273.622C36.3242 273.833 36.3106 274.087 36.3155 274.3C36.3209 274.537 36.3763 274.776 36.4439 275.001C36.5248 275.271 36.6503 275.541 36.8264 275.762C36.9642 275.935 37.1084 276.133 37.2787 276.276C37.3694 276.353 37.4873 276.423 37.5764 276.483C37.6734 276.549 37.7891 276.64 37.9017 276.699C38.1758 276.843 38.486 276.948 38.7938 276.991C39.0641 277.028 39.4173 277.063 39.7104 277.026C40.2817 276.955 40.8905 276.799 41.3526 276.435C41.7637 276.112 42.0507 275.841 42.2861 275.356C42.3325 275.261 42.3863 275.071 42.4 275.031C42.4317 274.938 42.4891 274.798 42.5156 274.684C42.5698 274.45 42.5818 274.194 42.5665 273.958C42.5647 273.93 42.5611 273.904 42.5577 273.877C42.535 273.693 42.4876 273.448 42.4375 273.27C42.3755 273.049 42.2391 272.815 42.1461 272.633C42.1238 272.589 42.1021 272.547 42.0734 272.507C42.0057 272.413 41.915 272.318 41.8449 272.236C41.7668 272.145 41.6832 272.033 41.5907 271.947C41.1376 271.525 40.4949 271.236 39.8902 271.127C39.8325 271.116 39.7746 271.11 39.7162 271.105C39.4805 271.083 39.238 271.058 39.0006 271.064C38.9498 271.065 38.8991 271.069 38.8488 271.077C38.6122 271.111 38.3638 271.154 38.1336 271.219C38.0774 271.236 38.0243 271.257 37.971 271.281C37.7658 271.372 37.5452 271.464 37.3557 271.586C37.1046 271.749 36.8587 271.953 36.6737 272.191C36.5506 272.35 36.4111 272.556 36.309 272.728C36.2942 272.753 36.2795 272.777 36.2666 272.804C36.1657 273.009 36.0923 273.258 36.0309 273.477C35.9904 273.622 35.9936 273.757 35.9836 273.913C35.9741 274.062 35.9537 274.207 35.9693 274.355C36.0168 274.807 36.0916 275.027 36.2707 275.398C36.4665 275.804 36.5904 275.968 36.9234 276.328C37.0589 276.475 37.2082 276.567 37.3768 276.681C37.57 276.813 37.731 276.93 37.9469 277.009C38.2363 277.115 38.5322 277.233 38.8391 277.281C39.1573 277.331 39.4839 277.34 39.8048 277.354C40.0349 277.364 40.2682 277.369 40.4966 277.334C40.7688 277.293 41.0537 277.252 41.3165 277.164C41.45 277.119 41.5771 277.048 41.702 276.988C41.8258 276.928 41.9749 276.87 42.0913 276.786C42.5144 276.478 42.7947 276.167 43.0555 275.713C43.2061 275.451 43.3129 275.148 43.3454 274.847C43.4025 274.318 43.3935 273.946 43.2381 273.426C43.1531 273.141 43.0165 272.859 42.8437 272.617C42.6769 272.384 42.4842 272.132 42.2512 271.953C42.0513 271.8 41.8334 271.647 41.6133 271.523C41.5463 271.486 41.4762 271.454 41.4043 271.427C41.0889 271.308 40.7656 271.185 40.4319 271.125C40.2691 271.096 40.1043 271.079 39.9397 271.062C39.6456 270.994 39.3564 271 39.0721 271.081C38.781 271.113 38.5131 271.216 38.2686 271.388C38.0051 271.546 37.8002 271.756 37.6537 272.019C37.4594 272.257 37.3374 272.532 37.2874 272.842C37.2015 273.41 37.2689 274.033 37.6129 274.513L37.9938 274.958C38.3039 275.233 38.6619 275.412 39.068 275.495C39.3448 275.522 39.6205 275.554 39.8869 275.637L39.3138 275.441C39.4447 275.486 39.5666 275.543 39.6832 275.618L39.1821 275.277C39.261 275.333 39.3291 275.395 39.3925 275.467L39.0116 275.023C39.0634 275.087 39.1074 275.154 39.1458 275.227L38.8946 274.707C38.9292 274.78 38.9552 274.853 38.9731 274.932L38.8614 274.366C38.8727 274.431 38.8775 274.493 38.8751 274.559L38.9124 273.975C38.9076 274.027 38.8986 274.076 38.8845 274.126L39.0805 273.553C39.0584 273.616 39.0302 273.672 38.9934 273.727L39.3338 273.226C39.3033 273.267 39.2708 273.303 39.2339 273.338L39.6786 272.957C39.6206 273.006 39.5593 273.046 39.4914 273.08L40.0115 272.829C39.9153 272.873 39.8164 272.903 39.713 272.925L40.2797 272.813C39.9918 272.867 39.6966 272.859 39.4055 272.841L39.9898 272.879C39.7861 272.864 39.5867 272.836 39.3917 272.773L39.9649 272.969C39.8514 272.928 39.7454 272.879 39.6453 272.811L40.1464 273.152C40.0715 273.098 40.0051 273.038 39.9435 272.969L40.3244 273.414C40.2661 273.343 40.218 273.27 40.1781 273.188L40.4293 273.708C40.404 273.65 40.385 273.592 40.3713 273.529L40.483 274.096C40.4725 274.033 40.4691 273.972 40.4726 273.908L40.4352 274.493C40.4416 274.436 40.4532 274.383 40.4702 274.329L40.2742 274.902C40.3004 274.833 40.3329 274.771 40.3741 274.711L40.0337 275.212C40.0784 275.153 40.1269 275.101 40.1824 275.052L39.7377 275.433C39.7958 275.387 39.8557 275.348 39.9215 275.314L39.4013 275.565C39.4814 275.528 39.5622 275.502 39.6482 275.483L39.0816 275.595C39.1973 275.574 39.3115 275.568 39.4289 275.574L38.8445 275.537C38.9837 275.549 39.1181 275.576 39.2511 275.619L38.678 275.423C38.7749 275.457 38.8649 275.499 38.9524 275.554L38.4513 275.213C38.519 275.26 38.5791 275.311 38.6343 275.373L38.2534 274.928C38.2976 274.983 38.3334 275.039 38.3641 275.103L38.1129 274.583C38.1343 274.634 38.1502 274.685 38.1618 274.74L38.0501 274.173C38.056 274.215 38.0588 274.253 38.0589 274.295L38.0962 273.711C38.0922 273.767 38.0823 273.818 38.0651 273.872L38.2612 273.299C38.245 273.339 38.2275 273.374 38.2054 273.41L38.5458 272.91C38.5133 272.956 38.4782 272.995 38.4372 273.034L38.8819 272.653C38.8264 272.699 38.7686 272.737 38.7048 272.771L39.2249 272.52C39.1306 272.565 39.0352 272.596 38.9332 272.617L39.4998 272.506C39.3765 272.527 39.2541 272.533 39.1291 272.526L39.7135 272.563C39.6328 272.555 39.556 272.541 39.4783 272.518L40.0515 272.714C39.9777 272.688 39.9103 272.656 39.8449 272.613L40.3459 272.954C40.3026 272.921 40.2643 272.887 40.2274 272.847L40.6083 273.292C40.574 273.251 40.5452 273.208 40.5192 273.161L40.7703 273.681C40.7477 273.633 40.7313 273.586 40.7194 273.534L40.8311 274.1C40.8252 274.06 40.8228 274.024 40.8234 273.984L40.786 274.568C40.7899 274.53 40.7959 274.497 40.8066 274.46L40.6106 275.034C40.6239 274.999 40.6385 274.97 40.6573 274.938L40.3169 275.439C40.3451 275.4 40.3753 275.366 40.4119 275.334L39.9672 275.715C39.9963 275.694 40.0239 275.676 40.0561 275.66L39.536 275.911C39.5692 275.897 39.5992 275.887 39.6343 275.88L39.0676 275.992C39.0902 275.988 39.113 275.987 39.1359 275.988L38.5515 275.95C38.5748 275.951 38.5977 275.955 38.6201 275.961C38.9143 276.03 39.2035 276.024 39.4878 275.943C39.7789 275.91 40.0467 275.808 40.2913 275.636C40.5547 275.478 40.7597 275.268 40.9062 275.005C41.1004 274.766 41.2225 274.492 41.2724 274.181C41.3584 273.613 41.291 272.99 40.9469 272.51C40.5889 272.01 40.102 271.661 39.4919 271.529Z" fill={store.toggle ? "#E5E5E5" : "#424040"}/>
            <path id="Vector_18" d="M50.8821 277.218C50.4175 277.118 49.9778 277.167 49.5279 277.303C49.3184 277.366 49.1104 277.467 48.93 277.592C48.8329 277.66 48.7665 277.726 48.6645 277.813C48.5918 277.875 48.4687 277.966 48.3907 278.052C48.2323 278.227 48.0897 278.429 47.9886 278.64C47.9783 278.661 47.9696 278.682 47.9601 278.704C47.8951 278.856 47.7843 279.151 47.7541 279.311C47.7145 279.522 47.7009 279.776 47.7058 279.989C47.7112 280.226 47.7666 280.465 47.8342 280.69C47.9151 280.96 48.0405 281.23 48.2167 281.451C48.3545 281.624 48.4987 281.822 48.669 281.966C48.7596 282.042 48.8776 282.112 48.9667 282.173C49.0636 282.238 49.1794 282.329 49.292 282.388C49.5661 282.533 49.8763 282.637 50.1841 282.68C50.4544 282.718 50.8076 282.752 51.1007 282.716C51.672 282.644 52.2808 282.488 52.7429 282.124C53.154 281.801 53.441 281.53 53.6764 281.046C53.7228 280.95 53.7766 280.761 53.7903 280.72C53.822 280.628 53.8794 280.488 53.9059 280.373C53.9601 280.139 53.972 279.883 53.9568 279.647C53.955 279.619 53.9514 279.593 53.948 279.566C53.9253 279.382 53.8779 279.137 53.8278 278.959C53.7658 278.739 53.6293 278.504 53.5363 278.322C53.514 278.279 53.4924 278.237 53.4637 278.197C53.396 278.102 53.3053 278.007 53.2352 277.925C53.1571 277.834 53.0734 277.722 52.981 277.636C52.5279 277.214 51.8852 276.926 51.2805 276.816C51.2228 276.805 51.1649 276.799 51.1065 276.794C50.8708 276.773 50.6283 276.748 50.3909 276.753C50.3401 276.754 50.2894 276.759 50.2391 276.766C50.0025 276.8 49.7541 276.843 49.5239 276.909C49.4677 276.925 49.4146 276.947 49.3613 276.97C49.1561 277.062 48.9355 277.153 48.7459 277.276C48.4949 277.438 48.249 277.642 48.064 277.881C47.9409 278.039 47.8014 278.245 47.6993 278.418C47.6844 278.443 47.6698 278.467 47.6569 278.493C47.5559 278.699 47.4825 278.947 47.4212 279.166C47.3807 279.311 47.3839 279.447 47.3739 279.602C47.3644 279.751 47.344 279.897 47.3596 280.045C47.4071 280.496 47.4819 280.717 47.6609 281.087C47.8568 281.493 47.9807 281.658 48.3137 282.018C48.4492 282.164 48.5985 282.256 48.7671 282.371C48.9603 282.502 49.1213 282.619 49.3372 282.698C49.6266 282.804 49.9224 282.923 50.2294 282.971C50.5476 283.021 50.8742 283.029 51.1951 283.043C51.4252 283.054 51.6585 283.058 51.8869 283.024C52.1591 282.983 52.444 282.941 52.7068 282.853C52.8403 282.808 52.9674 282.737 53.0922 282.677C53.2161 282.617 53.3652 282.56 53.4816 282.475C53.9047 282.167 54.185 281.856 54.4458 281.403C54.5964 281.141 54.7032 280.837 54.7357 280.536C54.7928 280.007 54.7838 279.635 54.6284 279.115C54.5433 278.831 54.4068 278.548 54.2339 278.307C54.0672 278.073 53.8745 277.821 53.6414 277.643C53.4416 277.489 53.2237 277.336 53.0036 277.213C52.9366 277.175 52.8665 277.143 52.7946 277.116C52.4792 276.997 52.1559 276.874 51.8222 276.814C51.6593 276.785 51.4946 276.768 51.33 276.752C51.0359 276.683 50.7467 276.689 50.4623 276.77C50.1712 276.803 49.9034 276.905 49.6589 277.077C49.3954 277.235 49.1905 277.445 49.044 277.708C48.8497 277.947 48.7276 278.221 48.6777 278.532C48.5918 279.1 48.6592 279.722 49.0032 280.203L49.3841 280.647C49.6941 280.923 50.0522 281.101 50.4583 281.184C50.7351 281.211 51.0108 281.243 51.2772 281.327L50.7041 281.13C50.835 281.175 50.9569 281.232 51.0735 281.307L50.5724 280.966C50.6513 281.022 50.7194 281.084 50.7828 281.156L50.4019 280.712C50.4537 280.776 50.4977 280.843 50.536 280.916L50.2849 280.396C50.3195 280.469 50.3455 280.543 50.3634 280.622L50.2516 280.055C50.263 280.12 50.2678 280.182 50.2654 280.248L50.3027 279.664C50.2979 279.716 50.2889 279.765 50.2747 279.815L50.4708 279.242C50.4487 279.305 50.4205 279.361 50.3837 279.416L50.7241 278.915C50.6935 278.956 50.6611 278.992 50.6242 279.027L51.0689 278.646C51.0109 278.696 50.9496 278.735 50.8817 278.77L51.4018 278.519C51.3056 278.563 51.2067 278.592 51.1033 278.614L51.67 278.503C51.3821 278.556 51.0869 278.548 50.7958 278.531L51.3801 278.568C51.1764 278.554 50.9769 278.525 50.782 278.462L51.3551 278.658C51.2416 278.618 51.1356 278.568 51.0356 278.501L51.5367 278.841C51.4618 278.787 51.3954 278.727 51.3338 278.658L51.7147 279.103C51.6564 279.033 51.6083 278.96 51.5684 278.878L51.8196 279.398C51.7943 279.339 51.7752 279.281 51.7616 279.219L51.8733 279.785C51.8628 279.722 51.8594 279.662 51.8629 279.598L51.8255 280.182C51.8319 280.125 51.8435 280.072 51.8605 280.018L51.6645 280.591C51.6907 280.522 51.7232 280.461 51.7644 280.4L51.424 280.901C51.4687 280.842 51.5171 280.79 51.5727 280.742L51.128 281.122C51.1861 281.076 51.246 281.037 51.3118 281.003L50.7916 281.254C50.8717 281.218 50.9525 281.191 51.0385 281.172L50.4718 281.284C50.5875 281.263 50.7018 281.257 50.8191 281.264L50.2348 281.226C50.374 281.238 50.5084 281.265 50.6414 281.308L50.0683 281.112C50.1651 281.147 50.2552 281.189 50.3427 281.243L49.8416 280.903C49.9093 280.95 49.9694 281.001 50.0246 281.062L49.6437 280.617C49.6879 280.672 49.7237 280.729 49.7544 280.792L49.5032 280.272C49.5246 280.324 49.5405 280.374 49.5521 280.429L49.4403 279.862C49.4463 279.904 49.4491 279.942 49.4492 279.984L49.4865 279.4C49.4825 279.456 49.4725 279.508 49.4554 279.562L49.6515 278.988C49.6352 279.028 49.6178 279.063 49.5957 279.1L49.9361 278.599C49.9036 278.645 49.8685 278.685 49.8275 278.723L50.2722 278.342C50.2167 278.389 50.1589 278.426 50.0951 278.46L50.6152 278.209C50.5209 278.254 50.4255 278.285 50.3235 278.306L50.8901 278.195C50.7668 278.217 50.6443 278.223 50.5194 278.215L51.1037 278.252C51.0231 278.244 50.9463 278.23 50.8686 278.207L51.4418 278.403C51.368 278.377 51.3005 278.345 51.2351 278.303L51.7362 278.643C51.6929 278.611 51.6545 278.576 51.6177 278.537L51.9986 278.981C51.9643 278.94 51.9354 278.898 51.9095 278.85L52.1606 279.37C52.138 279.322 52.1215 279.275 52.1097 279.223L52.2214 279.79C52.2155 279.75 52.213 279.714 52.2137 279.673L52.1763 280.257C52.1802 280.219 52.1862 280.187 52.1969 280.15L52.0009 280.723C52.0142 280.689 52.0287 280.659 52.0476 280.628L51.7072 281.129C51.7354 281.089 51.7656 281.056 51.8021 281.024L51.3574 281.404C51.3865 281.383 51.4141 281.365 51.4464 281.349L50.9262 281.6C50.9595 281.586 50.9894 281.577 51.0246 281.569L50.4579 281.681C50.4805 281.677 50.5033 281.676 50.5262 281.677L49.9418 281.64C49.9651 281.641 49.988 281.644 50.0104 281.651C50.3045 281.719 50.5938 281.713 50.8781 281.632C51.1692 281.6 51.437 281.497 51.6815 281.325C51.945 281.167 52.15 280.957 52.2964 280.694C52.4907 280.456 52.6128 280.181 52.6627 279.87C52.7486 279.303 52.6812 278.68 52.3372 278.199C51.9792 277.7 51.4923 277.35 50.8821 277.218Z" fill={store.toggle ? "#E5E5E5" : "#424040"}/>
            </g>
            {/* style={{ transform: `translate(${Math.floor(store.mouse.x * 0.01)}px, ${Math.floor(store.mouse.y * 0.05)}px)` }} style={{ transform: `translate(${Math.floor(store.mouse.x * 0.01)}px, ${Math.floor(store.mouse.y * 0.05)}px)` }} */}
            <g id="icon-1" class="icon" clip-path="url(#clip5_3_33)">
            <path id="Vector_19" d="M19.6734 88.3511C17.7513 93.239 15.8575 98.2901 16.0179 103.623C16.1641 108.484 18.0603 113.093 21.961 116.127C23.9802 117.697 26.3635 118.797 28.7201 119.757C31.0992 120.726 33.584 121.587 36.1484 121.885C40.943 122.441 45.5792 120.561 49.016 117.248C53.3365 113.083 55.5012 107.48 57.4787 101.94C57.9721 100.558 57.0999 98.5333 55.4049 98.5449C43.9534 98.6233 32.9576 94.2456 24.682 86.3317C23.7058 85.3981 21.9182 85.8539 21.1827 86.8425C20.2936 88.0376 20.7136 89.4048 21.6935 90.3419C30.5136 98.7764 42.6911 103.604 54.8934 103.52L52.8196 100.125C50.4407 106.79 46.8283 116.782 38.2413 117.004C36.2136 117.056 34.2245 116.484 32.3392 115.798C30.376 115.084 28.3626 114.301 26.5683 113.223C23.1975 111.197 21.4102 108.203 21.0384 104.31C20.5709 99.4149 22.5807 94.6207 24.3325 90.1659C25.51 87.1714 20.8526 85.3524 19.6734 88.3511Z" fill={store.toggle ? "#E5E5E5" : "#424040"}/>
            <path id="Vector_20" d="M54.1387 109.88C53.637 110.04 54.5003 109.839 54.6008 109.82C54.8896 109.799 54.8941 109.794 54.6144 109.806C54.7249 109.807 54.8353 109.813 54.9454 109.823C55.0693 109.832 55.8362 109.974 55.2726 109.83C55.522 109.894 55.7654 109.983 56.0012 110.086C56.103 110.129 56.2029 110.176 56.3008 110.227C56.039 110.083 56.0297 110.087 56.2729 110.239C56.3645 110.317 56.9944 110.905 56.6042 110.475C56.746 110.631 56.8695 110.803 57.0098 110.96C57.1675 111.195 57.1727 111.189 57.0257 110.942C57.0954 111.064 57.1602 111.189 57.2201 111.316C57.3098 111.507 57.3883 111.703 57.4545 111.903C57.2773 111.367 57.4821 112.203 57.4994 112.317C57.5915 112.928 57.568 111.933 57.5022 112.542C57.4897 112.658 57.3373 113.556 57.4859 112.961C57.4331 113.172 57.3621 113.38 57.284 113.584C57.2395 113.699 56.8174 114.49 57.127 113.983C57.0118 114.172 56.8911 114.357 56.76 114.535C56.6993 114.617 56.1011 115.296 56.4872 114.907C56.1263 115.271 55.7124 115.59 55.2791 115.863C55.7253 115.582 55.0629 115.961 54.9654 116.008C54.7351 116.118 54.5004 116.218 54.2616 116.308C54.1248 116.359 53.987 116.408 53.848 116.453C54.1117 116.38 54.1051 116.381 53.8283 116.455C53.6133 116.505 53.3998 116.558 53.183 116.599C52.6743 116.697 52.1632 116.748 51.6479 116.792C51.3583 116.805 51.3534 116.808 51.6333 116.8C51.4864 116.802 51.3395 116.802 51.1926 116.799C50.9289 116.795 50.6653 116.784 50.4021 116.768C49.7884 116.729 49.177 116.657 48.5692 116.564C47.2622 116.365 45.9733 116.065 44.6863 115.766C43.4079 115.47 42.0151 116.767 41.943 117.998C41.8557 119.49 42.8048 120.424 44.1749 120.742C48.924 121.843 53.9367 122.577 58.2928 119.839C62.4492 117.226 64.0884 111.059 60.4489 107.293C58.2207 104.987 55.15 104.342 52.1275 105.302C50.8757 105.7 50.2918 107.473 50.8443 108.597C51.4939 109.919 52.8032 110.305 54.1387 109.88Z" fill={store.toggle ? "#E5E5E5" : "#424040"}/>
            <path id="Vector_21" d="M24.1987 90.073C28.8546 86.9061 35.6265 90.3122 40.1554 92.0794C45.2922 94.0838 50.6542 96.8759 52.6773 102.356C53.7939 105.381 58.3664 103.355 57.255 100.345C54.7138 93.4615 47.9989 89.7373 41.5219 87.247C35.0159 84.7455 27.4913 81.8016 21.0917 86.1545C19.9748 86.9142 19.8909 88.6639 20.686 89.6673C21.5774 90.7922 23.0792 90.8345 24.1987 90.073Z" fill={store.toggle ? "#E5E5E5" : "#424040"}/>
            <path id="Vector_22" d="M18.3021 104.573C15.0891 102.854 11.5472 101.389 7.91285 102.695C4.77739 103.821 2.60266 106.949 3.35269 110.323C3.98291 113.158 6.26662 115.277 8.56524 116.868C11.7061 119.041 15.034 120.967 18.4257 122.719C25.0355 126.134 32.0407 128.674 39.2714 130.409C42.7265 131.237 46.3123 132.024 49.8655 132.268C52.918 132.478 56.236 132.059 58.4117 129.689C60.9344 126.942 60.4482 122.898 58.3832 120.051C55.8308 116.531 51.2377 115.749 47.2128 115.264C44.0204 114.879 43.4996 119.853 46.7014 120.239C49.1038 120.528 52.2351 120.727 54.0162 122.601C55.0458 123.685 55.7764 125.637 54.3731 126.648C53.0153 127.627 50.7764 127.371 49.1803 127.175C46.3302 126.825 43.4943 126.295 40.697 125.649C34.9737 124.329 29.3765 122.358 24.04 119.911C21.3967 118.699 18.8108 117.364 16.3086 115.882C14.0974 114.572 11.7182 113.245 9.80539 111.51C8.68249 110.491 7.31864 108.76 9.0323 107.669C11.3511 106.193 14.4336 108.134 16.4873 109.232C17.6798 109.87 19.2759 108.961 19.7242 107.81C20.2634 106.426 19.4981 105.213 18.3021 104.573Z" fill={store.toggle ? "#E5E5E5" : "#424040"}/>
            </g>
            </g>
            <defs>
            <clipPath id="clip0_3_33">
            <rect width="292" height="292" fill="white" transform="translate(56 45)"/>
            </clipPath>
            <clipPath id="clip1_3_33">
            <rect width="50.234" height="58.6489" fill="white" transform="translate(322 264.389) rotate(-2.7262)"/>
            </clipPath>
            <clipPath id="clip2_3_33">
            <rect width="45" height="46" fill="white" transform="translate(354 111)"/>
            </clipPath>
            <clipPath id="clip3_3_33">
            <rect width="46" height="34" fill="white" transform="translate(179)"/>
            </clipPath>
            <clipPath id="clip4_3_33">
            <rect width="49" height="49" fill="white" transform="translate(30.8954 251) rotate(26.5415)"/>
            </clipPath>
            <clipPath id="clip5_3_33">
            <rect width="59.8147" height="41.9255" fill="white" transform="translate(15.2173 77) rotate(21.2821)"/>
            </clipPath>
            </defs>
          </svg>
        </div>
        <div class="py-36">
          <div class="text-center mb-32">
            <h2 class="text-3xl mb-12" data-aos="fade-up">ABOUT ME</h2>
            <p class="text-xl max-w-4xl mx-auto" data-aos="fade-up" data-aos-duration="1000">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium quas assumenda mollitia iste numquam esse voluptas consectetur, necessitatibus delectus aliquam possimus non soluta dignissimos quaerat deserunt, ipsa quos error eum?</p>
          </div>
          <div class="text-center">
            <h2 class="text-3xl mb-12" data-aos="fade-up" data-aos-duration="1000">Things that i use</h2>
            <div class="max-w-5xl mx-auto flex flex-wrap gap-12 justify-center">
              {
                images.map((img, i) => (
                  <img key={`img-${i}`} src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${img}/${img}-${img == "tailwindcss" ? "plain" : "original"}.svg`} class="w-24" title={img} style={{filter: store.toggle && (img == "nextjs" || img == "express" || img == "github") ? "brightness(0) invert(1)" : ""}} data-aos="fade-up" data-aos-duration="2000"/> 
                ))
              }
            
            </div>
          </div>
        </div>
        <div class="py-36">
          <h2 class="text-3xl text-center mb-32" data-aos="fade-up">SOME OF MY WORKS</h2>
          {
            [1,2,3].map((item, i) => (
              <div class="flex flex-col md:flex-row justify-center max-w-4xl mx-auto my-32" key={`${item}-${i}`} data-aos="fade-up">
                <img src="https://via.placeholder.com/300x250" class="mr-0 md:mr-20 mb-4 md:mb-0"/>
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
            <a href="https://github.com/pengpa0012" target="_blank">
              <button class="btn-black border border-transparent hover:border-white" data-aos="fade-up">View my Github</button>
            </a>
          </div>
        </div>
      </div>
      <footer>
        <div class="py-12">
        <h1 class="text-center mb-4">Made by Godfrey Patricio &copy; 2023</h1>
          <div class="flex justify-center gap-4">
            <i class="fa-brands fa-linkedin cursor-pointer"></i>
            <i class="fa-sharp fa-solid fa-envelope cursor-pointer"></i>
          </div>
        </div>
      </footer>
    </div>
  );
});
  
export const head: DocumentHead = {
  title: "Godfrey Patricio",
};