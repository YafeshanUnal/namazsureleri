
export default function Home() {
  return (
    <div className="text-2xl pt-10 font-bold  flex flex-col gap-10 items-center justify-center">
      <h1>Namaz Sureleri.com</h1>
      <img
        src="quran-6862296__340.jpg"
        alt="Namaz Sureleri"
        className="w-1/2 
        rounded-full hover:border-4 hover:border-slate-400 hover:shadow-2xl
        transition-all duration-500 ease-in-out transform hover:scale-110
        
        "
      />
      <h3 className="text-slate-400">Çok Yakında...</h3>
    </div>
  )
}
