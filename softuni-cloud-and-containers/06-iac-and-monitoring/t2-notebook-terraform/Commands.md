1. Create and configure `setup.tf`
2. Find the terraform docs for a random integer
3. Add this random integer resourcee to the `setup.tf` file
4. `terraform fmt`
5. `terraform init`
6. `terraform plan`
7. `terraform apply`
8. Confirm the group creation with the desired resources
9. Find the terraform docs for `Azure service plan` -> Add this resource to the `setup.tf` file and configure it accordingly
10. Find the terraform docs for `Linux Web App` -> Add this resource to the `setup.tf` file and configure it accordingly
11. Find the terraform docs for `App Service Source Control` -> Add this resource to the `setup.tf` file and configure it accordingly
12. `terraform fmt`
13. `terraform init`
14. `terraform validate`
15. `terraform plan -out=./planfile.tfplan` (optional) | `terraform plan` (should always work if config is right)
16. `terraform apply`