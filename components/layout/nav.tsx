import Image from "next/image";

function Nav() {
  return (
    <div className="flex relative z-10 items-center justify-between">
      <Image src="/logo.svg" alt="logo" width={150} height={80} />
      <span className="cursor-pointer text-xs text-white">{"[ BERIF ]"}</span>
    </div>
  );
}

export default Nav;
