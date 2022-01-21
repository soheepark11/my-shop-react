import React from "react";
import styled from 'styled-components'

let 박스 = styled.div`
    background-image: url('./background.jpg');
    background-size: cover;
    color: #fff;
    height: 700px;
    padding: 200px;
`;

export default function Main(){
    return(
        <div>
            <박스>
                <h1>20% season off</h1>
                <p>가볍고 뛰어난 신축성의 테니스 스타일링으로 코트 위의 퍼포먼스를 더욱 높여보세요.</p>
                <p>
                    <button>learn more</button>
                </p>
            </박스>

          
        </div>
    )
}