import { Layout } from "@/components/Layout";
import { HeroSection } from "@/components/HeroSection";
import { SBIPOSection } from "@/components/SBIPOSection";
import { OnlineExamsMenu } from "@/components/OnlineExamsMenu";
import { DailyQuizSection } from "@/components/DailyQuizSection";
import { VideosSection } from "@/components/VideosSection";
import { NotificationsSection } from "@/components/NotificationsSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <SBIPOSection />
      <OnlineExamsMenu />
      <DailyQuizSection />
      <VideosSection />
      <NotificationsSection />
    </Layout>
  );
};

export default Index;
