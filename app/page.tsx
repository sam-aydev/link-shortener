import FirstSection from "@/components/herosections/FirstSection";
import LastSections from "@/components/herosections/LastSections";
import SecondSection from "@/components/herosections/SecondSection";
import ThirdSection from "@/components/herosections/ThirdSection";

export default function Home() {
  return (
    <div>
      <div>
        <div>
          <FirstSection />
          <SecondSection />
          <ThirdSection />
          <LastSections />
        </div>
      </div>
    </div>
  );
}

export async function generateMetadata() {
  return {
    title: "Shortly - Best Link Shortener",
  };
}
