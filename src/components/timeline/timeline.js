import React from "react";
import { Container } from "react-bootstrap";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import CertIcon from "../../assets/certification-icon.webp";
import "react-vertical-timeline-component/style.min.css";
import "./timeline.scss";

const timeLineElemets = [
  {
    id: 1,
    title: "Microsoft Certified: Azure Cosmos DB Developer Specialty",
    description:
      "Earned the Azure Cosmos DB Developer Specialty Certification by passing Exam Exam DP-420: Designing and Implementing Cloud-Native Applications Using Microsoft Azure Cosmos DB",
    date: "2022 Dec",
    icon: "cert",
  },
  {
    id: 2,
    title: "Senior Software Enginner",
    description: "Promoted as Senior Software Engineer",
    date: "2022 Aug",
    icon: "cert",
  },
  {
    id: 3,
    title: "Microsoft Certified: Azure Fundamentals",
    description:
      "Earned the Azure Fundamentals certification by passing Exam AZ-900: Microsoft Azure Fundamentals",
    date: "2021 Sep",
    icon: "cert",
  },
];

export function VerticleTimeLine(props) {
  let iconStype = { background: "rgb(14 14 14)" };
  var elements = timeLineElemets.map((e) => {
    var icon = (
      <div>
        <img src={e.icon === "cert" ? CertIcon : null} alt="certificate" />
      </div>
    );
    return (
      <VerticalTimelineElement
        className="timeLineElement"
        key={e.id}
        date={e.date}
        icon={icon}
        iconStyle={iconStype}
        dateClassName="date"
      >
        <h3 className="vertical-timeline-element-title"> {e.title}</h3>
        <p> {e.description}</p>
      </VerticalTimelineElement>
    );
  });
  return (
    <Container id="timeline">
      <VerticalTimeline>{elements}</VerticalTimeline>
    </Container>
  );
}
