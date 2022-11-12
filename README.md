# Node-Shell

Node.js is a tool that allows us to execute machine processes in Javascript.

Before Node's release, Javascript had been confined mostly to the browser, only able to execute programs and logic in a browser environment that has many restrictions and limited capabilities for interacting with a client machine.

With Node, we are able to run programs written in Javascript that interact with a machine. Node has access to low-level components, such as file systems, operating system properties, and the network.

This project implements common bash (Unix Shell) commands using Node.js. Due to Node's ability to access low-level system information and utilities, we can mimic many terminal operations, which is totally impossible to do in the browser.

Commands Implemented in this project: 
  - pwd: prints out the full path to the current working directory
  - ls: list directory contents
  - cat 'file name': prints the contents of the file listed
  - date: print or set the system date and time
  - echo 'text': displays a line of text
  - head 'file name': output the first 5 lines of a file
  - tail 'file name': output the last 5 lines of a file
  
