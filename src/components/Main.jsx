import '../styles/main.css';
import victorPicture from "../assets/images/image-victor.jpg"

export default function Main() {
    return (
        <div className="background-wrapper">
            
            <div className="card">
                
                <div className="header-card">
                    <img src={victorPicture} alt="victor picture" className="profile-image"/>
                </div>

                
                
                <div className="body-card">
                    <div className="main-infos-profile">
                        <h1>Victor Crest<span id="age-info">26</span></h1>
                        <p>London</p>
                    </div>
                
                    <div className="stats-info">
                        <div className="stat-item">
                            <span className="nums-infos">80K</span>
                            <span className="text-info">Followers</span>
                        </div>
                        <div className="stat-item">
                            <span className="nums-infos">803K</span>
                            <span className="text-info">Likes</span>
                        </div>
                        <div className="stat-item">
                            <span className="nums-infos">1.4K</span>
                            <span className="text-info">Likes</span>
                        </div>
                    </div>
            
                </div>
            
            </div>
        
       
        </div>
    )
}

