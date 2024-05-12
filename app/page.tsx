import Image from "next/image";
import logo from "../public/lightmode-logo.png";

export default function Home() {
  return (
    <main className="">
      <Image src={logo} alt="logo" className="h-20 w-48 m-8" />
      <p className="text-center p-24">
        <span className="text-[#F67B49]">
        The website is presently undergoing maintenance.
        </span>{" "}
        The website will soon be live.
      </p>
    </main>
  );
}
