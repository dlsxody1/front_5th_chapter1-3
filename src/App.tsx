import React from "react";
import Header from "./components/Header";
import ItemList from "./components/ItemList";
import ComplexForm from "./components/ComplexForm";
import NotificationSystem from "./components/NotificationSystem";
import Layout from "./components/Layout";

const App: React.FC = () => {
  return (
    <Layout>
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 md:pr-4">
            <ItemList />
          </div>
          <div className="w-full md:w-1/2 md:pl-4">
            <ComplexForm />
          </div>
        </div>
      </div>
      <NotificationSystem />
    </Layout>
  );
};

export default App;
