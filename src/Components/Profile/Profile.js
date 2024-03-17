import axios from 'axios';
import './Profile.css'
import { useEffect, useState } from 'react';

const Profile = () => {

  const [profile, setProfile] = useState([]);

  useEffect(() => {
    axios.get("js/data.json")
    .then((res) => {
      console.log(res)
      setProfile(res.data.profile)
    })
    .catch((err) => {
      console.log(err)
    })
  }, []);

  return (
<div className="profile_skills">
    <div className="container">
        <div className="profile">
            <h2 className="profile-title"><span>My </span>Profile</h2>
            <ul className="profile-list">
                <li className="profile-item">
                    <span>Name</span>
                    Hamza Nabil
                </li>
                <li className="profile-item">
                    <span>Birthday</span>
                    21/1/1996
                </li>
                <li className="profile-item">
                    <span>Address</span>
                    Ain shams
                </li>
                <li className="profile-item">
                    <span>Phone</span>
                    4444 5555 6666
                </li>
                <li className="profile-item">
                    <span>Email</span>
                    hamza@hamza.com
                </li>
                <li className="profile-item">
                    <span>Website</span>
                    <span className="web">www.google.com</span>
                </li>
            </ul>
        </div>
        
        <div className="skills">
            <h2 className="skills-title">Some <span>skills</span></h2>
            <p className="skills-desc">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
            </p>

            {profile.map((item) => (
              <div className="bar" key={item.id}>
                  <span className="title">{item.title}</span>
                  <span className="perc">{item.percentage}</span>
                  <div className="parent">
                      <span className="sp1" style={{
                        width: item.id === 2 ? "90%" : item.id === 3 ? "80%" : "100%"
                      }}>
                      </span>
                  </div>
              </div>
            ))}
        </div>
    </div>
</div>
  )
}

export default Profile
