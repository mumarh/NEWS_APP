import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/UI/Layout";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact  from "./Pages/Contact";
import ErrorPage from "./pages/ErrorPage";
import Testimonals from "./pages/Testimonals";


// // Newly added footer pages
// import ShippingInfo from "./pages/ShippingInfo";
// import ReturnsExchange from "./pages/ReturnsExchange";
// import PrivacyPolicy from "./pages/PrivacyPolicy";
// import TermsConditions from "./pages/TermsConditions";
// import FAQs from "./pages/FAQs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "testimonals", element: <Testimonals/> },

      // // Footer Pages
      // { path: "shipping-info", element: <ShippingInfo /> },
      // { path: "returns-exchange", element: <ReturnsExchange /> },
      // { path: "privacy-policy", element: <PrivacyPolicy /> },
      // { path: "terms-conditions", element: <TermsConditions /> },
      // { path: "faqs", element: <FAQs /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
