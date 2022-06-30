import standAlone from "../images/standsome-logo.webp"
import happyGun from "../images/happygun.jpg"
import kanuda from "../images/kanuda.webp"
import vivo from "../images/vivo.png"
import bobo from "../images/bobo.webp"
import gymstar from "../images/gymstar.webp"
import intelliroll from "../images/intelliroll.webp"
export default function Partners() {
  return (
    <div className="partners">
      <h2>Partners</h2>
      <div className='partners-grid'>
        <a  href="https://standsome.ca/" target="_blank" rel="noopener noreferrer" className="partner">
          <img src={standAlone} alt="stand Alone" />
          <span>Code: REHAB15 for 15% off</span>
        </a>
        <a  href="https://gohappygun.com/discount/reachrehab" target="_blank" rel="noopener noreferrer" className="partner">
          <img src={happyGun} alt="happy gun" />
          <span>Code: REACHREHAB for $50 off</span>
        </a>
        <a  href="https://kanudausa.com/collections" target="_blank" rel="noopener noreferrer" className="partner">
          <img src={kanuda} alt="kanuda pillow" />
          <span>Code: REACHREHAB15 for 15% off</span>
        </a>
        <a  href="https://www.vivobarefoot.com/us/?awc=7789_1641997073_427bd90586f61538746f74d7f42d2b23&source=aw" target="_blank" rel="noopener noreferrer" className="partner">
          <img src={vivo} alt="vivo barefoot" />
          <span>Code: REACHREHAB for 10% off</span>
        </a>
        <a  href="https://bobo-balance.shop/products/bobo-balance-board" target="_blank" rel="noopener noreferrer" className="partner">
          <img src={bobo} alt="bobo balance" />
          <span>Code: REACHREHAB for $20 off</span>
        </a>
        <a  href="https://bit.ly/3HtxqQu" target="_blank" rel="noopener noreferrer" className="partner">
          <img src="https://legionathletics.com/wp-content/themes/legion-2017/images/2017-images/2020-legion-logos/legion-logo-2020.png" alt="legion supplenments" />
          <span>Code: REACHREHAB for 20% off</span>
        </a>
        <a  href="https://www.gymstar.ca/product-category/better-bodies/womens/?ref=kristibarker" target="_blank" rel="noopener noreferrer" className="partner">
          <img src={gymstar} alt="gym star" />
        </a>
        <a  href="https://intelliroll.com/?rfsn=4761544.954858" target="_blank" rel="noopener noreferrer" className="partner">
          <img src={intelliroll} alt="intelliroll" />
        </a>
      </div>
    </div>
  )
}
