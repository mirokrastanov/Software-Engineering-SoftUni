1. Publish in a public GitHub repository
2. Create a new GitHub Action
3. Use the default Terraform Action and create a `test-terraform.yml` workflow file
4. Edit the file and adjust the configuration
5. Make sure the test action execution completes successfully
6. Complete the process by including the `terraform apply` command in order to deploy it on Azure
7. `az ad sp create-for-rbac --name "NAME_OF_PRINCIPAL_I_HAVE_CHOSEN_HERE" --role contributor --scopes subscriptions/MY_AZURE_SUBSCRIPTION_ID_STRING_HERE --sdk-auth` -> Execute this command with the appropriate `subscription ID` from my Azure account in order to -> Create a Service Principal
8. To confirm the creation (in addition to the output in the CLI) go to the Azure portal -> Search for Microsoft Entra ID -> App Registrations -> The name used for the principal
9. Go to the GitHub Repository of the project -> Settings -> Secret and Variables -> Actions -> New Repository Secret
    - `AZURE_CLIENT_ID` -> Copy this field's value from the output of the CLI after the principal creation
    - `AZURE_CLIENT_SECRET` -> Same as above
    - `AZURE_CREDENTIALS` -> Copy the whole object
    - `AZURE_SUBSRIPTION_ID` -> Copy just this field
    - `AZURE_TENANT_ID` -> Same as above
10. Open the project folder in VS Code
11. `git pull`
12. Copy the `test-terraform.yml` file
13. Rename the new file to `plan-terraform.yml`
14. Add the environment variables from GitHub's secrets vault to the plan in the following format `ARM_CLIENT_SECRET: ${{secrets.AZURE_CLIENT_SECRET}}`
15. Add an Azure Login step to the `plan-terraform.yml` workflow for the GitHub action
16. Configure the current steps and the apply into two jobs running sequentially
17. Finish with the apply command, but make sure it's auto-confirmed
18. Run the GitHub action with the `plan-terraform.yml` workflow file
19. !! TODO: Remove the random integer from all resource names. Make sure the terraform state file is saved
20. Create a resource group in the Azure portal -> Name: `StorageRG` -> Region: `North Europe`
21. Create an Azure Storage account -> `az storage account create --name taskboardstorageunique --resource-group StorageRG --location northeurope --sku Standard_LRS --kind StorageV2`
22. Create a Storage Container -> `az storage container create -n taskboardstoragecontainer --account-name taskboardstorageunique ` -> In case of errors -> Do an `az login` first and try again.
23. Create a backend block `backend "azurerm" { }` in the `main.tf` configuration using the above data with the following inside the code block:
    - `resource_group_name  = "StorageRG"`
    - `storage_account_name = "taskboardstorageunique"`
    - `container_name       = "taskboardstoragecontainer"`
    - `key                  = "terraform.tfstate"`
24. Execute the GitHub Action workflow
25. Confirm the `terraform.tfstate` file appears and is saved in the storage container, created above.
26. Look in the Terraform docs for `resources` -> `storage_account` -> In order to perform 20 - 23 via the `terraform CLI` and also add it to the GitHub workflow
27. Same as 26 applies to the Service Principal Creation process in 7