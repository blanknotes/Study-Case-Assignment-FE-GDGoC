import TrackSection from "../src/components/common/track/TrackSection";
import Navigation from "../src/components/common/Navigation";
import Footer from "../src/components/common/Footer";
import Faqs from "../src/components/landing_page/FAQs/Faqs";
import WttComm from "../src/components/landing_page/welcome_to_the_community/WttCommunity";
import CommIntro from "../src/components/landing_page/community_intro/IntroCommunity";
import LearningFormats from "../src/components/landing_page/learning_formats/LearningFormats";
import ProjectPossibility from "../src/components/landing_page/project_possibility/ProjectPossibility";
import GettingStarted from "../src/components/landing_page/getting_started/GettingStarted";
import BelongingStatement from "../src/components/landing_page/BelongingStatement";
import CommunityInvitation from "../src/components/common/CommunityInvitation";

export default function LandingPage() {
  return (
    <main>
      <Navigation />
      <WttComm />
      <CommIntro />
      <TrackSection />
      <LearningFormats />
      <ProjectPossibility />
      <GettingStarted />
      <BelongingStatement />
      <Faqs />
      <CommunityInvitation />
      <Footer />
    </main>
  )
}