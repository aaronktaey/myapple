import "./Contents.css"
import { Link } from "react-router-dom";

function Contents() {
  return (
    <div id="contents" className="contents-container">
      <div className="contents-item">
        <Link to="/post/#{postid}">
          게시글1
        </Link>
      </div>
      <div className="contents-item">
        <Link to="/post/#{postid}">
          게시글2
        </Link>
      </div>
      <div className="contents-item">
        <Link to="/post/#{postid}">
          게시글3
        </Link>
      </div>
      <div className="contents-item">
        <Link to="/post/#{postid}">
          게시글4
        </Link>
      </div>
      <div className="contents-item">
        <Link to="/post/#{postid}">
          게시글5
        </Link>
      </div>
    </div>
  );
}

export default Contents;
