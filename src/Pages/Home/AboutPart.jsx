const AboutPart = () =>{
    return (

      <section class="about-section">
        <div className="about-textbox">
          <h2>About us:</h2>
        </div>
        <div className="container">
          <div className="card">
            <div class="card-details">
              <h3 class="card-title">MISSION</h3>
              <p class="card-description">
                To foster a community of technology enthusiasts who are
                dedicated to learning, sharing, and innovating in the field of
                technology. We aim to provide resources, opportunities, and a
                supportive environment where members can enhance their technical
                skills, collaborate on projects, and stay abreast of the latest
                industry trends.
              </p>
            </div>
          </div>

          <div className="card">
            <div class="card-details">
              <h3 class="card-title">VISION</h3>
              <p class="card-description">
                To cultivate an environment where passionate individuals come
                together to explore and advance the field of technology. We
                strive to become an inspiration and a hub of excellence where
                members can unlock their potential and contribute to the global
                tech ecosystem.
              </p>
            </div>
          </div>

          <div className="card">
            <div class="card-details">
              <h3 class="card-title">OBJECTIVE</h3>
              <p class="card-description">
                To offer workshops, coding boot camps, and seminars to enhance
                members' technical skills in areas such as programming,
                cybersecurity, data science,ets. and to facilitate connections
                between members and industry professionals through events, guest
                speaker sessions, and partnerships with tech companies.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
       
};
export default AboutPart;