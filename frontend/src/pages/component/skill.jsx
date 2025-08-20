export default function Skill({ img, name }) {
  return (
    <div className="img-info flex flex-col items-center shadow-md px-3 py-2 hover:bg-[#D6D6D6] rounded transition transform ease-in-out duration-300 hover:scale-105">
      <img src={img} alt={name} className="w-[50px] h-[50px] object-contain mb-2   " />
      <p className="text-lg">{name}</p>
    </div>
  );
}