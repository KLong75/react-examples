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
