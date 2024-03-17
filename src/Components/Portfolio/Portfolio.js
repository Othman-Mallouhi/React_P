import './Portfolio.css'
import axios from 'axios'
import { useEffect, useState } from 'react'

const Portfolio = () => {
const [images, setImages] = useState([]);

    const PortfolioImages = images.map((item) => (
        <div key={item.id}>
            <img src={item.image} alt="" />
            <p className="overlay">
                <span>
                    Show Image
                </span>
            </p>
        </div>
    ))

  useEffect(() => {
    axios.get("js/data.json")
    .then((res) => {
        console.log(res.data.portfolio)
        setImages(res.data.portfolio)
    })
    .catch((err) => {console.log(err)})
  }, []);

  return (
<div className="portfolio">
    <h2 className="portfolio-title"><span>My</span> Portfolio</h2>
    <ul className="portfolio-list">
        <li className="portfolio-item active">All</li>
        <li className="portfolio-item">HTML</li>
        <li className="portfolio-item">Photoshop</li>
        <li className="portfolio-item">Wordpress</li>
        <li className="portfolio-item">Mobile</li>
    </ul>

    <div className="box">
        {PortfolioImages}
    </div>

</div>
  )
}

export default Portfolio
