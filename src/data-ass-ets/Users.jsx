import React, { useState, useEffect } from 'react';

function Users(){
// Initialize state with data from local storage or default to an empty string
 //This what it does is have the state of user bethel either be whats in local storage, or be its initial value
  const [bethel, setBethel] = useState(localStorage.getItem('bethel') || {
    'username': 'bethelstie',
    'height': '',
    'weight':'',
    
  });

  // Use useEffect to update local storage whenever the state changes
  useEffect(() => {
    localStorage.setItem('name', name);
  }, [name]);

  return name;
}

export default Users;