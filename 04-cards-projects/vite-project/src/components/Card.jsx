import React from 'react'
import {Bookmark} from 'lucide-react'

const Card = (props) => {
  console.log(props.company)
  return (
    <div>
      <div className='card'>
            <div>
                <div className='top'>
                {/* {props.imgSrc && <img src={props.imgSrc}/>}
                {props.imgSrc1 && <img  src={props.imgSrc1}/>} */}
                <img src={props.brandlogo} />
                <button >Save <Bookmark /> </button>
              </div>
              <div className="center">
            <h3>{props.company} <span>{props.dateposted}</span></h3>
            <h2>{props.post}</h2>
            <div className="tag">
              <h4>{props.tag1}</h4>
              <h4>{props.tag2}</h4>
            </div>
              </div>
            </div>
            <div className="bottom">
           <div>
              <h3>${props.pay}/hour</h3>
              <p>Mumbai, India</p>
           </div>
            <button>Apply Now</button>
            </div>
            </div>
    </div>
  )
}

export default Card
