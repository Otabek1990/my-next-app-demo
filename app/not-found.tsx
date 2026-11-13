import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-linear-to-b from-sky-50 to-indigo-100 px-6 text-center">
      <div className="animate-bounce text-8xl" role="img" aria-label="Qayg'uli yuz">
        🙈
      </div>

      <h1 className="bg-linear-to-r from-indigo-500 to-pink-500 bg-clip-text text-7xl font-extrabold tracking-tight text-transparent">
        404
      </h1>

      <p className="text-2xl font-semibold text-slate-700">
        Voy! Sahifa topilmadi
      </p>
      <p className="max-w-md text-slate-500">
        Qidirgan sahifangiz ko&apos;chib ketgan yoki hech qachon bo&apos;lmagan.
        Keling, sizni uyga qaytaramiz. 🏠
      </p>

      <Link
        href="/"
        className="mt-2 rounded-full bg-indigo-600 px-6 py-3 font-medium text-white shadow-lg shadow-indigo-200 transition hover:scale-105 hover:bg-indigo-700 active:scale-95"
      >
        Bosh sahifaga qaytish
      </Link>
    </main>
  )
}
