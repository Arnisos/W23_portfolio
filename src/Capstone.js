import React from 'react';
import "./Capstone.css"
import "./image.jpg"

const Capstone = () => {
  const data = [
    {id: 1, image: "./image.jpg"}
  ]
    return(
        <>
        <div className='main'>
<table className='container'>
      <thead>
        <tr>
          <th>Project Summary</th>
          <th>Project Vision</th>
          <th>Project/Business Requirements</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>To address customer needs of finding a reliable website for traveling including searching places, reviewing places, and watching condition of place, to solve tasks for admins who want to have equivalent dashboard to manage the website properly</td>
          <td>The goal of Travel Advisor is to help travellers find the destinations they wish to visit by providing reviews, pictures, and ratings. It will offer full website discovery, a thorough user experience, innovative design, and a user-friendly interface. In addition, service providers can market their goods and offerings. </td>
          
          <td>
            <ul>
              <li>The application would suggest appropriate travel options to users</li>
              <li>The application would remind users about travel dates</li>
              <li>The application would give revies of all places to users</li>
            </ul>
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colSpan="3">Mock Up</td>
        </tr>
        <tr key={data.id}>
          <td><img src={require('./image.jpg')} alt="" style={{ width: '100%', height: '100%' }} /></td>
          <td><img src={require('./image2.png')} alt="" style={{ width: '100%', height: '100%' }} /></td>
          <td><img src={require('./image3.png')} alt="" style={{ width: '100%', height: '100%' }}/></td>
        </tr>
        <tr>
          <td colSpan="3">Status Report</td>
        </tr>
        <tr>
          <td colSpan={3}>The status of the project is updated on each sprint with the advent of new tasks. At the moment the overall health of the project is Good</td>
        </tr>
        <br></br>
        <tr>
          <td colSpan="3">System Implementation</td>
        </tr>
        <tr>
          <td colSpan="3">Technologies Used: React, Figma for Mockups, MongoDb</td>
        </tr>
        <br></br>
        <tr>
          <td colSpan="3">Link to Project</td>
        </tr>
        <tr>
          <td colSpan={3}><a href="https://github.com/cviennguyen/Capstone-Project-2-Backend">Link</a></td>
        </tr>
      </tfoot>
    </table>
    </div>
    </>
    )
}
export default Capstone;