# crm-react
Mini CRM Application built with React

This project integrates some features of ReactJS 15, 16+ (functional components & class components). It adds users to CRM, list, edit and delete them. The frontend part is made in React JS and backend part is built in Java with Spring Boot Framework so that we can get an REST API and consume those data.

## React dependencies

* React Router DOM V6
* Formik
* Hooks
* Class Components (outed version: you can change all those components to functional if you want modernize it)
* Functional Components

## Java (Spring Boot)

* MySQL connector (Creation of a DB on MySQL locally)
* Lombok

## Tool Testing API endpoints

* Postman

## Snapshots

### Página principal (`GET /clientes`)

![Home page](https://github.com/angellox/crm-react/blob/main/Demo1.png)

### Registrando un nuevo cliente (`POST /clientes`)

![Registrando un nuevo usuario o cliente](https://github.com/angellox/crm-react/blob/main/Demo5.png)

### Viendo datos de un cliente (`GET /clientes/{id}`)

![Viendo datos de un cliente en específico](https://github.com/angellox/crm-react/blob/main/Demo2.png)

### Editando los datos de un cliente (`PUT /clientes/{id}`)

![Editando los datos de un cliente existente](https://github.com/angellox/crm-react/blob/main/Demo3.png)

### Eliminando a un cliente en específico (`DELETE /clientes`)

![Eliminando a un cliente de la lista y db](https://github.com/angellox/crm-react/blob/main/Demo4.png)
