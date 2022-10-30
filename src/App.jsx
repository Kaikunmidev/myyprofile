import react from 'react'
import ava from "../src/assets/share.png"
import ava2 from "../src/assets/share 2.png"
import pic from "../src/assets/pic.png"
import git from "../src/assets/git.png"
import red from "../src/assets/dot.png"
import ingree from "../src/assets/ingress.png"
import slack from "../src/assets/slack.png"

import './App.css'



function App() {
  return (
    <div className='container'>
      <div className="main_page">
        <div className="both">
            <div className="sharre">
      <img className='Share' src={ava} alt="" />      
      </div>
      <div className="sharee2">
      <img className='Share2' src={ava2} alt="" />
      </div>
        </div>
    
        <div id= 'profile'>
          <img src={pic} id='profile_img' alt=""  style={{height:"20vh"}}/>
          <h4 id='twitter'>Folorunsho kaikunmi</h4>
          <h5 id='slack'></h5>
        </div>
        <div className="links">
        <div className="input_link">
          <button id='btn_twitter' > <a href="https://twitter.com/thezuriteam">Twitter Link</a></button><br />
          <button id='btn_zuri' > <a href="https://books.zuri.team">Zuri Team</a></button><br />
          <button id='books' > <a href="https://books.zuri.team">Zuri Books</a></button><br />
          <button   id='book_phyton'> <a href="https://books.zuri.team">Phyton Books</a></button><br />
          <button id='pitch' > <a href="https://background.zuri.team">Background check for coders</a></button><br />
          <button id='book_design' > <a href="https://books.zuri.team/design-rules">Design Books</a></button><br />
          
        </div>
        </div>
        <div className="footer1">
          <img className='picccccS' src={slack} alt="" />
        <img src={git} className="picture2" alt="" />
        </div>
        <div className="footer2">
          <footer>
            <h5 className='zuri'>Zuri<img src={red} alt="" className='red' style={{height:"1vh"}}/>Internship</h5>
            <p className="front">HNG Internship 9 Frontend Task</p>
            <div className='ingggg'>
            <img src={ingree} alt=""  />
            </div>
          </footer>
        </div>
      </div>
    </div>
  )
}

export default App



