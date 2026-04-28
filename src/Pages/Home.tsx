import Header from "../Features/Header/Header";

function Home() {
  return (
    <div className="">
      <Header home />

      <div className="mb-[100px]">
        <div className="h-[470px] bg-primary-400 sm:h-[300px]">
          <div className="container flex flex-col items-center justify-evenly gap-y-4 sm:flex-row xl:max-w-screen-lg">
            <img
              className="h-[335px] w-[550px]"
              src="/Images/header.png"
              alt="header image"
            />

            <span className="inline-block w-[300px] text-wrap text-center text-3xl font-black leading-[3rem] text-secondary-800 lg:text-4xl lg:leading-[3.5rem] xl:w-[400px] xl:text-5xl xl:leading-[4rem]">
              به سایت فریلنسری خوش آمدید
            </span>
          </div>
        </div>

        <div className="grid-rows-[10px _ 1fr] container mt-16 grid grid-cols-1 justify-items-center gap-y-16 text-secondary-900 sm:grid-cols-2 xl:max-w-screen-lg">
          <span className="text-xl font-bold sm:col-span-2 sm:text-2xl">
            این سایت برای چه کسانی مناسب می باشد
          </span>

          <div className="flex flex-col items-center">
            <img
              className="mb-8 h-[150px] w-[250px]"
              src="/Images/owner.png"
              alt="owner image"
            />

            <span className="text-xl font-bold">کارفرما ها</span>

            <div className="flex gap-x-2">
              <span className="text-2xl font-bold">&bull;</span>
              <span className="pt-1 text-base">
                ایجاد پروژه در دسته بندی های مختلف
              </span>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <img
              className="mb-8 h-[150px] w-[250px]"
              src="/Images//freelancer.png"
              alt="freelancer image"
            />

            <span className="text-xl font-bold">فریلنسر ها</span>

            <div className="flex gap-x-2">
              <span className="text-2xl font-bold">&bull;</span>
              <span className="pt-1 text-base">
                درخواست انجام پروژه های مختلف
              </span>
            </div>
          </div>
        </div>

        <div className="grid-rows-[10px _ 1fr] container mt-16 grid grid-cols-1 items-center justify-items-center gap-y-8 text-secondary-900 md:grid-cols-2 xl:max-w-screen-lg">
          <span className="text-xl font-bold sm:text-2xl md:col-span-2">
            قابلیت های این سایت
          </span>

          <ul className="flex list-disc flex-col gap-y-4 text-base sm:text-lg">
            <li>
              تغییر دادن تم سایت به کمک{" "}
              <a
                className="transition-all duration-300 hover:text-primary-900"
                href="https://tailwindcss.com"
              >
                tailwind-css
              </a>
            </li>
            <li>ورود به سایت از طریق کد otp</li>
            <li>
              اعتبار سنجی فرم ها از طریق{" "}
              <a
                className="transition-all duration-300 hover:text-primary-900"
                href="https://www.react-hook-form.com/"
              >
                react-hook-form
              </a>
            </li>
            <li>
              فچ کردن دیتا به کمک{" "}
              <a
                className="transition-all duration-300 hover:text-primary-900"
                href="https://tanstack.com/"
              >
                react-query
              </a>
            </li>
          </ul>

          <img
            className="row-start-2 h-[250px] w-[450px] md:col-start-2"
            src="/Images/features.png"
            alt="features image"
          />
        </div>
      </div>
    </div>
  );
}
export default Home;
