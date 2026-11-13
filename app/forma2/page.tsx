"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import { userFormSchema, UserFormValues } from "./userFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";


function Forma2() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserFormValues>({ resolver: zodResolver(userFormSchema) });

  const handleAddUser: SubmitHandler<UserFormValues> = (data) => {
    console.log(data);
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-sm bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          FORMA 2
        </h1>
        <form
          onSubmit={handleSubmit(handleAddUser)}
          className="flex flex-col gap-4"
        >
          <input
            {...register("ism",{required:{value:true,message:"Ism majburiy"}})}
            type="text"
            placeholder="Ism kiriting"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-800 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
          />
          {errors.ism && <p>{errors.ism.message}</p>}
          <input
            {...register("yosh", { valueAsNumber: true })}
            type="number"
            placeholder="Yosh kiriting"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-800 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
          />
          {errors.yosh && <p>{errors.yosh.message}</p>}
          <input
            {...register("parol")}
            type="text"
            placeholder="Parol kiriting"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-800 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
          />
          {errors.parol && <p>{errors.parol.message}</p>}
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

export default Forma2;
