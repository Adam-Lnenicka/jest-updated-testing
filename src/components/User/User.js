import React, { forwardRef, useEffect, useState } from "react";

import fetchAuthors from "./_fetchUsers";

const User = forwardRef(({ disabled }, ref) => {
  const [authors, setAuthors] = useState(null);

  useEffect(() => {
    fetchAuthors().then((authors) => {
      setAuthors(authors);
    });
  }, []);

  return (
    <div disabled={disabled || !authors} name="plan" ref={ref}>
      {!authors ? (
        <div value="">Loading...</div>
      ) : (
        <div className="flex">
          {authors.map(({ id, name, email, username }) => (
            <div key={id} value={id} className="card">
              <h2>User: {name}</h2>
              <p>Email: {email}</p>
              <p>Username: {username}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
});

export default User;
