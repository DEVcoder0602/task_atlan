import Home from "@/components/Home/Home";

export default function HomePage() {
  return (
    <div className="container-fluid my-5" id="home">
      <div className="row">
        <div className="col-lg-6">
          <p className="text-large text-bold text-center mt-3">
            Welcome to our platform
          </p>
          <p className="text-medium text-center mt-5">
            Discover the latest and most trending language models in the
            industry. From state-of-the-art advancements to cutting-edge
            innovations, stay ahead of the curve with our curated selection of
            the best models available.
          </p>
        </div>
        <Home />
      </div>
    </div>
  );
}
