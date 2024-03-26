// in class we had the following code showing a series of buttons

        // <button
        //   onClick={() => welcomeStudent("Mary")}
        //   className="list-group-item list-group-item-action">
        //   Mary
        // </button>

        // <button
        //   onClick={() => welcomeStudent("Cole")}
        //   className="list-group-item list-group-item-action">
        //   Cole
        // </button>

        // <button
        //   onClick={() => welcomeStudent("Rebecca")}
        //   className="list-group-item list-group-item-action">
        //   Rebecca
        // </button>

// with React, we can make our own custom button component and give it the data it needs to do the job we want it to do
// this saves us frm having to write out the same code over and over again and gives us a reusable component that we can use
// elsewhere in our application

// two ways to pass data to a component are displayed on the sampe page below

// import components
import ButtonComponent from "../components/buttonComponent";
// import data
import gunsNRoses from "../lib/gunsNRoses";

export default function SamplePage() {
  return (
    <div>
      <h1>React Examples</h1>
      <h2>Buttons</h2>

        <div>
          <h3> Using props with buttons</h3>
          <ButtonComponent name="Axl" />
          <ButtonComponent name="Slash" instrument="guitar" />
          <ButtonComponent name="Duff" instrument="bass" />
          <ButtonComponent name="Izzy" instrument="guitar" />
          <ButtonComponent name="Steven" instrument="drums" />
        </div>

        <div>
          <h4>Using data with buttons</h4>
          {gunsNRoses.bandMembers.map((member, index) => (
            <ButtonComponent
              key={index}
              name={member.name}
              instrument={member.instrument}
            />
          ))}
        </div>

    </div>
  );
}
