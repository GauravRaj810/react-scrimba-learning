export default function Header() {
  return (
    <header className="bg-[#F55A5A] py-4">
      <div className="container flex justify-center gap-3 items-center ">
        <div className="logo-img max-w-8">
        <img src="/Globe.png" />
        </div>
        <h2  className="text-white text-lg font-medium">My Travel Journal</h2  >
       </div>
    </header>
  );
}
