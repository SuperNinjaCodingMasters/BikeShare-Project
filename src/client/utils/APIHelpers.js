export const options = {
    cache: "default",
    dataType: "json",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    method: "GET",
    mode: "cors"
  }
  
  export function checkStatus(response) {
    if (!response.ok) {
      const error = new Error(response.statusText || response.status);
      error.response = response;
      throw error;
    }
    return response;
  }
  
  export function apiSkeleton(url, options, onRequestSuccess, onRequestFail) {
    fetch(url, options)
      .then(checkStatus).catch((error) => {
        throw error;
      })
  
      .then((response) => response.json())
  
      .then((json) => {
        onRequestSuccess(json);
      })
      
      .catch((error) => {
        const response = error.response;
        if (response === undefined) {
          onRequestFail(error);
        } else {
          error.status = response.status;
          error.statusText = response.statusText;
          response.text()
            
            .then((text) => {
            try {
              const json = JSON.parse(text);
              error.message = json.message;
            } catch (ex) {
              error.message = text;
            }
            onRequestFail(error);
          });
        }
      });
  }