# ngrok-n8n Automation Test
I'm just testing N8N, Ngrok and Bunjs =)

Running n8n docker:
```bash
    docker run -it --rm --name n8n -p 5678:5678 -v n8n_data:/home/node/.n8n docker.n8n.io/n8nio/n8n
```

Running bun project:
```bash
    bun --watch src/index.ts
```

Now, run ngrok):
```bash
    ngrok http 3001
```

Open http://localhost:5678 and see that N8N is running.
With this project, we can make a http request to N8N (using insomnia, postman, etc), and he gives it back to our application.

#
To install bun: 
```bash 
curl -fsSL https://bun.sh/install | bash
```

To install ngrok:  
```bash 
    curl -s https://ngrok-agent.s3.amazonaws.com/ngrok.asc | sudo tee /etc/apt/trusted.gpg.d/ngrok.asc >/dev/null && echo "deb https://ngrok-agent.s3.amazonaws.com buster main" | sudo tee /etc/apt/sources.list.d/ngrok.list && sudo apt update && sudo apt install ngrok
```