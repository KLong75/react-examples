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
      <button 
        onClick={buttonClick}
      >{name}
      </button>
  );
}
