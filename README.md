
# Task Manager

Developer Task Manager: Simplify project management for developers. Organize tasks, track progress, and achieve coding milestones with ease.

## Screenshots

### Homepage
![Homepage](https://i.imgur.com/5pq0ZhK.png)

### Projects
![Projects](https://i.imgur.com/jNMKKN8.png)

### Project Details - Task Update
![Project Details](https://i.imgur.com/fdhjyVP.gif)


### Project Details - Create New Task
![Project Details](https://i.imgur.com/E70lAsY.gif)

### Form - Create Project
![Form](https://i.imgur.com/97u3YP0.png)


## Tech Stack

**Client:** SvelteKit, Tailwindcss, DaisyUi

**Bakcend:** SvelteKit, Next-auth, Prisma, MySQL...


## Run Locally

Clone the project

```bash
  git clone https://github.com/wesleywil/task_manager
```


### Frontend

Install dependencies

```bash
  npm install
```

Execute the Prisma commands
```bash 
   npx prisma generate
   npx prisma migrate dev
```

Start the server

```bash
  npm run dev
```


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`DATABASE_URL`

`NEXTAUTH_SECRET`

`NEXTAUTH_URL`

`GOOGLE_ID`

`GOOGLE_SECRET`


## Authors

- [Wesley Wilson](https://github.com/wesleywil)

