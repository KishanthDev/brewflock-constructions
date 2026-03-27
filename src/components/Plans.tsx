import PlanCard from "./PlanCard";

const plans = [
  {
    title: "BUDGET",
    price: "Rs.1,749",
    features: [
      {
        title: "Designs & Drawings",
        items: ["Architectural Layout", "Structural Design", "2D Floor Plans"],
      },
      {
        title: "Structural",
        items: ["Steel: India Gold", "Cement: Zuari", "Waterproofing: Dr.Fixit"],
      },
    ],
  },
  {
    title: "BASIC",
    price: "Rs.1,849",
    features: [
      {
        title: "Designs & Drawings",
        items: [
          "Architectural Layout",
          "Structural Design",
          "2D Floor Plans",
          "3D Elevation",
        ],
      },
    ],
  },
  {
    title: "CLASSIC",
    price: "Rs.1,949",
    features: [
      {
        title: "Kitchen",
        items: ["Granite Countertop", "Steel Sink", "ISI Faucet"],
      },
    ],
  },
];

const Plans = () => {
  return (
    <section className="py-16 bg-gray-50" id="plans">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            Pick Your Plan
          </h2>
        </div>

        {/* Scroll Cards */}
        <div className="flex gap-6 overflow-x-auto pb-4">
          {plans.map((plan, index) => (
            <PlanCard key={index} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Plans;