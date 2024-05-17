// 4) BONUS: Go to lorem ipsum generator and:
    console.log('Bonus')

// 1. Generate 3 paragraphs. Store the text in a lorem variable
    console.log('Bonus 1')
    let lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit ut aliquam purus sit amet luctus. Diam sollicitudin tempor id eu nisl nunc mi ipsum faucibus. Purus faucibus ornare suspendisse sed nisi lacus sed. In aliquam sem fringilla ut morbi. Dignissim sodales ut eu sem integer vitae justo eget. Metus dictum at tempor commodo ullamcorper a lacus vestibulum. Tellus orci ac auctor augue mauris. Urna et pharetra pharetra massa massa. Habitasse platea dictumst vestibulum rhoncus. Et molestie ac feugiat sed. Elementum integer enim neque volutpat ac. Elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi. Nulla facilisi cras fermentum odio eu feugiat pretium. Vestibulum rhoncus est pellentesque elit ullamcorper. Blandit libero volutpat sed cras ornare arcu. Amet nisl suscipit adipiscing bibendum est ultricies integer quis auctor. Egestas congue quisque egestas diam in arcu cursus euismod quis.\n\nId donec ultrices tincidunt arcu non sodales neque.Vel pharetra vel turpis nunc eget lorem dolor.Vivamus at augue eget arcu dictum varius duis.Ut enim blandit volutpat maecenas.Euismod in pellentesque massa placerat duis ultricies lacus.Cursus in hac habitasse platea.Integer quis auctor elit sed vulputate mi sit.Tempor orci dapibus ultrices in iaculis nunc.Lectus sit amet est placerat.Bibendum neque egestas congue quisque egestas.Vitae turpis massa sed elementum tempus egestas.Vitae tortor condimentum lacinia quis vel eros donec.Orci sagittis eu volutpat odio facilisis mauris sit amet.Curabitur gravida arcu ac tortor dignissim convallis aenean et.Egestas tellus rutrum tellus pellentesque eu.Tincidunt arcu non sodales neque.Pretium fusce id velit ut tortor pretium viverra.Vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor.Faucibus ornare suspendisse sed nisi lacus.\n\nPellentesque diam volutpat commodo sed egestas egestas fringilla phasellus.Posuere morbi leo urna molestie at elementum.Ultrices eros in cursus turpis massa.Sit amet nisl suscipit adipiscing.Cras semper auctor neque vitae.Mauris a diam maecenas sed.Pulvinar mattis nunc sed blandit libero volutpat sed cras.Elementum eu facilisis sed odio morbi quis.Sed ullamcorper morbi tincidunt ornare massa eget egestas purus.Turpis cursus in hac habitasse platea dictumst quisque sagittis purus.Orci porta non pulvinar neque laoreet suspendisse.Diam in arcu cursus euismod quis viverra nibh cras.'
    
// 2. Make your program count the number of words in the lorem
    console.log('Bonus 2')
    let arrWords = lorem.split(' ') //array of words from lorem
    console.log('lorem has ' + arrWords.length + ' words') //number of words
    
// 3. Make your program count the number of times the Latin word "et" appears in lorem
    console.log('Bonus 3')
    let count = 0
    for (let i = 0; i < arrWords.length; i++){
        if (arrWords[i] === 'et'){
            count++
        }
    }
    console.log('The word "et" appears ' + count + ' times.')