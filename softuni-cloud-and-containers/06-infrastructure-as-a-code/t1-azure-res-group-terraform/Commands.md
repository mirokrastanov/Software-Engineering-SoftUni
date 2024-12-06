1. Install the Azure CLI
- `$ProgressPreference = 'SilentlyContinue'; Invoke-WebRequest -Uri https://aka.ms/installazurecliwindows -OutFile .\AzureCLI.msi; Start-Process msiexec.exe -Wait -ArgumentList '/I AzureCLI.msi /quiet'; Remove-Item .\AzureCLI.msi`
1. Auth via the Azure CLI -> `az login`
2. `az account show`
3. Look for the correct azure provider in the Terraform Registry Docs
4. Include the provided starter template to the `azure-rg.tf` file
5. Setup the resource and complete the configuration
6. `terraform fmt`
7. `terraform init` 
8. Add a real `subscription_id` to the configuration
9. `terraform plan`
10. `terraform apply` -> `yes`
11. Task is completed.
12. To remove the group -> `terraform destroy`
13. Obtain the connection string from the Azure portal -> Resource groups -> Current group -> Current app -> Settings -> Environment variables -> Connection string -> Show value -> Copy the value
14. Add `MONGODB_URI` to app settings -> Resource groups -> Current group -> Current app -> Settings -> Environment variables -> App settings -> New -> Name: `MONGODB_URI` -> Value: `the connection string copied previously` -> Apply
15. Add `DATABSE_NAME` to app settings -> Resource groups -> Current group -> Current app -> Settings -> Environment variables -> App settings -> New -> Name: `DATABASE_NAME` -> Value: `shown during app initialization process in the Azure portal` -> Apply
16. Apply all and confirm.
17. Navigate to the Azure portal -> Deployment -> Deployment Center -> Source -> GitHub -> Fill the form -> Save
18. Confirm in GitHub that the GitHub Action is created