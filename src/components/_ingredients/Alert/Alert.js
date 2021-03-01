import { useState } from 'react';
import { Button } from "@chakra-ui/react"

import Form from '@components/Form';
import FormRow from '@components/FormRow';

import styles from './Alert.module.scss';

const Alert = ({ id, method = 'alert', message, label }) => {
  const [count, setCount] = useState(0);
  const [answer, setAnswer] = useState();

  id = id || method;

  function handleOnClick () {
    const result = window[method](message);

    if ( typeof result === 'boolean' ) {
      setAnswer(result ? 'Yes' : 'No');
    } else if ( typeof result === 'string' ) {
      setAnswer(result);
    }
    
    setCount(count + 1)
  }

  return (
    <FormRow>
      <p id={`${id}-button`}>
        <Button colorScheme="blue" onClick={handleOnClick}>
          { label }
        </Button>
      </p>
      <p id={`${id}-count`}>
        Triggered {count} time(s).
      </p>
      {answer && (
        <p id={`${id}-answer`}>
          Answer: { answer }
        </p>
      )}
    </FormRow>
  )
}

export default Alert;