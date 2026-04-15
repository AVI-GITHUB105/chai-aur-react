function customRender(reactElement, container){
    // const domElement = document.createElement(reactElement.type)
    // domElement.innerHTML= reactElement.children
    // in this code the problem is that we have to add multiple attributes
    // domElement.setAttribute('href',reactElement.props.href)
    // domElement.setAttribute('target',reactElement.props.target)

    // container.appendChild(domElement)

    // here is a moduler approach by using loops

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
        if (prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop])
    } 
    container.appendChild(domElement)
};

const reactElement = { // yesab niche ka ; react deta h but hum apni khud ki library bana rhe h to har element isi trah se likhna hoga 
    type:'a',
    props: {
        href : 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
}

const maincontainer = document.querySelector("#root");

customRender(reactElement, maincontainer);
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
        if (prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domElement)