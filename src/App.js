import { useState } from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  background-color: grey;
  color: white;
`;

let post = "강남우동맛집";

function App() {
  let [글제목, b] = useState(["여자코드추천", "강남맛집추천", "리액트독학"]);

  return (
    <div className="App">
      <StyledDiv className="Header">
        <h4>여기는 헤더</h4>
        <div className="Navbar">
          <nav>
            여기는 네브바!
            <ul>
              <li>About</li>
              <li>Shop</li>
              <li>Contact</li>
            </ul>
          </nav>
        </div>
      </StyledDiv>
      <div className="Contents">
        <h4>{글제목[0]}</h4>
        <p>진짜 이쁜 코트</p>
        <button>자세히</button>
      </div>
      <div className="Contents">
        <h4>{글제목[1]}</h4>
        <p>삼겹살 맛집 등장</p>
        <button>자세히</button>
      </div>
      <div className="Contents">
        <h4>{글제목[2]}</h4>
        <p>useState가 뭐여</p>
        <button>자세히</button>
      </div>
      <div className="Footer">여기는 푸터</div>
    </div>
  );
}

export default App;
