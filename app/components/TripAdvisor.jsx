"use client";
import React, { useEffect, useRef } from "react";

export const TripAdvisor = () => {
  return (
    <div className="flex items-center justify-between">
      <TripAdvisorCertificate></TripAdvisorCertificate>
      <TripAdvisorSelfServe></TripAdvisorSelfServe>
    </div>
  );
};
const TripAdvisorSelfServe = () => {
  const widgetRef = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://www.jscache.com/wejs?wtype=selfserveprop&uniq=484&locationId=23232279&lang=en_US&rating=true&nreviews=1&writereviewlink=true&popIdx=true&iswide=true&border=true&display_version=2";
    script.async = true;
    script.onload = () => {
      script.loadtrk = true;
    };

    // Append the script only after the component is rendered
    if (widgetRef.current) {
      widgetRef.current.appendChild(script);
    }
  }, []);

  return (
    <div className="flex-1">
      <div
        id="TA_selfserveprop484"
        className="TA_selfserveprop"
        ref={widgetRef}
      >
        <ul id="lU4Gw7" className="TA_links 5w7b2E4o">
          <li id="koAwLij" className="iwsNYg4NszZ">
            <a
              target="_blank"
              href="https://www.tripadvisor.com/Attraction_Review-g147311-d23232279-Reviews-Jamaica_Eternal_Tours-Montego_Bay_Saint_James_Parish_Jamaica.html"
            >
              <img
                src="https://www.tripadvisor.com/img/cdsi/img2/branding/v2/Tripadvisor_lockup_horizontal_secondary_registered-11900-2.svg"
                alt="TripAdvisor"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
const TripAdvisorCertificate = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://www.jscache.com/wejs?wtype=certificateOfExcellence&uniq=1&locationId=23245962&lang=en_US&year=2024&display_version=2";
    script.async = true;
    script.onload = () => {
      script.loadtrk = true;
    };

    document.getElementById("TA_certificateOfExcellence1").appendChild(script);
  }, []);

  return (
    <div className="flex-1">
      <div
        id="TA_certificateOfExcellence1"
        className="TA_certificateOfExcellence"
      >
        <ul id="3cJTo0CxwrNQ" className="TA_links zDyOooRs35">
          <li id="Iae2IdI9fUn6" className="C8LKhmA">
            <a
              target="_blank"
              href="https://www.tripadvisor.com/Attraction_Review-g147311-d23245962-Reviews-Jamaica_Eternal_Tours_And_Transportation-Montego_Bay_Saint_James_Parish_Jamaica.html"
            >
              <img
                src="https://static.tacdn.com/img2/travelers_choice/widgets/tchotel_2024_L.png"
                alt="TripAdvisor"
                className="widCOEImg"
                id="CDSWIDCOELOGO"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
