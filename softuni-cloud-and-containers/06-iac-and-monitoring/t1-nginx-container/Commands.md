1. Create it using Docker
2. `docker run -d -p 8000:80 --name container1 nginxdemos/hello`

3. Create it using Terraform
4. Create the `tf` file -> `nginx-hello.tf`
5. Get a registry provider for Docker in the Terraform docs
6. Copy/Paste the template code into the `nginx-hello.tf` file
7. `docker context ls`
8. `docker context use default`
9. Add the provider host address to the `nginx-hello.tf` file from the context list in the terminal
10. Find a docker image for Docker in the Terraform docs
11. Add the image as a resource to the `nginx-hello.tf` file
12. Deploy the infrastructure with Terraform
13. `terraform init` -> Installs the requirements
14. `terraform fmt` -> Formats the `nginx-hello.tf` file
15. `terraform validate` -> Validates the configuration & check for issues
16. `terraform plan` -> Prints out the action plan -> what will happen, what changes will be made, etc.
17. `terraform apply` -> Apply/Initiate the action plan -> Confirm by typing `yes`
18. Confirm the container is created and everything works properly
19. The created `terraform.tfstate` file should not be altered manually
20. `terraform destroy` -> To remove/delete the resources created be Terraform