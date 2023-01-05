import Image from "next/image";
interface Props {
  text: String;
}
function BrefBtn({ text }: Props) {
  return (
    <div className="text-center relative flex items-center cursor-pointer justify-center">
      <Image
        src="https://static.tildacdn.com/tild6234-3137-4331-b035-343933366661/button.svg"
        className="absolute"
        alt="btn"
        width={300}
        height={200}
      />
      <button className="text-white text-sm">{text}</button>
    </div>
  );
}

export default BrefBtn;
