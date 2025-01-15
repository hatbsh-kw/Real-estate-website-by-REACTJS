import React from 'react'
import Bproperty from './Bproperty'
import pimage1 from '../images/p1.png'
import pimage2 from '../images/p2.png'
import pimage3 from '../images/p3.png'
function Properties() {
  return (
    <div className='product'>
        <div className='p-heading'>
            <h3>Properties</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.?</p>
        </div>
      <div className='product-container'>
       <Bproperty image={pimage1} name="Habtamu-Kebede" price="$240.369"/>
       <Bproperty image={pimage2} name="Daniel-Kebede" price="$780.79"/>
       <Bproperty image={pimage3} name="Dibora-Kalid" price="$330.39"/>
      </div>
    </div>
  )
}

export default Properties
