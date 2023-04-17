const FooterSection = ({ title, data }) => {
  return (
    <div className="mt-6 pb-6 border-b-2 lg:border-b-0">
      <h2 className="font-bold text-xl uppercase mb-2">{title}</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1">
        {data.map((item) => (
          <li
            key={item.id}
            className="opacity-70 cursor-pointer hover:underline hover:opacity-90 transition w-fit"
          >
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterSection;
