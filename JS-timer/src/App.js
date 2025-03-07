import { useState, useEffect } from "react";
import Container from "./components/Container/Container";
import FormattedTime from "./components/FormattedTime/FormattedTime";
import Button from "./components/Button/Button";

const App = () => {

  const [time, setTime] = useState(0);
  const [timer, setTimer] = useState(false);

  useEffect(() => {
    let intervalId;
    if (timer) {
      intervalId = setInterval(() => { setTime(prevValue => prevValue + 10) }, 1);
    }
    return () => intervalId && clearInterval(intervalId);
  }, [timer]);

  const handleStart = () => !timer && setTimer(true);

  const handleStop = () => timer && setTimer(false);

  const handleReset = () => {
    handleStop();
    setTime(0);
  };

  return (
    <Container>
      <FormattedTime time={time} />
      <Button
        start={handleStart}
        stop={handleStop}
        reset={handleReset} />
    </Container>
  );
};

export default App;
