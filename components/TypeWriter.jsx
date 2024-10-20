'use client';

import Typewriter from 'typewriter-effect';

const TypeWriter = () => {
  return (
    <>
      <Typewriter
        options={{
          strings: ['Fullstack Web', 'Front End', 'Back End'],
          autoStart: true,
          loop: true,
        }}
      />
      <style jsx global>{`
        .Typewriter__cursor {
          color: #b18b64 !important;
        }
      `}</style>
    </>
  );
};

export default TypeWriter;
