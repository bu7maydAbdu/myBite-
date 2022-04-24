fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        
      })
      .catch(err => {
          console.log(`error ${err}`)
      });