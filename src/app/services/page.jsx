import React from "react";

const ServicePage = () => {
  return (
    <div className="container-fluid my-5" id="services">
      <p className="text-large text-bold text-center mt-3">Our Services</p>
      <div className="row my-5">
        <div className="col-sm-4 service">
          <div className="text-center">
            <p className="text-medium text-bold">Discover Models</p>

            <p className="text-small px-lg-5">
              Explore the latest and most trending language models in the
              industry. From state-of-the-art advancements to cutting-edge
              innovations, stay ahead of the curve with our curated selection of
              the best models available.
            </p>
          </div>
        </div>
        <div className="col-sm-4 service">
          <div className="text-center px-lg-5">
            <p className="text-medium text-bold">Contribute Exciting Models</p>

            <p className="text-small">
              Be a part of the innovation journey by adding exciting language
              models to our growing repository. Share your discoveries,
              contribute to the community, and expand the horizons of language
              processing technology.
            </p>
          </div>
        </div>
        <div className="col-sm-4 service">
          <div className="text-center px-lg-5">
            <p className="text-medium text-bold">Test Drive Models</p>

            <p className="text-small">
              Experience the power of language models firsthand with our
              interactive tryout feature. Dive into the capabilities of
              different models, experiment with various inputs, and witness
              their language generation and understanding abilities in action.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
