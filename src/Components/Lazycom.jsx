import { lazy, Suspense } from "react";
import About from "./About";

const Lazycom = () => {
  const about = lazy(() => import("./About"));
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <About />
    </Suspense>
  );
};

export default Lazycom;
