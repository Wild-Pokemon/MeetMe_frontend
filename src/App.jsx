import { RouterProvider } from "react-router-dom";
import router from "@/routes";
import "@styles/App.module.scss";
import { Suspense } from "react";
import Loading from "@components/loading/Loading";

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
