export default function Homepage() {
  return (
    <div className="bg-isabelline h-screen">
      <HomepageTopbar />
      <HeroSection />
      <Footer />
    </div>
  );
}

function Footer() {
  return (
    <div className="flex justify-center gap-3 border-t border-black text-xs font-poppins">
      <a href="">Help</a>
      <a href="">Status</a>
      <a href="">About</a>
      <a href="">Careers</a>
      <a href="">Press</a>
      <a href="">Blog</a>
      <a href="">Privacy</a>
      <a href="">Rules</a>
      <a href="">Terms</a>
      <a href="">Text to speech</a>
    </div>
  );
}

function HeroSection() {
  return (
    <div className="pl-44 pt-28 mb-2 pb-5">
      <h1 className="font-poppins text-8xl text-[#242424]">
        Human <br />
        stories & ideas
      </h1>

      <p className="mt-20 text-xl font-roboto">
        A place to read, write, and deepen your understanding
      </p>

      <button className="bg-[#191919f7] hover:bg-black text-isabelline px-10 py-2 rounded-full mt-8 text-lg">
        Start reading
      </button>
    </div>
  );
}

function HomepageTopbar() {
  return (
    <div className="flex justify-between border-b border-black py-5">
      {/* the medium logo */}
      <div className="text-3xl ml-36 font-bold font-italiana">Medium</div>

      {/* contains signin and other actions */}
      <div className="flex gap-4 items-center text-sm mr-36 font-roboto">
        <p>Our story</p>
        <p>Membership</p>
        <p>Write</p>
        <p>Sign in</p>
        <button className="bg-black text-isabelline px-4 py-2 rounded-full">
          Get started
        </button>
      </div>
    </div>
  );
}
