import React from "react";
import styled from 'styled-components'

let 박스 = styled.div`
    margin-top: 50px;
    padding: 20px;
    width: 100%;
    background-color: rgb(221, 220, 220);
`;
export default function Footer(){
    return(
        <div>
            <박스>
                <h1>MY-SHOP</h1>
                <p>
                    대표자 : 김상곤 | 사업자등록번호 214-86-26812<br/>
                    통신판매업신고 강남13717호 | 판매등록번호 : 강남 제 1101호<br/>
                    주소 : 서울시 강남구 역삼동 815-4 만이빌딩 5층, 10층<br/>
                    COPYRIGHT © 2019 GITACADEMY
                </p>
            </박스>

        </div>
    )
}