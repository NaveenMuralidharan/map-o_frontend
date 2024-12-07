## Map-O: Process & Knowledge Mapping Tool

## **Map-O** is a powerful tool designed for organizations to efficiently map out business processes and associated knowledge. The frontend of the application allows users to visualize, create, and manage process maps interactively.
---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Technologies Used](#technologies-used)
3. [Features](#features)
4. [Installation and Setup](#installation-and-setup)
5. [Usage](#usage)
6. [API Routes](#api-routes)
7. [Component Architecture](#component-architecture)
8. [Contributing](#contributing)
9. [License](#license)
10. [Contact](#contact)

---

## Project Overview

Map-O helps organizations to effectively map their processes, visualize workflows, and gain insights into their operations. The frontend part of the project provides an interactive user interface for users to create and manage process maps.

This repository contains the frontend application built with React, connecting to a backend (presumably in a separate repository) where process maps are stored and retrieved.

---

## Technologies Used

- **Frontend**:  
  - React
  - JavaScript (ES6+)
  - Mermaid JS (for process mapping visualization)
  - React Router DOM (for navigation)
  
- **Backend** (For reference, assuming it connects to a Node/Express API):  
  - MongoDB
  - Express
  - Node.js

- **Others**:
  - Axios (for API requests)
  - Styled-components (for styling)

---

## Features

- **Create Process Maps**: Users can create new process maps through a user-friendly form.
- **Visualize Processes**: Users can view and interact with flowcharts and process maps built using Mermaid JS.
- **Edit and Update Process Maps**: Modify existing process maps directly from the interface.
- **Delete Process Maps**: Remove any process map that is no longer needed.
- **View Specific Process Maps**: View detailed information of a specific process map using dynamic routing.

---

## Installation and Setup

To set up Map-O Frontend on your local machine, follow these steps:

### 1. Clone the Repository

```bash
git clone https://github.com/NaveenMuralidharan/map-o_frontend.git
cd map-o_frontend
```
2. Install Dependencies
Ensure that you have Node.js and npm installed. Run the following command to install the required dependencies:
```
npm install
```
3. Run the Development Server
Start the local development server by running:
```
npm start
```
Your app will be running at http://localhost:3000.

## Usage

### Frontend Routes:

- **/process**: Homepage to view or create a new process map.
- **/process/:id**: View the details of a specific process map.
- **/create**: A form for creating new process maps.
- **/update/:id**: Update an existing process map.
- **/delete/:id**: Delete a process map.

#### Webdesign Mockup:

#### Home Page
####A dashboard to view and manage processes.
<img src="https://i.imgur.com/Bkv3eEQ.png">

#### Create Process Map
#### A form to input details about a new process.
<img src="https://i.imgur.com/BG7Zyow.png">

#### Process Map Details
A visual representation of the process flow.
<img src="https://i.imgur.com/T7EwcK0.png">

#### Edit Process Map
####Modify details of an existing process.

<img src="https://i.imgur.com/2RIx47t.png">

## API Routes

### Backend Routes:

| Endpoint        | Method | Description                                                          |
| --------------- | ------ | -------------------------------------------------------------------- |
| `/process`      | GET    | Brings user to the homepage for creating or selecting a process map. |
| `/process/:id`  | GET    | Fetches details of a specific process map based on the ID.           |
| `/process`      | POST   | Creates a new process map.                                           |
| `/process/:id`  | PUT    | Updates an existing process map by ID.                               |
| `/process/:id`  | DELETE | Deletes a process map by ID.

#### Component Architecture:
#### Below is a simplified architecture diagram for the component structure of the frontend application:
<img src="https://i.imgur.com/tHkYmZ8.png">

## Contributing

We welcome contributions to improve Map-O. If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch (git checkout -b feature-name).
3. Make your changes and commit them (git commit -am 'Add new feature').
4. Push to the branch (git push origin feature-name).
5. Open a pull request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For any questions or inquiries, please contact:

- **Author**: Naveen Muralidharan
- **Email**: naveenspec@gmail.com *(replace with actual email)*

## Future Improvements

- **Debug Big SVG Chart Generation**: Improve performance when handling larger process maps.
- **Expand Model**: Add more customizable steps to the process model.
- **Clickable Links**: Add functionality for interactive clickable links within the process maps.
- **Add More User Features**: Implement user authentication, sharing options, and export functionality.




