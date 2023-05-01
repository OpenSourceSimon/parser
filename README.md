# Postlight Parser API

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A RESTful API wrapper for the [Postlight Parser](https://github.com/postlight/mercury-parser) library. The API allows you to extract content and metadata from any webpage by simply sending a GET request with the URL of the page you want to parse. 

## Getting Started

### Prerequisites

You'll need to have the following installed on your machine:

- [Node.js](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/)

### Installation

1. Clone this repository:
```bash
git clone https://github.com/OpenSourceSimon/parser
```
2. Install dependencies
```bash
cd parser
npm install
```

### Usage
You can start the server locally with:
```bash
node index.js
```
The API is now available at `http://localhost:3000`. To parse a webpage, send a GET request to the `/parse` endpoint, passing the URL of the page as a query parameter:
```http
GET http://localhost:3000/parse?url=<url-to-parse>
```
The response will be a JSON object containing the extracted content and metadata.

## Contributing

Contributions are welcome! If you have an idea for a new feature or find a bug, please open an issue. If you want to contribute code, please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
