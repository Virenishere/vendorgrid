import Link from "next/link";
import Navbar from "@/components/Navbar";
import { VendorDemographicsChart } from "@/components/VendorDemographicsChart";
import Footer from "@/components/Footer";

const Dashboard = () => {
  return (
    <div className="min-h-screen text-white">
      <Navbar />

      <div className="max-w-4xl mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold mb-8">Vendor Dashboard</h1>

        <VendorDemographicsChart />

        <div className="grid gap-6 md:grid-cols-3 mt-8">
          <Link
            href="/vendors"
            className="rounded-xl p-6 shadow-md transition transform hover:scale-105
      bg-white/5 backdrop-blur-md border border-blue-600 text-white"
          >
            View All Vendors
          </Link>

          <Link
            href="/vendors/new"
            className="rounded-xl p-6 shadow-md transition transform hover:scale-105
      bg-white/5 backdrop-blur-md border border-green-600 text-white"
          >
            Create New Vendor
          </Link>
        </div>
      </div>
      <footer className="w-full mt-40">
        <Footer />
      </footer>
    
    </div>
  );
};

export default Dashboard;
