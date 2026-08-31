# DataWhore
This is my shot at a self hosted storage solution which you can use from the website which also 
preserves the file structure inside the storage device you're hosting it on.
- So You can simply host it on your home PC and create a symlink
- As well as use it normally while browsing inside the storage in the computer
- The order you uploaded/path in your browser will be the same in the storage device.

# How to use?
- Register an account at /register
- Proceed to login at /login
- After logging in you'll see a blank dashboard with two buttons at the top right  
- You Can upload a file and change it's name at the time of upload or not.
- After you upload a file a filecard appears with either a preview or a placeholder icon of the file.
- You Can Download the file or delete it from the dashboard

# Dealing with folders
- You can also create folders from the button at top right
- After creating a folder you can proceed to click on it and create additional folders in it or upload files.
- Your current path appears in the url and you can navigate to your files in your storage device with the same path.

# How to Locally host?

- Clone into the Repository 
- Setup Nginx to route a domain to your project
- Install the dependencies for the project (bun install) (composer install)
- Configure the environment variables with your values
- Run all the migrations
- Build the Project
- Voila! You've got a self hosted solution to your storage issues.
