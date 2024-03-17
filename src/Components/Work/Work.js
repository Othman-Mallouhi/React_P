import './Work.css'
import { useEffect, useState } from 'react';
import axios from 'axios';

const Work = () => {

  const [work, setWork] = useState([]);

  useEffect(() => {
    axios.get("js/data.json")
    .then((res) => {
      console.log(res.data.works)
      setWork(res.data.works)
    })
    .catch(err => console.log(err))
  }, []);

  return (
  <div className="work">
      <div className="container">
          <h2 className="work-title"><span>My</span> Work</h2>
          {/* <WorkPart first={workItem.id} key={workItem.id}> */}
          {work.map(workItem => (
            <div className="part" key={workItem.id} style={{
              marginLeft: workItem.id == "1" ? "0" : "5%"
            }}>
                <i className={workItem.icon_name}></i>
                <h4 className="part-title">{workItem.title}</h4>
                <hr className="line"/>
                <p className="part-desc">
                  {workItem.body}
                </p>
            </div>
          ))}
      </div>
  </div>
  )
}

export default Work
