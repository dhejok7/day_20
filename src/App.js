// Submit on Day 20 task
// import Free from "./component/Free";
// import Plus from "./component/Plus";
// import Pro from "./component/Pro";
import Card from "./component/Card";
import React from "react";
function App() {
  let plans = [
    {
      plan: "FREE",
      price: 0,
      user: "single",
      userEnabler: true,
      storage: "5GB Storage",
      storageEnabler: true,
      publicProjects: "Unlimited Public Projects",
      publicProjectsEnabler: true,
      community: "Community Access",
      communityEnabler: true,
      privateProjects: "Unlimited Private Projects",
      privateProjectsEnabler: false,
      support: "Dedicated Phone Support",
      supportEnabler: false,
      domain: "Free Subdomain",
      domainEnabler: false,
      report: "Monthly Status Reports",
      reportEnabler: false,
    },
    {
      plan: "PLUS",
      price: 9,
      user: "single",
      userEnabler: true,
      storage: "5GB Storage",
      storageEnabler: true,
      publicProjects: "Unlimited Public Projects",
      publicProjectsEnabler: true,
      community: "Community Access",
      communityEnabler: true,
      privateProjects: "Unlimited Private Projects",
      privateProjectsEnabler: true,
      support: "Dedicated Phone Support",
      supportEnabler: true,
      domain: "Free Subdomain",
      domainEnabler: true,
      report: "Monthly Status Reports",
      reportEnabler: false,
    },
    {
      plan: "PRO",
      price: 49,
      user: "single",
      userEnabler: true,
      storage: "5GB Storage",
      storageEnabler: true,
      publicProjects: "Unlimited Public Projects",
      publicProjectsEnabler: true,
      community: "Community Access",
      communityEnabler: true,
      privateProjects: "Unlimited Private Projects",
      privateProjectsEnabler: true,
      support: "Dedicated Phone Support",
      supportEnabler: true,
      domain: "Free Subdomain",
      domainEnabler: true,
      report: "Monthly Status Reports",
      reportEnabler: true,
    },
  ];
  return (
    <>
      <section className="pricing py-5">
        <div className="container">
          <div className="row">
            {/* Day 20: first session contents */}
            {/* Free Tier */}
            {/* <Free/> */}
            {/* Plus Tier */}
            {/* <Plus/> */}
            {/* Pro Tier */}
            {/* <Pro></Pro>  */}

            {/* Day 21: 2nd session contents */}
            {/* <Card data={plans[0]} />
            <Card data={plans[1]} />
            <Card data={plans[2]} /> */}

            {/* {plans.map((e, i) => {
              return <Card data={e} key={i}/>;
            })} */}

            {plans.map((e, i) => (
              <Card data={e} key={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
