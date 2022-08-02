import { useState } from "react";
import Button from "storybook-learn-ui-kit/lib/components/button";

const types = ["primary", "secondary", "tertiary"];

export const App = () => {
  const [type, setType] = useState("secondary");
  const [count, setCount] = useState(0);

  return (
    <Button
      width={200}
      variant={type}
      onClick={() => {
        setType(types[Math.floor(Math.random() * types.length)]);
        setCount((c) => c + 1);
      }}>
      Count {count}
    </Button>
  );
};

export default App;
