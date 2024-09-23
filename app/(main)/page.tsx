import DashboardCard from "@/components/dashboard/DashboardCard";
import { Folder, MessageCircle, Newspaper, User } from "lucide-react";
import PostTable from "@/components/posts/PostTable";
import AnalyticsChart from "@/components/dashboard/AnalyticsChart";



export default function Home() {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between gap-5 mb-5 ">
        <DashboardCard
          title="Posts"
          count={100}
          icon={<Newspaper className="text-slate-500 " size={72} />}
        />
        <DashboardCard
          title="Categories"
          count={12}
          icon={<Folder className="text-slate-500 " size={72} />}
        />

        <DashboardCard
          title="Users"
          count={440}
          icon={<User className="text-slate-500 " size={72} />}
        />
        <DashboardCard
          title="Comments"
          count={1200}
          icon={<MessageCircle className="text-slate-500 " size={72} />}
        />
      </div>
      <AnalyticsChart />
      <PostTable title='Latest Posts' limit={5}/>
    </>
  );
}
