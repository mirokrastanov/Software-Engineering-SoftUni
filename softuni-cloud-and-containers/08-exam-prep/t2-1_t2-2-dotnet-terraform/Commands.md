## Initial Config & Resource Group
1. Go to the documentation and grab the starter code for `azurerm_resource_group`
2. Paste it inside the `main.tf` file and initialize configuration
3. Format the file -> `terraform fmt`
4. Install provider -> `terraform init`
5. Validate the configuration -> `terrafor validate`
6. Set a name for the resource group and configure the property name
7. `terraform validate`
## Service Plan & Web App
1. Go to the documentation and grab the starter code for `azurerm_linux_web_app`
2. Adjust name and location of the resource group, based on the configuration above
3. Change `SKU` to `F1`
4.  Repeat 8 and 9 for the web application code block
5.  Set up `connecting string` and `site config`
6.  `terraform validate`
## MSSQL Server & MSSQL Database
1.  Go to the documentation and grab the starter code for `azurerm_mssql_database`
2.  Adjust everything according to the configuration above
3.  `terraform fmt`
4.  `terraform validate`
## Firewall Rule
1.  Go to the documentation and grab the starter code for `azurerm_mssql_firewall_rule`
2.  Adjust everything according to the configuration above and make it available to anyone `0.0.0.0`
3.  `terraform validate`
## Source Control
1.  Go to the documentation and grab the starter code for `azurerm_app_service_source_control`
2.  Adjust everything according to the configuration above and add the github repo
3.  `terraform validate`
## Set up variables
1. Configure `variables.tf`
2. Configure `values.tfvars`
## Output
1. Configure `outputs.tf`  
## Final Terraform Execution
1. `az login` -> `1`
2. `terraform fmt`
3. `terraform validate`
4. `terrafor plan`
5. `terraform apply -var-file="values.tfvars."`
6. 
