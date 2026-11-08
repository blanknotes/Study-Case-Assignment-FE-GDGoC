import TrackSection from "../src/components/common/track/TrackSection";
import Navigation from "../src/components/common/Navigation";
import Footer from "../src/components/common/Footer";
import Formats from "../src/components/overview/format/Formats";
import Journey from "../src/components/overview/journey/Journey";
import OverviewIntro from "../src/components/overview/OverviewIntro";
import OverviewNav from "../src/components/overview/OverviewNav";
import LearningOutcomes from "../src/components/overview/learning_outcomes/LearningOutcomes";
import Guidance from "../src/components/overview/Guidance";
import CommunityInvitation from "../src/components/common/CommunityInvitation";

export default function Overview() {
  return (
    <main>
      <Navigation />
      <OverviewIntro />
      <OverviewNav />
      <TrackSection id="LearningTrack"/>
      <LearningOutcomes />
      <Formats id="LearningFormats"/>
      <Journey id="LearningJourney"/>
      <Guidance id="StartingPoint"/>
      <CommunityInvitation />
      <Footer />
    </main>
  )
}