import DashboardLayout from "../components/home/HomeLayout";
import Header from "../components/shared/Header";

const Dashboard = () => {
  return (
    <>
      <Header />
      <div className="page-wrapper">
        <DashboardLayout />
      </div>
    </>
  );
};
export default Dashboard;
