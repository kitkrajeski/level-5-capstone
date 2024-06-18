let houseData = [];
async function getData(){

    for (i = 1; i <= 444; i++){
        fetch (`https://anapioficeandfire.com/api/houses/${i}`)
            .then(response => {
                if(!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json(); 
            })
            .then(data => {
                houseData = [...houseData, data];
              })
            .catch(error => {
                console.error('There was a problem with your fetch operation:', error);
              });
    
            }
        return houseData;
}    

console.log(houseData);
