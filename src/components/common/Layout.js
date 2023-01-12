import { useEffect, useRef } from 'react';

function Layout({ name, children }) {
  const innerRef = useRef(null);
  useEffect(() => {
    innerRef.current.classList.add('on');
  }, []);
  return (
    <section className={`content ${name}`}>
      <figure></figure>
      <div className='inner' ref={innerRef}>
        <h1>{name}</h1>
        {children}
      </div>
    </section>
  );
}

export default Layout;
