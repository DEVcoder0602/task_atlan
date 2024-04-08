"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import ModelCard from "@/components/ModalCard/ModalCard";
import Loader from "../Loader/Loader";

const Home = () => {
  const [models, setModels] = useState([]);
  const [loading, setLoading] = useState(true);

  // Improved error handling and loading state management
  const fetchModels = async () => {
    setLoading(true); // Set loading state to true before fetching
    try {
      const response = await axios.get("/api/v1/model/all");
      // console.log("response: ", response.data.models);
      setModels(response.data.models); // Update models state
    } catch (error) {
      console.error("Error fetching models:", error); // Log error for debugging
    } finally {
      setLoading(false);
      console.log("models: ", models);
    }
  };
  useEffect(() => {
    fetchModels();
  }, []);

  return (
    <div className="col-lg-6">
      {loading ? (
        <Loader />
      ) : (
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {models?.map((model) => (
            <div key={model.id} className="col">
              <ModelCard model={model} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
