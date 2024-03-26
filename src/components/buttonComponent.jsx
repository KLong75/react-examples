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

export default function ButtonComponent({ name, instrument }) {

  const buttonClick = () => {
    if (name === "Axl") {
      alert("Axl is the lead singer in Guns N'Roses.");
    } else if (name === "Slash" || name === "Duff") {
      alert(`${name} plays ${instrument} in Guns N' Roses.`);
    } else {
      alert(
        `${name} played ${instrument} in the original Guns N' Roses lineup.`
      );
    }
  };

  return (
      // we only have to write the button once and we can reuse it as many times as we want
      <button 
        onClick={buttonClick}
      >{name}
      </button>
  );
}
