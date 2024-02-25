
const SupplyChainItem = ({ data, index }) => (
  <div
    className={`rounded-full timeline-item flex items-start mb-12 w-[45%] bg-gray-700 p-6 text-gray-200 ${index % 2 === 0 ? "ml-[55%] " : "mr-[55%] "}`}
  >
    <i className={`fas fa-circle text-yellow-400 mr-4 mt-4`} />
    <div className="timeline-item-content">
      <h2 className="text-lg text-orange-400 font-bold">{data.title}</h2>
      <p className="text-sm  mt-1">{data.description}</p>
      {/* <span
        className={`tag text-yellow-400 px-2 py-1 rounded-full text-xs font-bold`}
      >
        {data.title}
      </span> */}
      {/* <time className="block text-gray-500 text-sm mt-1">{data.date}</time>
      <p className="mt-2">{data.text}</p> */}
    </div>
  </div>
);


const SupplyChain = ({ supplyChain }) => (
  <div className="timeline relative">
    <div className="timeline-line h-full w-1 bg-gray-400 absolute top-0 left-1/2 transform -translate-x-1/2 rounded-full" />
    {supplyChain?.map((data, idx) => (
      <SupplyChainItem data={data} key={idx} index={idx} />
    ))}
  </div>
);

export default SupplyChain;