import Header from './components/Header';
import './MarketLinkage.css'
import banner from './banner.png';
import  {Marketprodetail} from './components/Marketprolist';


function MarketLinkage() {

    return (
 <>
   <Header/>
  <div className="banner">
  	<img src={banner} alt="banner"/>
  	</div>
    <div className="service_area">
  		<h3>Trending Products</h3>
      <Marketprodetail />  
  	</div>
 </>
    );
  }

  export default MarketLinkage;
