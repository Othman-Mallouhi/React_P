import axios from 'axios';
import './SocialMedia.css'
import { useEffect, useState } from 'react';


const SocialMedia = () => {

  const [social, setSocial] = useState([]);

  useEffect(() => {
    axios.get("js/data.json")
    .then((res) => {
      console.log(res.data.social)
      setSocial(res.data.social)
    })
    .catch(err => console.log(err))
  }, []);

  return (
<div className="social-media">
    {social.map((socialItem) => (
      <div className="social" key={socialItem.id} style={{
        background: socialItem.id === 1 ? '#3b5998' : socialItem.id === 2 ? '#498cbf' : socialItem.id === 3 ? '#cc2127' : ''
      }}>
          <i className={socialItem.icon}></i>
          <p>
              <span className="info1">{socialItem.title}</span>
              <span className="info2">{socialItem.body}</span>
          </p>
      </div>
    ))}

</div>
  )
}

export default SocialMedia
