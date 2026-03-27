import { useState } from "react";

interface Feature {
  title: string;
  items: string[];
}

interface PlanCardProps {
  title: string;
  price: string;
  features: Feature[];
}

const PlanCard: React.FC<PlanCardProps> = ({ title, price, features }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="min-w-[320px] bg-white rounded-2xl shadow-lg p-6 border">
      
      {/* Header */}
      <div className="mb-6">
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        <p className="text-orange-500 font-semibold">{price}</p>
        <span className="text-sm text-gray-500">sqft [Incl.GST]</span>
      </div>

      {/* Accordion */}
      <div className="space-y-3">
        {features.map((feature, index) => (
          <div key={index} className="border rounded-lg">
            
            <button
              onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
              className="w-full text-left px-4 py-3 font-medium flex justify-between items-center"
            >
              {feature.title}
              <span>{openIndex === index ? "-" : "+"}</span>
            </button>

            {openIndex === index && (
              <div className="px-4 pb-4 text-sm text-gray-600">
                <ul className="list-disc pl-4 space-y-1">
                  {feature.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlanCard;