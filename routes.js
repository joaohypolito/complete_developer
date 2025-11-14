import fetch from "node-fetch";

const routeHello = () => 'Hello World!';

const routeAPInames = async () => {
    const url = "https://www.usemodernfullstack.dev/api/v1/users";
    
    let data;
    
    try {
        const response = await fetch(url);
        data = await response.json();
    } catch (e) {
        return e;
    }

    const names = data.map((name) => `id: ${name.id}, name: ${name.name}`).join("<br>");

    return names;
};

export {routeHello, routeAPInames}