export const Person = ({ person }) => {
  const { name, age, isMarried, partnerName, sex } = person;

  const partnerRole = sex === 'm' ? 'wife' : 'husband';
  const partnerMessage = isMarried
    ? `${partnerName} is my ${partnerRole}`
    : 'I am not married';

  return (
    <div className="App">
      <section className="Person">
        <h2 className="Person__name">My name is {name}</h2>
        {age && <p className="Person__age">I am {age}</p>}
        <p className="Person__partner">{partnerMessage}</p>
      </section>
    </div>
  );
};
