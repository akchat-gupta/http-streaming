# HTTP Streaming Demo

This repository contains a small demonstration of HTTP streaming using a .NET API project and a React frontend application.

## Project Structure

- **API**: `StreamingAPI`  
  A .NET project that serves as the backend. It uses SQL Server as its database. Migrations need to be applied for the database setup.
  
- **Frontend**: `StreamingApp`  
  A React project that acts as the frontend client for the API.

## Prerequisites

1. [.NET 6 SDK or later](https://dotnet.microsoft.com/download)
2. [Node.js](https://nodejs.org/) (for the React project)
3. [SQL Server](https://www.microsoft.com/en-us/sql-server/sql-server-downloads) or [SQL Server Express](https://www.microsoft.com/en-us/sql-server/sql-server-editions-express) installed locally.

## Running the Projects

### Setting up the API

1. Navigate to the API directory:

   ```bash
   cd StreamingAPI
   ```

2. Update the `appsettings.json` file to include your SQL Server connection string:

   ```json
   "ConnectionStrings": {
     "DefaultConnection": "Data Source=YOUR_SERVER_HERE;Initial Catalog=ProductDb;Integrated Security=True;Connect Timeout=30;Encrypt=True;Trust Server Certificate=True;Application Intent=ReadWrite;Multi Subnet Failover=False"
   }
   ```

3. Create the database and apply migrations:

   ```bash
   dotnet ef database update
   ```

4. Run the API:

   ```bash
   dotnet run
   ```

   The API will start on `https://localhost:7252` or `http://localhost:5050` by default.

### Setting up the React App

1. Navigate to the React project directory:

   ```bash
   cd StreamingApp
   ```

2. Install the required npm packages:

   ```bash
   npm install
   ```

3. Start the React application:

   ```bash
   npm start
   ```

   The React app will run on `http://localhost:5173` by default.

## Notes

- Ensure that the API project is running before starting the React application, as the frontend will make requests to the API.
- You may need to adjust CORS settings in the API if accessing from a different origin.
