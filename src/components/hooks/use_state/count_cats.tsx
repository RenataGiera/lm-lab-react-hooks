import { useState } from "react";

interface CountCatsProps {
  cats: number;
  catsIcon: "🐈";

}
export const CountCats : React.FC<CountCatsProps> = (props) => {
  const [cats, setCats] = useState(props.cats);

  const incrementCats = () => {
    setCats(cats + 1);
  };
  const catsIcon = [];
  for (let i=0; i<cats; i++) {
    catsIcon.push(props.catsIcon);
  }

  return (
    <>
      <h2>useState</h2>
      <p className="cat">
        {cats}, {catsIcon.join(' ')}
      </p>
      <button onClick={incrementCats}>There are ... {cats} 🥳</button>
    </>
  );
}
