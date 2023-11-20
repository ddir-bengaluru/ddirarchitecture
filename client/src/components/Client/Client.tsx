import React, { useEffect, useState } from 'react';
import { endpoint } from '../../Utils/Utils';
import './clients.scss';
import { useNavigate } from 'react-router-dom';

interface Client {
  client_name: string[];
}

export default function Clients() {
  const [clients, setClients] = useState<Client[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchClients() {
      try {
        const response = await fetch(endpoint + 'allClients');
        if (!response.ok) {
          throw new Error('Failed to fetch clients');
        }
        const data = await response.json();

        // Use Set to filter out duplicate client names
        const uniqueClientNamesSet = new Set<string>();
        const filteredData = data.filter((client: string[]) => {
          const clientName = client[0];
          if (!uniqueClientNamesSet.has(clientName)) {
            uniqueClientNamesSet.add(clientName);
            return true;
          }
          return false;
        });

        setClients(filteredData.map((client_name: string[]) => ({ client_name })));
        setLoading(false);
      } catch {
        navigate('/404-not-found');
      }
    }

    fetchClients();
  }, []);

  const flattenClientNames = (clients: Client[]) => {
    return clients.reduce((flattenedClients: string[], client: Client) => {
      return flattenedClients.concat(client.client_name);
    }, []);
  };

  const groupClientsByFirstLetter = (clients: string[]) => {
    return clients.reduce((groupedClients: Record<string, string[]>, client: string) => {
      const firstLetter = (client[0] || '').toUpperCase();

      // Check for duplicate client_name within each group
      if (!groupedClients[firstLetter]?.includes(client)) {
        groupedClients[firstLetter] = groupedClients[firstLetter] || [];
        groupedClients[firstLetter].push(client);
      }

      return groupedClients;
    }, {});
  };

  const flattenedClientNames = flattenClientNames(clients);
  const groupedClients = groupClientsByFirstLetter(flattenedClientNames);
  const sortedLetters = Object.keys(groupedClients).sort();

  return (
    <div className="clients">
      {loading ? <h1>Loading clients...</h1>
        : (
          sortedLetters.map((letter) => (
            <div key={letter} className="clients__letter-box">
              <h3>{letter}</h3>
              <ul>
                {groupedClients[letter].map((client, index) => (
                  <li key={index}>{client}</li>
                ))}
              </ul>
            </div>
          ))
        )}
    </div>
  );
}




