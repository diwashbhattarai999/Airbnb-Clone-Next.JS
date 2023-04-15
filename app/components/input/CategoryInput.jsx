"use client";

const CategoryInput = ({ icon: Icon, label, selected, onClick }) => {
  return (
    <div
      onClick={() => onClick(label)}
      className={`
        rounded-xl border-2 p-4 flex flex-col gap-3 transition cursor-pointer
        ${selected ? "border-black" : "border-neutral-200"}
        ${selected ? "hover:border-black" : "hover:border-slate-600"}
      `}
    >
      <Icon size={30} />
      <div className="font-semibold">{label}</div>
    </div>
  );
};

export default CategoryInput;
