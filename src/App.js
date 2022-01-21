import './App.css';
import { useState } from 'react';
import Data from "./data.js";
import Detail from './components/Detail';
import { Link , Route , Switch } from 'react-router-dom';
import { Button  } from 'react-bootstrap';
import Footer from './components/Footer';
import Top from './components/Top';
import Main from './components/Main';

function App() {

  //데이터 바인딩
  let [ shoes , shoes변경 ] = useState(Data);
  let [누른제목, 누른제목변경] = useState(0);

  return (
    <div className="App">
      <Top />
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/detail">
              <Detail shoes={shoes} />
        </Route>

      </Switch>
{/* 가로 3분할 */}
<button onClick={ () => {} }>버튼1</button>
<button onClick={ () => {} }>버튼2</button>
<button onClick={ () => {} }>버튼3</button>
<div className='container'>
              <div className='row'>
                {
                  shoes.map((a,i)=>{
                    return <Card shoes={shoes[i]} i={i} key={i} />
                  })
                }
              </div>
          </div>
      <Footer />





    </div>
  );
}


function Card(props){
  return(
    <div>
        <div className='col-md-4'>
          <img src={ 'https://codingapple1.github.io/shop/shoes' + ( props.i + 1 ) +'.jpg' } width="100%" />
          <h4>{props.shoes.title}</h4>
          <p>상품 설명 : {props.shoes.content}</p>
          <p>가격 : {props.shoes.price}</p>
        </div>
    </div>
  )
}

export default App;
