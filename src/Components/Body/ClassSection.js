import React, { Component } from 'react';
import './ClassSection.css';
import GroupPilatesIMG from '../../images/group-pilates.jpg';
import PrivatePilatesIMG from '../../images/private-pilates.png';

class ClassSection extends Component {
  render() {

    return (
      <div id="class-section">
        <h2>OUR CLASSES</h2>
          <div className="flex justify-content__center col-12">
            <div className="column-container col-4">
              <p>
                <em>Group classes<br />(up to 4 people)</em><br /><br />
                Each group class is 1-hour long and provides a safe and in-expensive way to get
                the benefits of a pilates workout but in a friendly group environment.
              </p>
              <img src={GroupPilatesIMG} alt="pilates group class" className="col-12"></img>
            </div>
            <div className="column-container col-4">
              <p>
                <em>Private sessions</em><br /><br />
                A private pilates session benefits from 1-on-1 personalized
                instruction that enables you to get the best out of you body and improve your over-all mobility.<br /><br />
                At your request private sessions can be tailored to 2 people.<br />
                So feel comfortable to bring a friend.
              </p>
              <img src={PrivatePilatesIMG} alt="pilates group class" className="col-12"></img>
            </div>
        </div>
      </div>
    );
  }
}

export default ClassSection;
