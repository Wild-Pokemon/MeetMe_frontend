import { RouterProvider } from "react-router-dom";
import router from "@/routes";
import { Suspense } from "react";
import Loading from "@components/loading/Loading";
import "@styles/common.css";

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
