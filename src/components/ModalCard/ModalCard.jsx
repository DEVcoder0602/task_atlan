"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

const ModelCard = ({ model }) => {
  const router = useRouter();

  const handleNavigate = () => {
    router.push(`/model/${model.id}`);
  };

  return (
    <div
      className="bg-white rounded-lg overflow-hidden shadow-lg cursor-pointer transform transition-transform hover:scale-105"
      onClick={handleNavigate}
    >
      <img className="w-full" src={model.model_image} alt="model" />
      <div className="p-4">
        <h5 className="text-lg font-semibold">{model.model_name}</h5>

        <div className="mt-2 overflow-hidden">
          <p className="text-sm text-gray-700 line-clamp-4">
            {model.model_description}
          </p>
        </div>

        <p className="text-xs text-gray-600 mt-3">
          <span className="font-semibold">Provider Name: </span>
          {model.provider_name}
        </p>
      </div>
    </div>
  );
};

export default ModelCard;
