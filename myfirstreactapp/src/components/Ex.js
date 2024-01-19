import { memo, useState } from 'react';
import Greeting from './Greeting';

function Ex() {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    return (
      <>
        <label>
          Name{': '}
          <input value={name} onChange={e => setName(e.target.value)} />
        </label>
        <label>
          Address{': '}
          <input value={address} onChange={e => setAddress(e.target.value)} />
        </label>
        <Greeting1 name={name} />
      </>
    );
  }
  
  const Greeting1 = memo(Greeting);

  export default Ex;
