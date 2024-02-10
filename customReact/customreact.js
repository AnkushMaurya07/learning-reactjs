//React tries to make a tree using the return thingy we provide



function customRender(reactElement, container) {
    const domElement = document.createElement(reactElement.type)
    domElement.innerHtml = reactElement.children
    for (const prop in reactElement.props) {
        if (prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop])
    }
     container.appendChild(domElement)   
}

//This is what we get from react or in this case custom made.
const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
}

const mainContainer = document.querySelector('#root')
// I want to render this <a> tag

//Now we want an element/method which renders the "reactElement" into mainContainer(basically add/injects the content)
customRender(reactElement, mainContainer)