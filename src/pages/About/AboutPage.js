// src/pages/about/AboutPage.js
import React from 'react';
import './AboutPage.css'; // Import the CSS file
import { Card, CardBody, CardTitle, CardText, CardSubtitle } from 'reactstrap'; // Import Bootstrap Card components

const AboutPage = () => {
  // Sample data for four individuals
  const teamMembers = [
    { name: 'FITRIAWAN ARYA NUGRAHA', nim: '21120120140153' },
    { name: 'DONNY RIDWAN SETIAWAN', nim: '21120120130083' },
    { name: 'AGGY ACHYA FADHLIKA', nim: '21120120140119' },
    { name: 'LINTANG FADHILLAH HAIKAL', nim: '21120120140121' },
  ];

  return (
    <div className="about-container text-center">
      <h2 className="about-heading">About Us</h2>
      <p>
        Kami seorang developer handal yang akan menyaingi ikamers Tokopaedi.
        Silahkan berbelanja karna pasti anda butuh kalo nggak butuh ya sudah.
      </p>

      {/* Cards for each team member */}
      <div className="row-cards">
        {teamMembers.map((member, index) => (
          <div key={index} className="card-col about-card"> {/* Added 'about-card' class */}
            <Card className="rounded about-card"> {/* Added 'about-card' class */}
              <CardBody>
                <CardTitle>{member.name}</CardTitle>
                <CardSubtitle>NIM: {member.nim}</CardSubtitle>
                <CardText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </CardText>
              </CardBody>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutPage;
