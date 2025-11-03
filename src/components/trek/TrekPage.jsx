import { useParams } from "react-router-dom";
import CallToAction from "./CallToAction";
import EnquirySection from "./EnquirySection";
import GearAndInclusions from "./GearAndInclusions";
import Hero from "./Hero";
import NavigationButtons from "./NavigationButtons";
import PackingEssentials from "./PackingEssentials";
import RelatedTreks from "./RelatedTreks";
import SafetyVideos from "./SafetyVideos";
import TransportationAndReviews from "./TransportationAndReviews";
import TrekDetails from "./TrekDetails";
import TrekItinerary from "./TrekItinerary";
import WhyTSS from "./WhyTSS";
import { getTrekData } from "../../data/trek";

const TrekPage = () => {
  const { slug } = useParams();

  console.log("Trek slug:", slug);

  // Get trek data based on slug
  const trekData = getTrekData(slug);

  // Handle if trek not found
  if (!trekData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Trek Not Found
          </h1>
          <p className="text-gray-600">
            The trek you're looking for doesn't exist.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Hero data={trekData.hero} />
      <EnquirySection data={trekData.enquiry} />
      <NavigationButtons data={trekData.navigationButtons} />
      <TrekDetails data={trekData.trekDetails} title={trekData.title} />
      <GearAndInclusions data={trekData.gearAndInclusions} />
      {/* <TransportationAndReviews data={trekData.transportation} /> */}
      <TrekItinerary data={trekData.itinerary} title={trekData.title}/>
      <SafetyVideos data={trekData.safetyVideos} />
      {/* <WhyTSS data={trekData.whyTSS} /> */}
      <PackingEssentials data={trekData.packingEssentials} title={trekData.title} />
      <CallToAction data={trekData.callToAction} />
      {/* <RelatedTreks data={trekData.relatedTreks} /> */}
    </div>
  );
};

export default TrekPage;
