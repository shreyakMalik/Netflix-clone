import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Redirect to the Netflix clone HTML page
    window.location.href = "/netflix.html";
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center">
        <p className="text-xl">Redirecting to Netflix Clone...</p>
      </div>
    </div>
  );
};

export default Index;
