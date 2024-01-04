# CityLookup Web Application

## Overview
CityLookup is a Next.js-based web application designed to interface with the CityLookup API. It provides a user-friendly interface for looking up city addresses and displaying them.

## Prerequisites
- Node.js (version 18 or higher)
- Yarn package manager

## Installation

### Clone the Repository
You have two options for cloning:

- To clone all CityLookup components at once:

  `git clone https://github.com/CityLookup-git/CityLookup`

If cloned like this, CityLookup API will be located inside the `frontend` folder.

- To clone only the CityLookup Frontend:

  `git clone https://github.com/CityLookup-git/CityLookup-Frontend.git`

### Environment Setup
1. Navigate to the project directory
2. Install the required dependencies using Yarn:

`yarn install`

3. Rename `.env.local.example` to `.env.local`.
4. Modify the API URL in `.env.local` if your CityLookup API instance is not running on the default address.

## Usage

### Running the Application
To start the application in development mode, run:

`yarn dev`

This will start the server on `http://localhost:3000` by default.

### Building for Production
To build the application for production, run:

`yarn build`

To start the production server, use:

`yarn start`

## Contributing
Contributions are welcome! For any improvements or issues, please open a pull request or issue.
