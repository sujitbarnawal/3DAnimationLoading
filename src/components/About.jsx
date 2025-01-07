import { skills, education } from "../constants";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import CTA from "./CTA";

export default function About() {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello, I am{" "}
        <span className="green-gradient_text font-semibold drop-shadow">
          Sujit
        </span>
      </h1>
      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          Web Developer based in Nepal, specializing in technical education
          through hands on learning and building applications.
        </p>
      </div>
      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Skills</h3>
        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill, index) => {
            return (
              <>
                <div key={index} className="block-container w-20 h-20">
                  <div className="btn-back rounded-xl" />
                  <div className="btn-front rounded-xl flex items-center justify-center">
                    <img
                      src={skill.imageUrl}
                      alt={skill.name}
                      className="w-1/2 h-1/2 object-contain"
                    />
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>

      <div className="py-16">
        <h3 className="subhead-text">Education</h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            My education journey, starting from SEE to pursuing a bachelors
            degree, has been a transformative path filled with growth,
            challenges, and resilience. Each milestone has shaped my aspirations
            and strengthened my determination to achieve my goals
          </p>
        </div>
        <div className="mt-12 flex">
          <VerticalTimeline>
            {education.map((edu) => {
              return (
                <>
                  <VerticalTimelineElement
                    key={edu.institution_name}
                    date={edu.date}
                    icon={
                      <div className="w-full h-full flex items-center justify-center">
                        <img
                          src={edu.icon}
                          alt={edu.institution_name}
                          className="w-[60%] h-[60%] object-contain"
                        />
                      </div>
                    }
                    contentStyle={{
                        borderBottom:'8px',
                        borderStyle:'solid',
                        borderBottomColor:edu.iconBg,
                        boxShadow:'none'
                    }}
                    iconStyle={{
                        backgroundColor:edu.iconBg
                    }}
                  >
                    <div>
                      <h3 className="text-black text-xl font-poppins">
                        {edu.title}
                      </h3>
                      <p className="text-black-500 font-medium text-base">
                        {edu.institution_name}
                      </p>
                    </div>
                    <ul className="my-5 list-disc ml-5 space-y-2">
                      {edu.points.map((ep, index) => {
                        return (
                          <>
                            <li
                              key={`education-point-${index}`}
                              className="text-black-500/50 font-normal pl-1 text-sm"
                            >
                              {ep}
                            </li>
                          </>
                        );
                      })}
                    </ul>
                  </VerticalTimelineElement>
                </>
              );
            })}
          </VerticalTimeline>
        </div>
      </div>

      <hr className="border-slate-200" />
      <CTA />
    </section>
  );
}
