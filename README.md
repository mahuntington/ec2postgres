# Intro to AWS

## Set Up

https://github.com/mahuntington/ec2postgres/assets/981450/22d27558-b99b-4c36-b8f0-29834562f7a4

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

https://github.com/mahuntington/ec2postgres/assets/981450/73b4196d-ccbf-45c8-aeef-affac44247df

1. After creation, wait a few minutes for the installation of the tools to complete and click on Connect to instance
1. From EC2 Dashboard:

    1. Resources: click Instances (running)
    1. Click Instance ID
    1. Click Connect

1. Click SSH Client of not already chosen
1. Locally, locate directory containing `.cer` file
1. `chmod 400 pern.cer` (substitute filename for pern.cer)
1. copy Example connect command from AWS page.  Note, that you may need to change the name and/or extension of the `.cer` file listed in the command to match the actual file name on your computer
1. confirm connecting

## GitHub

https://github.com/mahuntington/ec2postgres/assets/981450/30425075-0d65-43a3-bd1f-1de050459e9e

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

https://github.com/mahuntington/ec2postgres/assets/981450/ad4182ce-19a9-4cfd-b94a-55c1e089cfce

1. Go to EC2 Dashboard
1. Resources: Click on Instances (running)
1. Click on Instance ID
1. Click on Security Tab
1. Click on link under Security Groups
1. Click on Edit inbound rules
1. Click on Add Rule
1. Choose Custom TCP
1. For Port range enter 3000 or whatever
    - each time a new app is deployed, a new unique port number must be opened and the app must listen on it
1. For Source choose Anywhere-IPv4
1. Click Save rules
1. Click on Instances
1. Click on Insance ID
1. Copy Public IPv4 address or Public IPv4 DNS
1. Paste into browser and add :3000 after it

## Assign Elastic IP

https://github.com/mahuntington/ec2postgres/assets/981450/97878ebe-63a4-47da-8af4-d1e0bcd0d623

1. In EC2 Dashboard, click on Elastic IPs in left menu bar
1. Click "Allocate Elastic IP address"
1. Click "Allocate"
1. Check box next to instance and click on "Actions" dropdown
1. Choose "Associate Elastic IP address"
1. Click into "Instance" text input
1. Choose your instance from autocomplete option
1. Click on "Associate"
1. Click on "Instances" in left menu bar
1. Click on instance id
1. Note existence of "Elastic IP Address"
1. Use this IP address instead of previous IP address.
1. When reconnecting to the server via SSH, re-copy the connection string.  The domain for your server changes when your server's IP changes to the Elastic IP

## Monitoring the app for downtime

AWS sporadically restarts EC2 instances with no warning.  The simplest solution is to use https://www.downnotifier.com/

1. Enter Website URL
1. Enter your email address
1. Make sure "Notify Me: When the site is offline" is selected
1. Click "Start monitoring my website"
