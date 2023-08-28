import Image from "next/image";
import { Inter } from "next/font/google";

import addUser from './data';

import { collection, getDocs } from "firebase/firestore"; 

import { db } from "./firebase";

// import css from 'styles/global.css'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {

const user = { first: 'John', last: 'Doe', born: 1990 };

addUser(user);




  return (
    <div>
      <div
        className="myBackground  "
        style={{
          backgroundImage: "url('/image.png')",
          backgroundSize: "cover" /* Adjust the background size as needed */,
          backgroundPosition:
            "center center" /* Adjust the position as needed */,
          width: "100%",

          alignItems: "strech",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",

          /* Add more background-related styles here if needed */
        }}
      >
        <div className="w-full text-gray-700 border-t shadow-sm body-font  ">
          <div className="container flex flex-col flex-wrap items-center p-5 mx-auto md:flex-row lg:justify-around ">
            {/* <img src="/path/to/your/logo.png" alt="Logo" class="w-16 h-16 md:w-20 md:h-20 mb-4 object-contain lg:mb-0" /> */}
            <nav className="flex flex-wrap items-center text-base lg:w-2/5 md:m-auto ">
              <a
                href="#_"
                className="mr-5 font-medium hover:text-gray-900"
                target="_blank"
              >
                Home
              </a>
              <a
                href="#_"
                className="mr-5 font-medium hover:text-gray-900"
                target="_blank"
              >
                About
              </a>
              <a
                href="#_"
                className=" mr-5 font-medium hover:text-gray-900"
                target="_blank"
              >
                Contact
              </a>
              <a
                href="#_"
                className="font-medium hover:text-gray-900"
                target="_blank"
              >
                blog
              </a>
            </nav>
            {/* 
        <svg xmlns="http://www.w3.org/2000/svg" class="flex items-center order-first mb-4 lg:order-none lg:w-1/5 title-font lg:items-center lg:justify-center md:mb-0 h-6 w-6 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" target="_blank">
           <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
        </svg>
        */}
            <a
              href="
           "
           className="flex items-center order-first mb-4 font-medium text-gray-900 lg:order-none lg:w-1/5 title-font lg:items-center lg:justify-center md:mb-0"
              target="_blank"
            >
              <img
                src="/swaabhimaan-logo.png"
                alt=""
                style={{ width: "150px", height: "90px" }}
              />
            </a>
            <div className="inline-flex items-center h-full ml-5 lg:w-2/5 lg:justify-end lg:m-auto">
              <a
                href="#_"
                className="px-14 py-4 text-xs font-bold text-white uppercase transition-all duration-150 bg-teal-500  shadow outline-none active:bg-teal-600 hover:shadow-md focus:outline-none ease"
                target="_blank"
              >
                Sign Up
              </a>
            </div>
          </div>

          <hr className="custom-hr"></hr>
        </div>

        <div className=" text-black-100">
          <div className="container flex flex-col justify-center p-6 pl-4 mx-auto sm:py-12 lg:py-24  lg:flex-row lg:justify-evenly">
            <div className="flex flex-col justify-center p-6 pb-0  ml-4 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
              <h1 className="text-5xl font-bold leading-none sm:text-6xl">
                {" "}
                Ac mattis <span className="text-blue-400">senectus</span> erat
                pharetra{" "}
              </h1>
              <p className="mt-6 mb-8 text-lg sm:mb-12">
                {" "}
                Dictum aliquam porta in condimentum ac integer{" "}
                <br className="hidden md:inline lg:hidden" /> turpis pulvinar,
                est scelerisque ligula sem{" "}
              </p>
              <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="px-8 py-3 text-lg font-semibold rounded bg-violet-400 text-gray-900"
                >
                  {" "}
                  Suspendisse{" "}
                </a>
              </div>
            </div>
            <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
              <img
                src="/swaabhiman-headpage-photo.png"
                alt=""
                className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
        <div className="">
          <h1 className="text-5xl font-bold leading-none sm:text-6xl">
            {" "}
            Ac mattis <span className="text-blue-400">senectus</span> erat
            pharetra{" "}
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12">
            {" "}
            Dictum aliquam porta in condimentum ac integer{" "}
            <br className="hidden md:inline lg:hidden" /> turpis pulvinar, est
            scelerisque ligula sem{" "}
          </p>
        </div>

        <div className="-m-1 flex flex-wrap md:-m-2">
          <div className="flex w-1/2 flex-wrap">
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp"
              />
            </div>
            <div class="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp"
              />
            </div>
            <div class="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
              />
            </div>
          </div>
          <div className="flex w-1/2 flex-wrap">
            <div class="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp"
              />
            </div>
            <div class="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp"
              />
            </div>
            <div
              className="w-1/2 p-1 md:p-2 relative"
              style={{
                backgroundImage:
                  "url('https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(77).webp')",
                backgroundSize: "cover",
                backgroundPosition: "center center",
                borderRadius: "4px",
              }}
            >
              <a
                href="#"
                className="absolute bottom-0 left-0 mb-2 ml-2 inline-flex items-center text-white hover:underline"
              >
                See our guideline
                <svg
                  className="w-3 h-3 ml-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div></div>

      <div
        className="myBackground mt-12 "
        style={{
          backgroundImage: "url('/Untitled design.png')",
          backgroundSize: "cover" /* Adjust the background size as needed */,
          backgroundPosition:
            "center center" /* Adjust the position as needed */,
          width: "100%",

          alignItems: "strech",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
        }}
      >
        {" "}
        <section className="">
          <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
            <div className="">
              <h1 className="text-5xl font-bold leading-none sm:text-6xl">
                {" "}
                Ac mattis <span className="text-blue-400">senectus</span> erat
                pharetra{" "}
              </h1>
              <p className="mt-6 mb-8 text-lg sm:mb-12">
                {" "}
                Dictum aliquam porta in condimentum ac integer{" "}
                <br className="hidden md:inline lg:hidden" /> turpis pulvinar,
                est scelerisque ligula sem{" "}
              </p>
            </div>
          </div>

          <div className="py-6 lg:justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:justify-center">
              <div className="mb-4 lg:mb-0 flex justify-center">
                <div className="card p-4 border shadow-md rounded-md">
                  <div className="image mb-2">
                    <span className="text">This is a chair.</span>
                  </div>
                  <span className="title text-lg font-semibold">
                    Cool Chair
                  </span>
                  <span className="price mt-1 block text-gray-600">$100</span>
                </div>
              </div>
              <div className="mb-4 lg:mb-0 flex justify-center">
                <div className="card p-4 border shadow-md rounded-md">
                  <div className="image mb-2">
                    <span className="text">This is a chair.</span>
                  </div>
                  <span className="title text-lg font-semibold">
                    Cool Chair
                  </span>
                  <span className="price mt-1 block text-gray-600">$100</span>
                </div>
              </div>
              <div className="mb-4 lg:mb-0 flex justify-center">
                <div className="card p-4 border shadow-md rounded-md">
                  <div className="image mb-2">
                    <span className="text">This is a chair.</span>
                  </div>
                  <span className="title text-lg font-semibold">
                    Cool Chair
                  </span>
                  <span className="price mt-1 block text-gray-600">$100</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className=" lg:justify-center">
          <div class="flex flex-col justify-center items-center p-12">
            <a
              rel="noopener noreferrer"
              href="#"
              className="px-8 py-3 text-lg font-semibold rounded bg-violet-400 text-gray-900"
            >
              {" "}
              Suspendisse{" "}
            </a>
          </div>
        </div>
      </div>

      {/* divvv */}
      <div>
        <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
          <div className="">
            <h1 className="text-5xl font-bold leading-none sm:text-6xl">
              {" "}
              Ac mattis <span className="text-blue-400">senectus</span> erat
              pharetra{" "}
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12">
              {" "}
              Dictum aliquam porta in condimentum ac integer{" "}
              <br className="hidden md:inline lg:hidden" /> turpis pulvinar, est
              scelerisque ligula sem{" "}
            </p>
          </div>
        </div>
        <div className="  category-card-container pb-20 pl-8 pr-8">
          <a
            href="https://www.google.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="category-card">
              <img
                className="w-10 h-10 rounded"
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4QAxRXhpZgAASUkqAAgAAAABAJiCAgAPAAAAGgAAAAAAAABFbGVuYSBFbGlzc2VldmH/7QBeUGhvdG9zaG9wIDMuMAA4QklNBAQAAAAAAEIcAlAADEVsZW5hdGhld2lzZRwCdAAPRWxlbmEgRWxpc3NlZXZhHAJuABhHZXR0eSBJbWFnZXMvaVN0b2NrcGhvdG//4QTGaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/Pgo8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIj4KCTxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CgkJPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczpJcHRjNHhtcENvcmU9Imh0dHA6Ly9pcHRjLm9yZy9zdGQvSXB0YzR4bXBDb3JlLzEuMC94bWxucy8iICAgeG1sbnM6R2V0dHlJbWFnZXNHSUZUPSJodHRwOi8veG1wLmdldHR5aW1hZ2VzLmNvbS9naWZ0LzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGx1cz0iaHR0cDovL25zLnVzZXBsdXMub3JnL2xkZi94bXAvMS4wLyIgIHhtbG5zOmlwdGNFeHQ9Imh0dHA6Ly9pcHRjLm9yZy9zdGQvSXB0YzR4bXBFeHQvMjAwOC0wMi0yOS8iIHhtbG5zOnhtcFJpZ2h0cz0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3JpZ2h0cy8iIGRjOlJpZ2h0cz0iRWxlbmEgRWxpc3NlZXZhIiBwaG90b3Nob3A6Q3JlZGl0PSJHZXR0eSBJbWFnZXMvaVN0b2NrcGhvdG8iIEdldHR5SW1hZ2VzR0lGVDpBc3NldElEPSIxMTQzMzQ4MzUiIHhtcFJpZ2h0czpXZWJT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"
                alt="Default avatar"
              />

              <h3 className="category-card__title">Title 1</h3>
              <p className="category-card__content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <div className="category-card__date">April 15, 2022</div>
              <div className="category-card__arrow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  height="15"
                  width="15"
                >
                  <path
                    fill="#fff"
                    d="M13.4697 17.9697C13.1768 18.2626 13.1768 18.7374 13.4697 19.0303C13.7626 19.3232 14.2374 19.3232 14.5303 19.0303L20.3232 13.2374C21.0066 12.554 21.0066 11.446 20.3232 10.7626L14.5303 4.96967C14.2374 4.67678 13.7626 4.67678 13.4697 4.96967C13.1768 5.26256 13.1768 5.73744 13.4697 6.03033L18.6893 11.25H4C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H18.6893L13.4697 17.9697Z"
                  ></path>
                </svg>
              </div>
            </div>
          </a>

          <div className="category-card">
            {/* Card 2 content */}
            <img
              className="w-10 h-10 rounded"
              src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4QAxRXhpZgAASUkqAAgAAAABAJiCAgAPAAAAGgAAAAAAAABFbGVuYSBFbGlzc2VldmH/7QBeUGhvdG9zaG9wIDMuMAA4QklNBAQAAAAAAEIcAlAADEVsZW5hdGhld2lzZRwCdAAPRWxlbmEgRWxpc3NlZXZhHAJuABhHZXR0eSBJbWFnZXMvaVN0b2NrcGhvdG//4QTGaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/Pgo8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIj4KCTxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CgkJPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczpJcHRjNHhtcENvcmU9Imh0dHA6Ly9pcHRjLm9yZy9zdGQvSXB0YzR4bXBDb3JlLzEuMC94bWxucy8iICAgeG1sbnM6R2V0dHlJbWFnZXNHSUZUPSJodHRwOi8veG1wLmdldHR5aW1hZ2VzLmNvbS9naWZ0LzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGx1cz0iaHR0cDovL25zLnVzZXBsdXMub3JnL2xkZi94bXAvMS4wLyIgIHhtbG5zOmlwdGNFeHQ9Imh0dHA6Ly9pcHRjLm9yZy9zdGQvSXB0YzR4bXBFeHQvMjAwOC0wMi0yOS8iIHhtbG5zOnhtcFJpZ2h0cz0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3JpZ2h0cy8iIGRjOlJpZ2h0cz0iRWxlbmEgRWxpc3NlZXZhIiBwaG90b3Nob3A6Q3JlZGl0PSJHZXR0eSBJbWFnZXMvaVN0b2NrcGhvdG8iIEdldHR5SW1hZ2VzR0lGVDpBc3NldElEPSIxMTQzMzQ4MzUiIHhtcFJpZ2h0czpXZWJT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"
              alt="Default avatar"
            />

            <h3 className="category-card__title">Title 2</h3>
            <p className="category-card__content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <div className="category-card__date">April 15, 2022</div>
            <div className="category-card__arrow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                height="15"
                width="15"
              >
                <path
                  fill="#fff"
                  d="M13.4697 17.9697C13.1768 18.2626 13.1768 18.7374 13.4697 19.0303C13.7626 19.3232 14.2374 19.3232 14.5303 19.0303L20.3232 13.2374C21.0066 12.554 21.0066 11.446 20.3232 10.7626L14.5303 4.96967C14.2374 4.67678 13.7626 4.67678 13.4697 4.96967C13.1768 5.26256 13.1768 5.73744 13.4697 6.03033L18.6893 11.25H4C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H18.6893L13.4697 17.9697Z"
                ></path>
              </svg>
            </div>
          </div>

          <div className="category-card">
            {/* Card 2 content */}
            <img
              className="w-10 h-10 rounded"
              src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4QAxRXhpZgAASUkqAAgAAAABAJiCAgAPAAAAGgAAAAAAAABFbGVuYSBFbGlzc2VldmH/7QBeUGhvdG9zaG9wIDMuMAA4QklNBAQAAAAAAEIcAlAADEVsZW5hdGhld2lzZRwCdAAPRWxlbmEgRWxpc3NlZXZhHAJuABhHZXR0eSBJbWFnZXMvaVN0b2NrcGhvdG//4QTGaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/Pgo8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIj4KCTxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CgkJPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczpJcHRjNHhtcENvcmU9Imh0dHA6Ly9pcHRjLm9yZy9zdGQvSXB0YzR4bXBDb3JlLzEuMC94bWxucy8iICAgeG1sbnM6R2V0dHlJbWFnZXNHSUZUPSJodHRwOi8veG1wLmdldHR5aW1hZ2VzLmNvbS9naWZ0LzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGx1cz0iaHR0cDovL25zLnVzZXBsdXMub3JnL2xkZi94bXAvMS4wLyIgIHhtbG5zOmlwdGNFeHQ9Imh0dHA6Ly9pcHRjLm9yZy9zdGQvSXB0YzR4bXBFeHQvMjAwOC0wMi0yOS8iIHhtbG5zOnhtcFJpZ2h0cz0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3JpZ2h0cy8iIGRjOlJpZ2h0cz0iRWxlbmEgRWxpc3NlZXZhIiBwaG90b3Nob3A6Q3JlZGl0PSJHZXR0eSBJbWFnZXMvaVN0b2NrcGhvdG8iIEdldHR5SW1hZ2VzR0lGVDpBc3NldElEPSIxMTQzMzQ4MzUiIHhtcFJpZ2h0czpXZWJT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"
              alt="Default avatar"
            />

            <h3 className="category-card__title">Title 3</h3>
            <p className="category-card__content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <div className="category-card__date">April 15, 2022</div>
            <div className="category-card__arrow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                height="15"
                width="15"
              >
                <path
                  fill="#fff"
                  d="M13.4697 17.9697C13.1768 18.2626 13.1768 18.7374 13.4697 19.0303C13.7626 19.3232 14.2374 19.3232 14.5303 19.0303L20.3232 13.2374C21.0066 12.554 21.0066 11.446 20.3232 10.7626L14.5303 4.96967C14.2374 4.67678 13.7626 4.67678 13.4697 4.96967C13.1768 5.26256 13.1768 5.73744 13.4697 6.03033L18.6893 11.25H4C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H18.6893L13.4697 17.9697Z"
                ></path>
              </svg>
            </div>
          </div>

          <div className="category-card">
            {/* Card 2 content */}
            <img
              className="w-10 h-10 rounded"
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/WLA/2023/MSOREFRESHDESKTOP/D87165616_IN_WLA_BAU_MSO_REFRESH-desktop-version_PC_QuadCard_372X232_3X7._SY232_CB602731451_.jpg"


              alt="Default avatar"
            />

            <h3 className="category-card__title">Title 4</h3>
            <p className="category-card__content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <div className="category-card__date">April 15, 2022</div>
            <div className="category-card__arrow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                height="15"
                width="15"
              >
                <path
                  fill="#fff"
                  d="M13.4697 17.9697C13.1768 18.2626 13.1768 18.7374 13.4697 19.0303C13.7626 19.3232 14.2374 19.3232 14.5303 19.0303L20.3232 13.2374C21.0066 12.554 21.0066 11.446 20.3232 10.7626L14.5303 4.96967C14.2374 4.67678 13.7626 4.67678 13.4697 4.96967C13.1768 5.26256 13.1768 5.73744 13.4697 6.03033L18.6893 11.25H4C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H18.6893L13.4697 17.9697Z"
                ></path>
              </svg>
            </div>
          </div>
          <div className="category-card">
            {/* Card 2 content */}
            <img
              className="w-10 h-10 rounded"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR3S1gRcz_ldMF8zCXnqIkJ6BjmwHIUzGwa_cd5NrteA&s"
              alt="Default avatar"
            />

            <h3 className="category-card__title">Title 5</h3>
            <p className="category-card__content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <div className="category-card__date">April 15, 2022</div>
            <div className="category-card__arrow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                height="15"
                width="15"
              >
                <path
                  fill="#fff"
                  d="M13.4697 17.9697C13.1768 18.2626 13.1768 18.7374 13.4697 19.0303C13.7626 19.3232 14.2374 19.3232 14.5303 19.0303L20.3232 13.2374C21.0066 12.554 21.0066 11.446 20.3232 10.7626L14.5303 4.96967C14.2374 4.67678 13.7626 4.67678 13.4697 4.96967C13.1768 5.26256 13.1768 5.73744 13.4697 6.03033L18.6893 11.25H4C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H18.6893L13.4697 17.9697Z"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
          <div className="">
            <h1 className="text-5xl font-bold leading-none sm:text-6xl">
              {" "}
              Ac mattis <span className="text-blue-400">senectus</span> erat
              pharetra{" "}
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12">
              {" "}
              Dictum aliquam porta in condimentum ac integer{" "}
              <br className="hidden md:inline lg:hidden" /> turpis pulvinar, est
              scelerisque ligula sem{" "}
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center">
            <div className="flex-2 md:w-1/2 p-4 m-2">
              <p>
                This is a paragraph in the first div. It should look big in
                width. This is a paragraph in the first div. It should look big
                in width. This is a paragraph in the first div. It should look
                big in width. This is a paragraph in the first div. It should
                look big in width. This is a paragraph in the first div. It
                should look big in width. This is a paragraph in the first div.
                It should look big in width. This is a paragraph in the first
                div. It should look big in width. This is a paragraph in the
                first div. It should look big in width. This is a paragraph in
                the first div. It should look big in width. This is a paragraph
                in the first div. It should look big in width.
              </p>
            </div>
            <div className="order-first md:order-none md:w-1/4 p-4 m-2">
              <div className="w-20 h-20 bg-black rounded-full mx-auto"></div>
            </div>
            <div className="flex-2 md:w-1/2 p-4 m-2">
              <p>
                This is a paragraph in the first div. It should look big in
                width. This is a paragraph in the first div. It should look big
                in width. This is a paragraph in the first div. It should look
                big in width. This is a paragraph in the first div. It should
                look big in width. This is a paragraph in the first div. It
                should look big in width. This is a paragraph in the first div.
                It should look big in width. This is a paragraph in the first
                div. It should look big in width. This is a paragraph in the
                first div. It should look big in width. This is a paragraph in
                the first div. It should look big in width. This is a paragraph
                in the first div. It should look big in width.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" lg:justify-center">
          <div className="flex flex-col justify-center items-center p-12">
            <a
              rel="noopener noreferrer"
              href="#"
              className="px-8 py-3 text-lg font-semibold rounded bg-violet-400 text-gray-900"
            >
              {" "}
              Suspendisse{" "}
            </a>
          </div>
        </div>





<div>
<div className=" text-black-100">
          <div className="container flex flex-col justify-center p-6 pl-4 mx-auto sm:py-12 lg:py-24  lg:flex-row lg:justify-evenly">
            <div className="flex flex-col justify-center p-20 pb-0  ml-4 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
              <h4 className="text-5xl font-bold leading-none sm:text-6xl">
                {" "}
                Ac mattis <span className="text-blue-400">senectus</span> erat
                pharetra{" "}
              </h4>
              <p className="mt-6 mb-8 text-lg sm:mb-12">
                {" "}
                Dictum aliquam porta in condimentum ac integer{" "}
                <br className="hidden md:inline lg:hidden" /> turpis pulvinar,
                est scelerisque ligula sem{" "}
              </p>
              <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="px-8 py-3 text-lg font-semibold rounded bg-violet-400 text-gray-900"
                >
                  {" "}
                  Suspendisse{" "}
                </a>
              </div>
            </div>
            <div className="flex items-center justify-center  mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
              <img
                src="/swaabhiman-headpage-photo.png"
                alt=""
                className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
              />
            </div>
          </div>
        </div>
</div>








<footer className="bg-white bg-blue-800">
    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
              <a href="https://flowbite.com/" class="flex items-center">
                  <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 mr-3" alt="FlowBite Logo" />
                  <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
              </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                  <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <a href="https://flowbite.com/" class="hover:underline">Flowbite</a>
                        </li>
                      <li>
                          <a href="https://tailwindcss.com/" class="hover:underline">Tailwind CSS</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <a href="https://github.com/themesberg/flowbite" class="hover:underline ">Github</a>
                      </li>
                      <li>
                          <a href="https://discord.gg/4eeurUVvTy" class="hover:underline">Discord</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <a href="#" class="hover:underline">Privacy Policy</a>
                      </li>
                      <li>
                          <a href="#" class="hover:underline">Terms &amp; Conditions</a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto bg-blue-500 lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">Flowbite™</a>. All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
              <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                        <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd"/>
                    </svg>
                  <span className="sr-only">Facebook page</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                  <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 16">
                        <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z"/>
                    </svg>
                  <span class="sr-only">Discord community</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                    <path fill-rule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clip-rule="evenodd"/>
                </svg>
                  <span className="sr-only">Twitter page</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                  <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd"/>
                  </svg>
                  <span className="sr-only">GitHub account</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                  <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z" clip-rule="evenodd"/>
                </svg>
                  <span className="sr-only">Dribbble account</span>
              </a>
          </div>
      </div>
    </div>
</footer>

    </div>
  );
}
