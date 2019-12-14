/*
 * AboutPage Messages
 *
 * This contains all the text for the AboutPage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.containers.AboutPage';

export default defineMessages({
  introHeader: {
    id: `${scope}.intro.header`,
    defaultMessage: 'Who Am I?',
  },
  introMessage: {
    id: `${scope}.intro.message`,
    defaultMessage: "I am adventurous, active, passionate and honest. When I'm not working on software, I'm exercising, socializing or exploring the outdoors. I involve music in almost everything I do; I play drums and try to see live concerts as much as possible.",
  },
  goalHeader: {
    id: `${scope}.goal.header`,
    defaultMessage: "What's My Goal?",
  },
  goalMessage: {
    id: `${scope}.goal.message`,
    defaultMessage: "I aim to grow my technical skills and ideally contribute to an environmental or humanitarian company. I’m a personable, curious and experienced developer with contemporary and diverse skills. I was a software tutor and kayak tour guide before I began my career, showing my ability to communicate, lead, teach respectfully and meet the expectations of both my employer and the customer.",
  },
  careerHeader: {
    id: `${scope}.career.header`,
    defaultMessage: 'What Can I Do for You?',
  },
  careerMessage: {
    id: `${scope}.career.message`,
    defaultMessage: "In professional contexts, I bring valuable communication, creativity, problem solving and technical skills. My diverse experience covers industry-leading software tools and processes, enabling me to produce quality code that exceeds expectations. I've worked on a variety of complex SaaS applications at all levels of the stack. As a front-end developer at TrackVia, I worked in React and Typescript, in conjunction with the product team to design specs and build features. As a full-stack developer on the data science team at Beeline, I designed and developed a scoring and metrics visualization tool for our clients to dynamically measure their business partners against each other. We utilized Vue.js, Node.js, and SQL in designing the front-end, API and database schema. At INRIX I built a front-end, internal visualization tool for management to evaluate the quality of it’s data providers using Charts.js, Bootstrap and JQuery (consuming an API written in Java). Throughout all of these positions, I was responsible for testing and quality of the features, whether it be user experience studies or unit, automation and manual testing.",
  },
  careerMessageTwo: {
    id: `${scope}.career.message.two`,
    defaultMessage: "I've worked in team-based, agile environments and am familiar with Kanban and Scrum development using JIRA and Git. I was a software tutor and tour guide before I began my development career, showing my ability to lead, teach respectfully to meet the expectations of both my employer and the customer. My ability to effectively communicate feature parameters, prototype and wire-frame my ideas, diagnose process hiccups and effectively work through unexpected hurdles sets me apart from many developers.",
  }
});
