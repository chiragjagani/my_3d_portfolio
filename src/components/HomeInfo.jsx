import { Link } from "react-router-dom"
import { arrow } from "../assets/icons"


const InfoBox = ({ text, link, btnText,anotxt }) => (
    <div className="info-box">
        <p className="font-medium sm:text-xm text-center sm:leading-snug text-white mx-5">{text}<br />
        {anotxt}
        </p>
        <Link to={link} className="neo-brutalism-white neo-btn">
            {btnText}
            <img src={arrow} className="w-4 h-4 object-contain" />
        </Link>
    </div>
)

const renderConternt = {
    1: (
        <h1 className="sm:text-xm sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
            Hi, I am<span className="font-semibold mx-2 text-white">Chirag Jagani</span>👋
            <br />
            A Computer Engineer from India
            <img src="" alt="" />
        </h1>
    ),
    2: (
        <InfoBox
            text="I'm an undergraduate student. and picked up many skills along the way."
            // anotxt="and picked up many skills along the way."
            link="/about"
            btnText="Learn more"
        />
    ),
    3: (
        <InfoBox
            text="Led multiple projects to success over the years. Curious about the impact?"
            // anotxt="Curious about the impact?"
            link="/projects"
            btnText="Visit my protfolio"
        />
    ),
    4: (
        <InfoBox
            text="Need a project done or looking for a dev? I'm jut a few keystrokes away"
            // anotxt="I'm jut a few keystrokes away"
            link="/contact"
            btnText="Let's talk"
        />
    )
}

const HomeInfo = ({ currentStage }) => {
    return renderConternt[currentStage] || null
}

export default HomeInfo