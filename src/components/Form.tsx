import React, { useState } from 'react';
import TextField from '../styled-components/TextField';
import Paper from '../styled-components/Paper';
import Button from '../styled-components/Button';

const Form: React.FC = () => {
  const [battleTag, setBattleTag] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <Paper>
      <form onSubmit={handleSubmit}>
        <TextField
          value={battleTag}
          onChange={e => setBattleTag(e.target.value)}
          placeholder="Battle Tag"
        />
        <Button type="submit">Search</Button>
      </form>
    </Paper>
  );
};

export default Form;
