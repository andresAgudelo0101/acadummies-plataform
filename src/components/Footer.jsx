function Footer() {
  return (
    <footer className=" h-auto p-4 bg-zinc-900 flex flex-col justify-center items-center text-base text-gray-300">
      <div>
        <p className="text-lg font-normal leading-normal tracking-tight ">
          Síguenos
        </p>
        <div className="flex flex-row gap-2 justify-center">
          <a href="https://www.instagram.com/dummies.academy/" target="_blank">
            <img src="/insta.png" className="w-6 hover:scale-125" />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100087537554988"
            target="_blank"
          >
            <img src="/face.png" className="w-6 hover:scale-125" />
          </a>
        </div>
      </div>
      <div className="flex flex-row justify-center items-center gap-3">
        <img src="/logo.png" className=" w-16" /> Copyright © 2023 Dummies
        Academy. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
