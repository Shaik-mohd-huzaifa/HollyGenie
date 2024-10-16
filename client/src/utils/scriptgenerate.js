export const GenerateScript = async (query, genes) => 
    await fetch('https://data.fleak.ai/api/v1/events/46424ad6-9e48-403d-b7c8-f098d24c6ae7/prod', {
        method: 'POST',
        headers: {
            'api-key': 'FLEAK_API_KEY',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify([
      {
        "query": query,
        "labels": genes
      }
    ])
    })
    .then(response => response.json())
    .then(data => (data.outputEvents[0].choices[0].message.content))
    .catch((error) => console.error('Error:', error))