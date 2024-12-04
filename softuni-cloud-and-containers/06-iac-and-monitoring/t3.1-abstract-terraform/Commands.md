1. Create the different abstract files
2. Create all variables
3. `cd` into the directory
4. `terraform init`
5. `terraform fmt`
6. `terraform validate`
7. Confirm there are no errors
8. Populate the variables' corresponding values into the `values.tfvars` file
9. `terraform fmt`
10. Replace the hardcoded values in `main.tf` with the variables created above
11. Configure `output.tf` file with desired output options
12. `terraform fmt`
13. `terraform validate`
14. `terraform plan`
15. `terraform apply -var-file="values.tfvars"` -> to relate to the variables
16. When done -> `terraform destroy` to remove everything and prevent further charges
