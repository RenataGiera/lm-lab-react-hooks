import React, { useState, useEffect } from 'react';

type Todo = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  };

export const APICall = () => {
  const [json, setJson] = useState<Todo | null>(null);

  useEffect(() => {
    const jsonTodo = 'https://jsonplaceholder.typicode.com/todos/1';

    const fetchTodo = async (apiEndPoint:string) => {
      try {
        const response = await fetch(apiEndPoint);
        const jsonData = await response.json();
        setJson(jsonData as Todo); 
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchTodo(jsonTodo);
  }, []); 

  return (
    <div>
      
        <div>
            <h2>useEffect</h2>
            <p>Your todo here!</p>
            {json ? ( 
            <>
            <p>userId: {json.userId}</p>
            <p>Id: {json.id}</p>
            <p>Title: {json.title}</p>
            <p>Completed: {json.completed ? 'Yes' : 'No'}</p>
            </>
            ) : (
                <p>Todo data not available</p>
            )}
        </div>
    </div>
  );
};



