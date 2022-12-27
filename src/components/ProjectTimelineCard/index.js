// Write your code here
import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {projectDetails} = props
  const {
    projectTitle,
    imageUrl,
    projectUrl,
    duration,
    description,
  } = projectDetails
  return (
    <div className="project-time-line-container">
      <img src={imageUrl} alt="project" className="project-image" />
      <div className="project-title-duration-container">
        <h1 className="project-heading">{projectTitle}</h1>
        <div className="duration-container">
          <AiFillCalendar color="#171f46" />
          <p className="time-interval">{duration}</p>
        </div>
      </div>
      <p className="project-description">{description}</p>
      <a className="visit-link" href={projectUrl}>
        Visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard
