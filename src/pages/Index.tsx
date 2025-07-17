import { Layout } from "@/components/Layout";
import { HeroSection } from "@/components/HeroSection";
import { OnlineExamsMenu } from "@/components/OnlineExamsMenu";
import { DailyQuizSection } from "@/components/DailyQuizSection";
import { VideosSection } from "@/components/VideosSection";
import { NotificationsSection } from "@/components/NotificationsSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <OnlineExamsMenu />
      <DailyQuizSection />
      <VideosSection />
      <NotificationsSection />
    </Layout>
  );
};

export default Index;
