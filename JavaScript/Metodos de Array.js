const posts = [{
    id:1,
    title: 'Mi primer post',
    imagine: 'https//img.com/1',
    tags: ['javascript', 'webdevelopment'],
},{
    id:2,
    title: 'Mi primer react',
    imagine: 'https//img.com/2',
    tags: ['javascript', 'webdevelopment', 'react'],
},{
    id:3,
    title: 'Mi primer angular',
    imagine: 'https//img.com/3',
    tags: ['javascript', 'webdevelopment', 'angular'],
}]


// Find

Posr.find(post => post.id == 1);

//some
 
posts.some(post => post.id === 1) //true

//Includes

posts.some(post => post.tags.includes ('vue')) //false

//Every

posts.every(post => post.tags.includes ('javascript')) //true

//Map

posts.map(post => post.title) 

//Filter

posts.filter(post => post.tags.includes ('angular'))

//Reduce 

post.reduce((allTags, post) => {
    return Array.from (new set([ ...allTags,...post]))
}, [])