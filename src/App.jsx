import react from 'react'
import pic from "../src/assets/kai.png"
import git from "../src/assets/git.png"
import red from "../src/assets/reddot.png"
import ingree from "../src/assets/ingree.png"
import './App.css'



function App() {
  return (
    <div className='container'>
      <div className="main_page">
        <div className="picturepage">
          <img src={pic} className="picture" alt=""  style={{height:"20vh"}}/>
          <h4 className="name">Folorunsho kaikunmi</h4>
        </div>
        <div className="links">
        <div className="input_link">
          <button > <a href="https://twitter.com/thezuriteam">Twitter Link</a></button><br />
          <button > <a href="https://www.linkedin.com/company/zuri-team/?originalSubdomain=ng">Zuri Team</a></button><br />
          <button > <a href="https://www.nairaland.com/6704625/b-zuri-intenship-training-b">Zuri Books</a></button><br />
          <button > <a href="https://medium.com/javarevisited/my-favorite-books-to-learn-python-in-depth-77465633b46e">Phyton Books</a></button><br />
          <button > <a href="https://training.zuri.team/">Background check for coders</a></button><br />
          <button > <a href="https://www.w3schools.com/">Design Books</a></button><br />
        </div>
        </div>
        <div className="footer1">
        <img src={git} className="picture2" alt="" style={{height:"3vh"}}/>
        </div>
        <div className="footer2">
          <footer>
            <h5 className='zuri'>Zuri<img src={red} alt="" className='red' style={{height:"1vh"}}/>Internship</h5>
            <p className="front">HNG Internship 9 Frontend Task</p>
            <div className='ingggg'>
            <img src={ingree} alt="" style={{height:"8vh"}} />
            </div>
          </footer>
        </div>
      </div>
    </div>
  )
}

export default App



