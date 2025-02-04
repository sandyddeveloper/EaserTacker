import { Sidebar, Header, Ads, StatsCards, ErrorTable } from "../components/Dashboard";

const Dashboard = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar className="w-64 fixed h-full" />
      <div className="flex flex-col flex-1 w-full">
        <Header />
        <main className="h-full overflow-y-auto p-4">
          <div className="container px-6 mx-auto grid">
            <h2 className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-400">
              Dashboard
            </h2>
            <Ads />
            <StatsCards />
            <ErrorTable />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;