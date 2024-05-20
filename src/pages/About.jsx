import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { skills, experiences } from '../constants'
import CTA from '../components/CTA';

const About = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>Hello, I'm <span className='blue-gradient_text font-semibold drop-shadow'>Chirag Jagani</span></h1>

      <div className='mt-5 flex felx-col gap-3 text-slate-500 text-justify'>
        <p> &emsp; Computer Engineer based in India, Welcome to my digital domain, where knowledge meets innovation.
          With a solid foundation in the dynamic world of Java, Kotlin, React, and JavaScript, I embark on a creative journey.
          Framework to delving into the intricate realm."
          of from shaping lovely web interfaces using beautiful HTML and Tailwind CSS."
          Android app development, I thrive on bringing ideas to life.
          Orchestration of databases is not just a business but a subtle dance with MySQL.
          Join me in this exploration where every line of code is a brushstroke, painting a narrative of seamless digital experiencess, of what technology can do And pushing boundaries.</p>
      </div>

      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>My Skills</h3>
        <div className='mt-16 flex flex-wrap gap-12'>
          {skills.map((skills) => (
            <div className='block-container w-20 h-20'>
              <div className='btn-back rounded-xl' />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img src={skills.imageUrl} alt={skills.name}
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='py-16'>
        <h3 className='subhead-text'>My experiences</h3>
        <div className='mt-5 flex flex-col gap-3 text-slate-500 text-justify'>
          {/* <p>As an undergraduate scholar, my adventure is defined by curiosity and a deep ardour for technology. 
            I'm committed to remodeling ideas into digital realities, navigating the intersection of gaining knowledge of and innovation. 
            Join me in shaping a future wherein capability blossoms into boundless opportunities, and creativity is aware of no limits.</p> */}
          <p> &emsp; I've worked with all sorts of companies, leveing up my skills and teaming up with smart people.
            Here's the rundown:</p>
        </div>

        <div className='mt-12 flex'>
          <VerticalTimeline>
            {experiences.map((experiences) => (
              <VerticalTimelineElement
                key={experiences.company_name}
                date={experiences.date}
                icon={
                  <div className='flex justify-center items-center w-full h-full'>
                    <img src={experiences.icon}
                      alt={experiences.company_name}
                      className='w-[60%] h-[60%] object-contain'
                    />
                  </div>
                }
                iconStyle={{ background: experiences.iconBg }}
                contentStyle={{
                  borderBottom: '8px',
                  borderStyle: 'solid',
                  borderBottomColor: experiences.iconBg,
                  boxShadow: 'none'
                }}  

              >
                <div>
                  <h3 className='text-black text-xl font-poppins font-semibold'>
                    {experiences.title}
                  </h3>
                  <p className='text-black-500 font-medium font-base' style={{ margin: 0 }}>
                    {experiences.company_name}
                  </p>
                </div>

                <ul className='my-5 list-disc ml-5 space-y-2'>
                  {experiences.points.map((point, index) => (
                    <li key={`experiences-point-${index}`} className='text-black-500/50 font-normal pl-1 text-sm'>
                      {point}
                    </li>
                  ))}

                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <hr className='border-slate-200' />

      <CTA />
    </section>
  )
}

export default About