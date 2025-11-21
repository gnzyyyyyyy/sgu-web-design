import React from "react";
import "./NewsEvent.css";

const newsList = [
  {
    title: "From Policy to Practice: How Indonesia's UU PDP 2022 Shapes Cyber-security Readiness in 2025",
    date: "21 October 2025",
  },
  {
    title: "From Policy to Practice: How Indonesia's UU PDP 2022 Shapes Cyber-security Readiness in 2025",
    date: "21 October 2025",
  },
  {
    title: "From Policy to Practice: How Indonesia's UU PDP 2022 Shapes Cyber-security Readiness in 2025",
    date: "21 October 2025",
  },
  {
    title: "From Policy to Practice: How Indonesia's UU PDP 2022 Shapes Cyber-security Readiness in 2025",
    date: "21 October 2025",
  },
  {
    title: "From Policy to Practice: How Indonesia's UU PDP 2022 Shapes Cyber-security Readiness in 2025",
    date: "21 October 2025",
  },
];

const eventList = [
  {
    title: "MEET THE PROFESSOR: ENGINEERING TODAY, EXECUTIVE TOMORROW!",
    link: "https://sgu.ac.id/event/meet-the-professor-mme/",
    day: "20",
    month: "November",
    year: "2025",
  },
  {
    title: "Explore the World of Cyber Security : Meet The Professor Online Event",
    link: "https://sgu.ac.id/event/meet-the-professor/",
    day: "20",
    month: "November",
    year: "2025",
  },
  {
    title: "Study Abroad 101: Insights and Opportunity",
    link: "https://sgu.ac.id/event/study-abroad-101/",
    day: "20",
    month: "November",
    year: "2025",
  },
  {
    title: "SGU Open House November 2025",
    link: "https://sgu.ac.id/event/sgu-cooking-class-2025/",
    day: "20",
    month: "November",
    year: "2025",
  },
];

const NewsEvent = () => {
  return (
    <div className="frame-container">
      {/* NEWS SECTION */}
      <div className="news-section">
        <h2 className="section-title">NEWS</h2>

        {newsList.map((item, i) => (
          <div key={i} className="news-item">
            <b>{item.title}</b>
            <span className="news-date">{item.date}</span>
          </div>
        ))}

        <p className="view-more">View More News &gt;</p>
      </div>

      {/* EVENTS SECTION */}
      <div className="event-section">
        <h2 className="section-title events-title">Events</h2>

        {eventList.map((item, i) => (
          <div key={i} className="event-item">
            <a href={item.link} target="_blank" rel="noreferrer" className="event-text">
              {item.title}
            </a>

            <div className="date-box">
              <b>{item.day}</b>
              <span className="date-small">
                {item.month}
                <br />
                {item.year}
              </span>
            </div>
          </div>
        ))}

        <p className="view-more">View More Events &gt;</p>
      </div>
    </div>
  );
}

export default NewsEvent
