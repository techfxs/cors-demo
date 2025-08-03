import React, { useEffect } from 'react';

export const List: React.FC = () => {
  useEffect(() => {
    console.log('List mounted');

    fetch('http://localhost:3333/api', {
      method: 'GET',
      // Additional headers trigger cors preflight request
      headers: {
         'Content-Type': 'application/json',
        'Authorization': 'Bearer token'
      },
      credentials: 'include' // Include cookies in the request or allow set-cookie in the response
    })
      .then(response => response.json())
      .then(data => console.log(data));

  }, []);

  return (
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>
  );
}
