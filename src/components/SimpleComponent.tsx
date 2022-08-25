import * as React from "react";
interface Props {
  name?: string | number;
  age: number;
  children: React.ReactNode;
}

interface Props2 extends Props {
  address: string;   


  
}
// type Props3<T = unknown> = T & { surname: string };
function SimpleComponent(props: React.PropsWithChildren<Props>) {
  const { name, age } = props;
  //   const a : Props3<Props> = {}

  const f = (age: number, time: number): number => {
    return 1;
  };

  return (
    <div>
      <p>{name}</p>
      <p>{age?.toString()}</p>
      <p>{age}</p>
      <p>{props.children}</p>
    </div>
  );
}

export default SimpleComponent;
