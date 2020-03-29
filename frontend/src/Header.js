import React from 'react';

export default function Header({ children }) { /* propridade */
    return (
      <header>
          <h1>{children}</h1> {/* sempre que quiser injetar uma variável, função javascript dentro do html do componente, usa chaves*/}
      </header>
    );
  }

 