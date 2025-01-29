provider "aws" {
  region = "eu-central-1"
}

resource "aws_instance" "react_app_instance" {
  ami           = "ami-0a628e1e89aaedf80" 
  instance_type = "t3.micro"
  security_groups = [aws_security_group.react_app_sg.name]
  associate_public_ip_address = true
  key_name = "k0g0K"

  tags = {
    Name = "ReactAppInstance"
  }
}

resource "aws_security_group" "react_app_sg" {

  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name = "ReactAppSecurityGroup"
  }
}

output "ip" {
  value = aws_instance.react_app_instance.*.public_ip
}
