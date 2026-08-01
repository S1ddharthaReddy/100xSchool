import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 bg-black justify-center items-center">
      Your friendly todo app
      <button>Sign up</button>
      <button>Sign in</button>
    </div>
  );
}
