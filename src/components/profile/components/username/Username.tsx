import './Username.scss';

import { useEffect, useRef, useState } from 'react';

type Props = {
  username: string;
};

const Username = ({ username }: Props) => {
  const usernameContainerRef = useRef<HTMLDivElement>(null);
  const usernameRef = useRef<HTMLSpanElement>(null);
  const [usernameOverflow, setUsernameOverflow] = useState(false);
  const marqueeClass = usernameOverflow ? 'marquee' : '';

  useEffect(() => {
    if (usernameContainerRef.current && usernameRef.current) {
      setUsernameOverflow(usernameContainerRef.current.clientWidth < usernameRef.current.scrollWidth);
    }
  }, [usernameContainerRef?.current?.scrollWidth, usernameRef?.current?.scrollWidth]);

  return (
    <div
      className='username'
      style={{ display: usernameOverflow ? 'block' : 'flex' }}
      ref={usernameContainerRef}>
      <div className={['username-text', marqueeClass].join(' ')}>
        <span ref={usernameRef}>{username}</span>
        {usernameOverflow && <span>{username}</span>}
      </div>
    </div>
  );
};

export default Username;
