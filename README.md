# DataWhore
This is my shot at a self hosted storage solution which you can use from the website which also 
preserves the file structure inside the storage device you're hosting it on.
- So You can simply host it on your home PC and create a symlink
- As well as use it normally while browsing inside the storage in the computer
- The order you uploaded/path in your browser will be the same in the storage device.

# Why Did I create it?
This project was primarily created with the intention of learning php/Laravel Backend while also trying to create something meaningful and remotely usable.

# What is in store in the future for this project?
I don't intend to abandon this project and plan to fork this multiple times releasing further iterations for this project as I want to use this for my self as a solution for my storage needs.

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

# Preview
<img width="1920" height="1101" alt="image" src="https://github.com/user-attachments/assets/ea6ab586-9694-480f-905d-062fc7dd662f" />
<img width="384" height="471" alt="image" src="https://github.com/user-attachments/assets/a81c5b0d-9f8b-4f8d-b9f8-95d405cbceac" />
<img width="381" height="203" alt="image" src="https://github.com/user-attachments/assets/dc30e01c-11c0-4a7a-8c10-200291a969bc" />

# AI Usage
- AI was explicitly used in this project for the sole purpose of debugging and helping me figure stuff out when hitting a roadblock
- No Vibe Coding was done in this project.
