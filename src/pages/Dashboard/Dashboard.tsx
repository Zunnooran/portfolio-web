import { Helmet } from "react-helmet";

import { headerData } from "../../data/headerData";
import { Navbar } from "../../components";

function Dashboard() {
  return (
    <>
      <Helmet>
        <title>{headerData.name} - Porfolio</title>
      </Helmet>
      <Navbar />
      {/* <Landing />
      <About />
      <Skills />
      <Education />
      <Projects />
      <Achievement /> */}
      {/* <Blog /> */}
      {/* <Contacts /> */}
      {/* <Footer /> */}
    </>
  );
}

export default Dashboard;
