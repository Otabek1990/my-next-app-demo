"use client";

import { SubmitHandler, useForm } from "react-hook-form";

type User = {
  ism: string;
  yosh: number;
  parol: string;
};

function Forma1() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<User>({
    mode:"onBlur",
    // reValidateMode:"onSubmit"
    
  });
  const pul=1340000

  const onSubmit: SubmitHandler<User> = (data) => {
    console.log(data);
    reset()
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-sm bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          FORMA 1 {pul}
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="ism" className="text-sm font-medium text-gray-700">
              Ism
            </label>
            <input
              {...register("ism", {
                required: {
                  value:true,
                  message:"Ism majburiy"
                },
                minLength: {
                  value:3,
                  message:"Minimum 3ta belgi bolsin"
                },
                maxLength: {
                  value:15,
                  message:"Maximum 15ta belgi bolsin"
                },
              })}
              id="ism"
              name="ism"
              type="text"
              placeholder="Ism kiriting"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-800 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
            />
            {errors.ism && (
              <p className="flex items-center gap-1 mt-0.5 text-xs font-medium text-pink-600 bg-pink-50 border border-pink-200 rounded-lg px-3 py-1.5 animate-pulse">
                
                    <span>🙈</span>{errors.ism.message}
                
              </p>
            )}
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="yosh" className="text-sm font-medium text-gray-700">
              Yosh
            </label>
            <input
              min={1}
              {...register("yosh", {
                required: {
                  value:true,
                  message:"yosh majburiy"
                },
                valueAsNumber: true,
                min: {
                  value: 1,
                  message: "yosh 1dan kichik bolishi mumkin emas",
                },
                max: {
                  value: 150,
                  message: "yosh 150dan katta bolishi m emas",
                },
              })}
              id="yosh"
              name="yosh"
              type="number"
              placeholder="Yosh kiriting"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-800 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
            />
            {errors.yosh && (
              <p className="flex items-center gap-1 mt-0.5 text-xs font-medium text-pink-600 bg-pink-50 border border-pink-200 rounded-lg px-3 py-1.5 animate-pulse">
               
                  
                    <span>🎂</span> {errors.yosh.message}
                  
               
              </p>
            )}
          </div>
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="parol"
              className="text-sm font-medium text-gray-700"
            >
              Parol
            </label>
            <input
              {...register("parol", {
                required: true,
                pattern: {
                  value: /^(?=.*[A-Z])(?=.*\d).{6,}$/,
                  message:
                    "Kamida 6ta belgi, bitta katta harf va bitta raqam bolsin!",
                },
              })}
              id="parol"
              name="parol"
              type="text"
              placeholder="Parol kiriting"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-800 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
            />
            {errors.parol && (
              <p className="flex items-center gap-1 mt-0.5 text-xs font-medium text-pink-600 bg-pink-50 border border-pink-200 rounded-lg px-3 py-1.5 animate-pulse">
                <span>🔒</span>
                {errors.parol.type === "required" && " Parol kiritish majburiy"}
                {errors.parol.type === "pattern" && ` ${errors.parol.message}`}
              </p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white rounded-lg px-4 py-2 font-medium hover:bg-blue-700 transition"
          >
            Yuborish
          </button>
        </form>
      </div>
    </div>
  );
}

export default Forma1;
