# Intro to AWS

## Set Up

### AWS Console

1. Sign In
1. Search EC2
1. Hover ove EC2
1. Click Dashboard
1. Launch instance: Click Launch Instance
1. Name and tags: Give it a name
1. Application and OS Images (Amazon Machine Image): Choose Ubuntu
1. Key pair (login): Create new key pair
1. Key pair name: give it a name
1. Key pair type: ED25519
1. Click Create key pair
1. Download file
1. Advanced Details: paste user data file
1. Click launch instance

### User data Script

```
#!/bin/bash
sudo apt-get -y update
sudo apt-get -y install postgresql
sudo -u postgres psql -d postgres -c "CREATE USER ubuntu SUPERUSER LOGIN PASSWORD 'ubuntu'";
echo "export PGPASSWORD=ubuntu" >> /home/ubuntu/.profile
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash - 
sudo apt-get -y install nodejs
```

## Connect

1. After creation, click on Connect to instance
1. From EC2 Dashboard:

    1. Resources: click Instances (running)
    1. Click Instance ID
    1. Click Connect

1. Click SSH Client of not already chosen
1. Locally, locate directory containing .pem file
1. `chmod 400 pern.pem` (substitute filename for pern.pem)
1. copy Example connect command from AWS page
1. confirm connecting

## GitHub

1. clone repo via https
1. `cd` into repo
1. `npm i`
1. start tmux session
1. `node server.js`

## Tmux

1. `tmux new -s mernapp` to start session
1. `ctrl+b d` to detach
1. `tmux ls` list sessions
1. `tmux attach-session -t mernapp` reattach session
1. `tmux kill-session -t mernapp` destroy session
    - (`ctrl+c` to stop process and then `exit` from within tmux is preferable)

## AWS Console

1. Go to EC2 Dashboard
1. Resources: Click on Instances (running)
1. Click on Instance ID
1. Click on Security Tab
1. Click on link under Security Groups
1. Click on Edit inbound rules
1. Click on Add Rule
1. Choose Custom TCP
1. For Port range enter 3000-9000 (maybe just 10 ports?)
1. For Source choose Anywhere-IPv4
1. Click Save rules
1. Click on Instances
1. Click on Insance ID
1. Copy Public IPv4 address or Public IPv4 DNS
1. Paste into browser and add :3000 after it